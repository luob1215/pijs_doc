
# P2P

## p2pConfigDefault

```JavaScript
p2pConfigDefault = {
  "ca_cert_file": "",   // 当前节点证书(必填)
  "cert_file": "",      // 当前节点证书(必填)
  "key_file": "",       // 当前节点证书(必填)
  "local_host": "0.0.0.0:8080", // 本地监听地址
  "seed_host": "",      // 种子节点地址(第一个节点可以不填), 种子节点用于和其他节点交换信息
  "seed_host_name": "", // 种子节点名(第一个节点可以不填)
  "phi_threshold": 8.0, 
  "sampling_window_size": 1000,
  "max_interval": 10000,
  "initial_interval": 5000,
  "unlive_node_grace_period": 30000,
  "connect_timeout": 5000,
  "version": [0, 1, 0], // 版本
  "seed_amount": 1,
  "not_seed_amount": 1,
  "sync_timeout": 5000,
  "heartbeat_interval": 5000,
  "collect_interval": 30000
}
```

## P2PNat

### startP2P

创建p2p实例

```
async startP2P(config: string): P2PNat
```

### start_port

启动p2p服务
- port: 服务端接口(注意不是系统监听端口)
- name: 服务名称
- mode: 1: send(只接受send消息) 2: request(只接受请求回应模式) 3: 不可靠(性能好，不保证必达)
- pid: 用于接收消息处理方法(当前服务所有业务都在这里处理)

```
async start_port(port: number, name: string, mode: number, pid: number)
```

### connect

连接对端服务,返回客户端实例
- peer: 对端GossipNodeID节点 如: VmvoecS91YdyzncoXp94iFgkmCu82SitFTfFYT4DeKR/1701161221917
- port：start_port中设置的port
- timeout: 连接超时时长
- return
    - P2PClientNat
```
async connect(peer: string, port: number, timeout: number) :P2PClientNat
```

## P2PClientNat

### send

发送消息, 不需要等待对端返回

- start_port 中的mode为1使用

```
send(payload: ArrayBuffer)
```

### request

请求消息，并等待返回结果
start_port 中的mode为2使用

- index: 请求编号(返回的时候会带上)

```
async request(index: number, payload: ArrayBuffer, timeout: number): promise<Uint8Array>
```

## 例子

```JAVASCRIPT
const { P2PNat, P2PClientNat, p2pConfigDefault } = require("native/js_p2p.js");
const { openPid } = require("p2p_pid.js");

let config = p2pConfigDefault;
config.ca_cert_file = "./tests/ca/ca_cert.pem";
config.cert_file = "./tests/A/a.crt";
config.key_file = "./tests/A/a.key";
config.local_host = "0.0.0.0:38080";


const p2pFunc = async () => {
  let p2p = await P2PNat.startP2P(JSON.stringify(config));
  // 第一个参数为虚拟机ID
  let pid = openPid(1, "./p2p_serv_handle.js", "handle");
  await p2p.start_port(8080, "test port", 1, pid);
}

p2pFunc().then((r) => {
  console.log("!!!!!!!!!!p2p:", r);
}).catch(e => {
  console.log("!!!!!!!!!!p2p e:", e.message, e.stack);
});

```
p2p_serv_handle:

接收数据并响应

```JavaScript

/**
 * p2p服务，用于接收数据处理
 */
async function handle(reply, msg) {
    console.log("test!!!!!!!!!!!!!!!!!!!!!!!!msg:", msg);
    reply.reply(Buffer.from("reply b msg!!!!!!!!").buffer);
}



module.exports = {
    handle
}
```