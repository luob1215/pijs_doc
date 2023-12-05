"use strict";(self.webpackChunkpijs_doc=self.webpackChunkpijs_doc||[]).push([[304],{8529:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(5893),o=n(1151);const c={},i="Process",l={id:"API/process",title:"Process",description:"ESProcess",source:"@site/docs/API/process.md",sourceDirName:"API",slug:"/API/process",permalink:"/luob1215/pijs_doc/docs/API/process",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"P2P",permalink:"/luob1215/pijs_doc/docs/API/p2p"},next:{title:"index",permalink:"/luob1215/pijs_doc/docs/"}},t={},d=[{value:"ESProcess",id:"esprocess",level:2},{value:"ESProcess.spawn",id:"esprocessspawn",level:3},{value:"ESProcess.receive",id:"esprocessreceive",level:3},{value:"ESProcess.send(pid, msg)",id:"esprocesssendpid-msg",level:3},{value:"ESProcess.async_spawn",id:"esprocessasync_spawn",level:3}];function p(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"process",children:"Process"}),"\n",(0,r.jsx)(s.h2,{id:"esprocess",children:"ESProcess"}),"\n",(0,r.jsx)(s.h3,{id:"esprocessspawn",children:"ESProcess.spawn"}),"\n",(0,r.jsx)(s.p,{children:"\u521b\u5efa\u8fdb\u7a0b"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-JavaScript",children:'let script = "console.log(\'spawn ok !!!!!!!!!!\')";\r\n// pid\u8fd4\u56de\u6210\u529f\u4e0d\u4ee3\u8868\uff0cscript\u4e2d\u7684\u4ee3\u7801\u6267\u884c\u6210\u529f\r\nconst pid = ESProcess.spawn(script);\r\nconsole.log("pid:", pid);\r\n\r\n/**\r\n * pid: 4294967297\r\n * spawn ok !!!!!!!!!!\r\n */\r\n\n'})}),"\n",(0,r.jsx)(s.h3,{id:"esprocessreceive",children:"ESProcess.receive"}),"\n",(0,r.jsx)(s.p,{children:"\u63a5\u6536\u8fdb\u7a0b\u6d88\u606f"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["msg: \u63a5\u6536\u6d88\u606f\u7c7b\u578b\u5982\u4e0b","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"bool|number|bigint|string|ArrayBuffer|SharedArrayBuffer|NativeObject"}),"\n",(0,r.jsx)(s.li,{children:"bool[]|number[]|bigint[]|string[]|ArrayBuffer[]|SharedArrayBuffer[]|NativeObject[]"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.li,{children:"from: \u6765\u6e90pid,\u53ef\u4ee5\u7528\u4e8e\u56de\u5e94\u6d88\u606f"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-JavaScript",children:'\r\nconst receive = (msg, from) => {\r\n    console.log("from", from);\r\n    console.log("msg", msg);\r\n};\r\n\r\nlet script =\r\n`console.log(\'spawn ok !!!!!!!!!!\');\r\nESProcess.receive=${receive.toString()}\r\n`;\r\nconst pid = ESProcess.spawn(script);\r\nconsole.log("pid:", pid);\n'})}),"\n",(0,r.jsx)(s.h3,{id:"esprocesssendpid-msg",children:"ESProcess.send(pid, msg)"}),"\n",(0,r.jsx)(s.p,{children:"\u53d1\u9001\u6d88\u606f"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"pid: spawn\u7684\u8fd4\u56de\u503c"}),"\n",(0,r.jsxs)(s.li,{children:["msg\uff1a\u53d1\u9001\u6d88\u606f\u7c7b\u578b\u5982\u4e0b","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"bool|number|bigint|string|ArrayBuffer|SharedArrayBuffer|NativeObject"}),"\n",(0,r.jsx)(s.li,{children:"bool[]|number[]|bigint[]|string[]|ArrayBuffer[]|SharedArrayBuffer[]|"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-JavaScript",children:'const receive = (msg, from) => {\r\n    console.log("from", from);\r\n    console.log("msg", msg);\r\n};\r\n\r\nlet script =\r\n`console.log(\'spawn ok !!!!!!!!!!\');\r\nESProcess.receive=${receive.toString()}\r\n`;\r\nconst pid = ESProcess.spawn(script);\r\nconsole.log("pid:", pid);\r\n\r\nsetTimeout(() => {\r\n    ESProcess.send(pid, "hello world");\r\n}, 1000);\r\n\n'})}),"\n",(0,r.jsx)(s.h3,{id:"esprocessasync_spawn",children:"ESProcess.async_spawn"}),"\n",(0,r.jsx)(s.p,{children:"\u5f02\u6b65\u521b\u5efaspawn"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-JavaScript",children:'const demo = async () => {\r\n    const receive = (msg, from) => {\r\n        console.log("from", from);\r\n        console.log("msg", msg);\r\n    };\r\n\r\n    let script =\r\n        `console.log(\'spawn ok !!!!!!!!!!\');\r\n    ESProcess.receive=${receive.toString()}\r\n    `;\r\n    // \u8fd4\u56depid\u8868\u793a,script\u4e2d\u7684\u540c\u6b65\u4ee3\u7801\u6267\u884c\u5b8c\u6210\r\n    const pid = await ESProcess.async_spawn(script);\r\n    console.log("pid:", pid);\r\n    ESProcess.send(pid, "hello world");\r\n}\r\n\r\ndemo().then(r => console.log(r)).catch(e => console.log(e));\n'})})]})}function a(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>i});var r=n(7294);const o={},c=r.createContext(o);function i(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);