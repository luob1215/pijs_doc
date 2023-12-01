## PIJS

pijs是一个可以执行JavaScript和TypeScript的应用程序，底层由RUST+V8虚拟机实现。


- 支持npm包管理
- 可直接加载ts代码
- 支持网络加载代码(http://url/demo.ts)
- 多线程多虚拟机结构，提升迸发性能
- 支持控制台，可在控制台中直接执行js代码
- 支持进程管理工具，方便在指定的虚拟机中创建pid
- 支持pid与pid之间消息发送接收

安装: 
```
npm install -g pi_ptjs --registry http://192.168.31.241:4873/
或
curl -fsSL http://ser.yinengyun.com:10082/tech/pijs/-/raw/master/tools/install.sh | bash
```

启动:
```
pijs helloworld.ts // 支持ts、js、url 
```

启动控制台 -C

```
pijs test.ts -C // 控制台中可以直接运行JavaScript语法，同时也可以使用require加载模块
```

帮助

```
pijs --help
USAGE:
    PIjs.exe [FLAGS] [OPTIONS] [script]

FLAGS:
    -C, --CONSOLE               Enable with console for work vm
    -B, --DEBUG_BREAK           Enable debug break work vm on port
    -J, --JITLESS               Disable vm jit
    -L, --LITE                  Enable vm lite mode
    -P, --PROFILING             Enable profiling vm
        --help                  Prints help information
        --promise-statistics    Enable promise statistics
        --trace-alloc           Output in stdout following each allocate
        --trace-gc              Output in stdout following each garbage collection
        --trace-gc-detail       Output detail info in stdout following each garbage collection
    -V, --version               Prints version information

OPTIONS:
    -D, --DEBUG <Port>                     Enable debug work vm on port
    -I, --INIT_HEAP_SIZE <Mbytes>          Sets init vm heap size
    -H, --MAX_HEAP_SIZE <Mbytes>           Sets max vm heap size
    -O, --MAX_OLD_SIZE <Mbytes>            Sets max vm old space size
    -S, --MAX_SEMI_SIZE <Mbytes>           Sets max vm semi space size
    -W, --WORK_VM_MULTIPLE <Multiple>      Sets multiple of work vm amount
    -i, --cache_collect_interval <Time>    Sets interval of cache collect for simple web server
    -k, --certs_key <Path>                 Sets Path of certs and keys for simple web server
    -c, --cors_max_age <Age>               Sets max age of CORS for simple web server, default cors max age: 10sec
    -h, --htdocs_dir <Dir>                 Sets htdocs of simple web server, default htdocs: current dir
    -b, --mutilparts_block_size <Size>     Sets size of block for simple web server, default: 8KB
    -p, --port <Port>                      Sets port of simple web server, default port: 80
    -r, --res_max_age <Age>                Sets max age of resource for simple web server, default resource max age:
                                           10sec
    -w, --simple_web_server <Hostname>     Startup and sets host name of simple web server, default port: 80
    -u, --upload_dir <Dir>                 Sets upload dir of simple web server, default upload dir: current dir

ARGS:
    <script>    Sets the script file to execute
```