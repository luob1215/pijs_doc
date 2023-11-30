# 进程管理

## ESProcess
### ESProcess.spawn

创建进程

```JavaScript
let script = "console.log('spawn ok !!!!!!!!!!')";
// pid返回成功不代表，script中的代码执行成功
const pid = ESProcess.spawn(script);
console.log("pid:", pid);

/**
 * pid: 4294967297
 * spawn ok !!!!!!!!!!
 */

```

### ESProcess.receive

接收进程消息

- msg: 接收消息类型如下
    - bool|number|bigint|string|ArrayBuffer|SharedArrayBuffer|NativeObject
    - bool[]|number[]|bigint[]|string[]|ArrayBuffer[]|SharedArrayBuffer[]|NativeObject[]
- from: 来源pid,可以用于回应消息

```JavaScript

const receive = (msg, from) => {
    console.log("from", from);
    console.log("msg", msg);
};

let script =
`console.log('spawn ok !!!!!!!!!!');
ESProcess.receive=${receive.toString()}
`;
const pid = ESProcess.spawn(script);
console.log("pid:", pid);
```

### ESProcess.send(pid, msg)

发送消息

- pid: spawn的返回值
- msg：发送消息类型如下
    - bool|number|bigint|string|ArrayBuffer|SharedArrayBuffer|NativeObject
    - bool[]|number[]|bigint[]|string[]|ArrayBuffer[]|SharedArrayBuffer[]|

```JavaScript
const receive = (msg, from) => {
    console.log("from", from);
    console.log("msg", msg);
};

let script =
`console.log('spawn ok !!!!!!!!!!');
ESProcess.receive=${receive.toString()}
`;
const pid = ESProcess.spawn(script);
console.log("pid:", pid);

setTimeout(() => {
    ESProcess.send(pid, "hello world");
}, 1000);

```

### ESProcess.async_spawn

异步创建spawn

```JavaScript
const demo = async () => {
    const receive = (msg, from) => {
        console.log("from", from);
        console.log("msg", msg);
    };

    let script =
        `console.log('spawn ok !!!!!!!!!!');
    ESProcess.receive=${receive.toString()}
    `;
    // 返回pid表示,script中的同步代码执行完成
    const pid = await ESProcess.async_spawn(script);
    console.log("pid:", pid);
    ESProcess.send(pid, "hello world");
}

demo().then(r => console.log(r)).catch(e => console.log(e));
```