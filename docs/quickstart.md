# quickstart
# Hello World
```TypeScript
console.log("Hello World");
```
运行：
```
PIjs helloworld.ts
```

# 运行WebServer

``` JavaScript
const express = require("express");
const multer = require('multer');

const path = require("path");

const app = express()

app.get('/test/:id', function (req, res) {
    res.send(`id:${req.params.id}`);
})
app.get('/set_header', function (req, res) {
    res.set({
        'tmp': 'set_header'
    });
    res.send('Hello World');
})

app.get('/redirect', function (req, res) {
    res.redirect('http://www.google.com');
})

app.get('/status', function (req, res) {
    res.status(500).json({ error: 'message' });
})


app.get('/upload', function (req, res) {
    res.send(`
    <h2>With <code>"express"</code> npm package</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
})

const upload = multer({ dest: 'upload/' });

app.post('/api/upload', upload.single('f'), (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;

    res.send('Form submitted successfully!');

});

app.listen(80);
```

## Mysql

```JavaScript
var mysql = require('mysql');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'test',
  password: '123456',
  database: 'test'
});

// globalThis.mysql = connection;

connection.connect(function () {
  console.log("连接状态：", connection.state);

  connection.query('SELECT * from tab1', function (error, results, fields) {
    console.log("连接状态222：", connection.state);
    if (error) throw error;
    console.log('The solution is: ', results, " fields:", fields);

    connection.end();
  });
});

```

## 运行p2p

```JavaScript
const { P2PNat, P2PClientNat, p2pConfigDefault } = require("native/js_p2p.js");
const { openPid } = require("./pi_js_builtin/js/p2p_pid");

/**
 * p2pConfigDefault = {
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
 */
let config = p2pConfigDefault;
// 证书要求 使用 ed25519 算法(见私有证书生成文档)
config.ca_cert_file = "./tests/ca/ca_cert.pem";
config.cert_file = "./tests/A/a.crt";
config.key_file = "./tests/A/a.key";
config.local_host = "0.0.0.0:38080";


const p2pFunc = async () => {
  let p2p = await P2PNat.startP2P(JSON.stringify(config));
  let pid = openPid(1, "./p2p_serv_handle.js", "test11");
  await p2p.start_port(8080, "test port", 1, pid);

}

p2pFunc().then((r) => {
  console.log("!!!!!!!!!!p2p:", r);
}).catch(e => {
  console.log("!!!!!!!!!!p2p e:", e.message, e.stack);
});

```