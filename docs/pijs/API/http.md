# Http Server

使用内置的http Server, 需要引入内置模块http_server.js

### Hello World 例子
```
let { HttpServer } = require("http_server.js");

let handler = (request) => {
    switch (request.url) {
        case "/test":
            return {
                status: 200,
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: 'Hello World\n'
            };
            break;
        default:
            return {
                status: 200,
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: 'check url'
            };
            break;
    }


}
let serv = new HttpServer({ handler });
serv.listen(80);
```

### new HttpServer(options)

```
Handler = (
    request: Request,
    response: Response,
)

options {
    handler: Handler;
    port?: number;
    tls?: {
        key: string;
        cert: string;
    }
    host?: string;
    onError?: (error: unknown) => Response | Promise<Response>;
}
```

### TLS

```
let tls = {
    key:"./key.pem",
    cert:"./cert.pem"
}

let serv = new HttpServer({ handler, tls });
serv.listen(443);

```

