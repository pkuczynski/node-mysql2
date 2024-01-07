/*! For license information please see cdbda324.498ff172.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4116],{1851:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var s=r(5893),t=r(1151),o=r(6393),l=r(3901);const c={},i="How to handle errors?",a={id:"faq/how-to-handle-errors",title:"How to handle errors?",description:"This section details error handling techniques in MySQL2. It covers essential error management strategies for methods such as createConnection, createPool, createPoolCluster, execute and query.",source:"@site/docs/faq/how-to-handle-errors.mdx",sourceDirName:"faq",slug:"/faq/how-to-handle-errors",permalink:"/node-mysql2/zh-CN/docs/faq/how-to-handle-errors",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/faq/how-to-handle-errors.mdx",tags:[],version:"current",frontMatter:{},sidebar:"faq",previous:{title:"Introduction",permalink:"/node-mysql2/zh-CN/docs/faq"}},h={},d=[{value:"Using callbacks",id:"using-callbacks",level:2},{value:"Using promises",id:"using-promises",level:2},{value:"Related Links",id:"related-links",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"how-to-handle-errors",children:"How to handle errors?"}),"\n",(0,s.jsxs)(n.p,{children:["This section details error handling techniques in MySQL2. It covers essential error management strategies for methods such as ",(0,s.jsx)(n.code,{children:"createConnection"}),", ",(0,s.jsx)(n.code,{children:"createPool"}),", ",(0,s.jsx)(n.code,{children:"createPoolCluster"}),", ",(0,s.jsx)(n.code,{children:"execute"})," and ",(0,s.jsx)(n.code,{children:"query"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"using-callbacks",children:"Using callbacks"}),"\n",(0,s.jsxs)(o.Z,{title:"createConnection",children:[(0,s.jsx)(l.X,{level:2,message:"This solution has been tested and confirmed as the correct answer."}),(0,s.jsx)(n.p,{children:"Handling connection errors by adding an error event listener:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconnection = mysql.createConnection({\n  host: '',\n  user: '',\n  database: '',\n});\n\n// highlight-start\nconnection.addListener('error', (err) => {\n  if (err instanceof Error) {\n    console.log(`createConnection error:`, err);\n  }\n});\n// highlight-end\n"})})]}),"\n",(0,s.jsxs)(o.Z,{title:"createPool",children:[(0,s.jsx)(l.X,{level:2,message:"This solution has been tested."}),(0,s.jsxs)(n.p,{children:["Handling connection errors through callback's ",(0,s.jsx)(n.code,{children:"err"})," parameter:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst pool = mysql.createPool({\n  host: '',\n  user: '',\n  database: '',\n});\n\npool.getConnection((err, connection) => {\n  // highlight-start\n  if (err instanceof Error) {\n    console.log('pool.getConnection error:', err);\n    return;\n  }\n  // highlight-end\n});\n"})})]}),"\n",(0,s.jsxs)(o.Z,{title:"createPoolCluster",children:[(0,s.jsx)(l.X,{level:2,message:"This solution has been tested."}),(0,s.jsxs)(n.p,{children:["Handling connection errors through callback's ",(0,s.jsx)(n.code,{children:"err"})," parameter:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst poolCluster = mysql.createPoolCluster();\n\npoolCluster.add('NodeI', {\n  host: '',\n  user: '',\n  database: '',\n});\n\npoolCluster.getConnection('NodeI', (err, connection) => {\n  // highlight-start\n  if (err instanceof Error) {\n    console.log('poolCluster.getConnection error:', err);\n    return;\n  }\n  // highlight-end\n});\n"})})]}),"\n",(0,s.jsxs)(o.Z,{title:"execute",children:[(0,s.jsx)(l.X,{level:2,message:"This solution has been tested."}),(0,s.jsxs)(n.p,{children:["Handling ",(0,s.jsx)(n.code,{children:"execute"})," errors through callback's ",(0,s.jsx)(n.code,{children:"err"})," parameter:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"connection.execute('SELEC 1 + 1', (err, rows) => {\n  // highlight-start\n  if (err instanceof Error) {\n    console.log('execute error:', err);\n    return;\n  }\n  // highlight-end\n\n  console.log(rows);\n});\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["It will work for both ",(0,s.jsx)(n.strong,{children:"createConnection"}),", ",(0,s.jsx)(n.strong,{children:"createPool"})," and ",(0,s.jsx)(n.strong,{children:"createPoolCluster"})," connections."]}),"\n"]})]}),"\n",(0,s.jsxs)(o.Z,{title:"query",children:[(0,s.jsx)(l.X,{level:2,message:"This solution has been tested."}),(0,s.jsxs)(n.p,{children:["Handling ",(0,s.jsx)(n.code,{children:"query"})," errors through callback's ",(0,s.jsx)(n.code,{children:"err"})," parameter:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"connection.query('SELEC 1 + 1', (err, rows) => {\n  // highlight-start\n  if (err instanceof Error) {\n    console.log('query error:', err);\n    return;\n  }\n  // highlight-end\n\n  console.log(rows);\n});\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["It will work for both ",(0,s.jsx)(n.strong,{children:"createConnection"}),", ",(0,s.jsx)(n.strong,{children:"createPool"})," and ",(0,s.jsx)(n.strong,{children:"createPoolCluster"})," connections."]}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"using-promises",children:"Using promises"}),"\n",(0,s.jsxs)(o.Z,{title:"createConnection",children:[(0,s.jsx)(l.X,{level:2,message:"This solution has been tested and confirmed as the correct answer."}),(0,s.jsxs)(n.p,{children:["Handling connection errors through ",(0,s.jsx)(n.code,{children:"try-catch"})," block:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  const connection = await mysql.createConnection({\n    host: '',\n    user: '',\n    database: '',\n  });\n  // highlight-start\n} catch (err) {\n  if (err instanceof Error) {\n    console.log(err);\n  }\n}\n// highlight-end\n"})})]}),"\n",(0,s.jsxs)(o.Z,{title:"createPool",children:[(0,s.jsx)(l.X,{level:2,message:"This solution has been tested."}),(0,s.jsxs)(n.p,{children:["Handling connection errors through ",(0,s.jsx)(n.code,{children:"try-catch"})," block:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\nconst pool = mysql.createPool({\n  host: '',\n  user: '',\n  database: '',\n});\n\ntry {\n  const connection = await pool.getConnection();\n  // highlight-start\n} catch (err) {\n  if (err instanceof Error) {\n    console.log(err);\n  }\n}\n// highlight-end\n"})})]}),"\n",(0,s.jsxs)(o.Z,{title:"createPoolCluster",children:[(0,s.jsx)(l.X,{level:2,message:"This solution has been tested."}),(0,s.jsxs)(n.p,{children:["Handling connection errors through ",(0,s.jsx)(n.code,{children:"try-catch"})," block:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\nconst poolCluster = mysql.createPoolCluster();\n\npoolCluster.add('NodeI', {\n  host: '',\n  user: '',\n  database: '',\n});\n\ntry {\n  await poolCluster.getConnection('NodeI');\n  // highlight-start\n} catch (err) {\n  if (err instanceof Error) {\n    console.log('createConnection error:', err);\n  }\n}\n// highlight-end\n"})})]}),"\n",(0,s.jsxs)(o.Z,{title:"execute",children:[(0,s.jsx)(l.X,{level:2,message:"This solution has been tested."}),(0,s.jsxs)(n.p,{children:["Handling ",(0,s.jsx)(n.code,{children:"execute"})," errors through ",(0,s.jsx)(n.code,{children:"try-catch"})," block:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"try {\n  const [rows] = await connection.execute('SELEC 1 + 1');\n  console.log(rows);\n  // highlight-start\n} catch (err) {\n  if (err instanceof Error) {\n    console.log('execute error:', err);\n  }\n}\n// highlight-end\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["It will work for both ",(0,s.jsx)(n.strong,{children:"createConnection"}),", ",(0,s.jsx)(n.strong,{children:"createPool"})," and ",(0,s.jsx)(n.strong,{children:"createPoolCluster"})," connections."]}),"\n"]})]}),"\n",(0,s.jsxs)(o.Z,{title:"query",children:[(0,s.jsx)(l.X,{level:2,message:"This solution has been tested."}),(0,s.jsxs)(n.p,{children:["Handling ",(0,s.jsx)(n.code,{children:"query"})," errors through ",(0,s.jsx)(n.code,{children:"try-catch"})," block:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"try {\n  const [rows] = await connection.query('SELEC 1 + 1');\n  console.log(rows);\n  // highlight-start\n} catch (err) {\n  if (err instanceof Error) {\n    console.log('query error:', err);\n  }\n}\n// highlight-end\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["It will work for both ",(0,s.jsx)(n.strong,{children:"createConnection"}),", ",(0,s.jsx)(n.strong,{children:"createPool"})," and ",(0,s.jsx)(n.strong,{children:"createPoolCluster"})," connections."]}),"\n"]})]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.h2,{id:"related-links",children:"Related Links"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Discussions","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/discussions/1998",children:"#1998"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/discussions/2282",children:"#2282"})}),"\n"]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4673:(e,n,r)=>{r.d(n,{Z:()=>x});var s=r(7294),t=r(512),o=r(2389),l=r(6043);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var i=r(5893);function a(e){return!!e&&("SUMMARY"===e.tagName||a(e.parentElement))}function h(e,n){return!!e&&(e===n||h(e.parentElement,n))}function d(e){let{summary:n,children:r,...d}=e;const u=(0,o.Z)(),g=(0,s.useRef)(null),{collapsed:x,setCollapsed:j}=(0,l.u)({initialState:!d.open}),[p,m]=(0,s.useState)(d.open),y=s.isValidElement(n)?n:(0,i.jsx)("summary",{children:n??"Details"});return(0,i.jsxs)("details",{...d,ref:g,open:p,"data-collapsed":x,className:(0,t.Z)(c.details,u&&c.isBrowser,d.className),onMouseDown:e=>{a(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;a(n)&&h(n,g.current)&&(e.preventDefault(),x?(j(!1),m(!0)):j(!0))},children:[y,(0,i.jsx)(l.z,{lazy:!1,collapsed:x,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{j(e),m(!e)},children:(0,i.jsx)("div",{className:c.collapsibleContent,children:r})})]})}const u={details:"details_b_Ee"},g="alert alert--info";function x(e){let{...n}=e;return(0,i.jsx)(d,{...n,className:(0,t.Z)(g,u.details,n.className)})}},6393:(e,n,r)=>{r.d(n,{Z:()=>o});var s=r(4673),t=r(5893);const o=e=>{let{children:n,open:r,title:o}=e;return(0,t.jsx)(s.Z,{open:r,className:"faq",summary:(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:o})}),children:(0,t.jsx)("section",{children:n})})}},3901:(e,n,r)=>{r.d(n,{X:()=>u});var s=r(3692),t=r(4297);const o=(0,t.Z)("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),l=(0,t.Z)("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),c=(0,t.Z)("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]),i=(0,t.Z)("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]),a=(0,t.Z)("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),h=(0,t.Z)("LightbulbOff",[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);var d=r(5893);const u=e=>{let{level:n,message:r}=e;const t={0:{title:"Deprecated",icon:(0,d.jsx)(o,{})},1:{title:"Experimental",icon:(0,d.jsx)(l,{})},1.1:{title:"Early Development",icon:(0,d.jsx)(c,{})},1.2:{title:"Release Candidate",icon:(0,d.jsx)(i,{})},2:{title:"Stable",icon:(0,d.jsx)(a,{})},3:{title:"Legacy",icon:(0,d.jsx)(h,{})}};return(0,d.jsxs)("section",{className:"stability","data-level":n,children:[(0,d.jsx)(s.Z,{to:"/docs/stability-badges",children:(0,d.jsxs)("header",{children:[(0,d.jsx)("strong",{children:n}),(0,d.jsx)("span",{children:t[n].title}),t[n].icon]})}),r?(0,d.jsx)("p",{children:r}):null]})}},4297:(e,n,r)=>{r.d(n,{Z:()=>o});var s=r(7294),t={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const o=(e,n)=>{const r=(0,s.forwardRef)((({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:i="",children:a,...h},d)=>{return(0,s.createElement)("svg",{ref:d,...t,width:o,height:o,stroke:r,strokeWidth:c?24*Number(l)/Number(o):l,className:["lucide",`lucide-${u=e,u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim()}`,i].join(" "),...h},[...n.map((([e,n])=>(0,s.createElement)(e,n))),...Array.isArray(a)?a:[a]]);var u}));return r.displayName=`${e}`,r}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>l});var s=r(7294);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);