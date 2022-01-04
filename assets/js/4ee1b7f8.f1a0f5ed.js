"use strict";(self.webpackChunkfound_docs=self.webpackChunkfound_docs||[]).push([[461],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=a,m=g["".concat(u,".").concat(d)]||g[d]||l[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4537:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},u="Basic usage",c={unversionedId:"getting-started/basic-usage",id:"getting-started/basic-usage",title:"Basic usage",description:"Define a route configuration as an array of objects, or as JSX with ` elements using makeRouteConfig`.",source:"@site/docs/getting-started/basic-usage.md",sourceDirName:"getting-started",slug:"/getting-started/basic-usage",permalink:"/found/getting-started/basic-usage",editUrl:"https://github.com/4Catalyzer/found/edit/master/docs/getting-started/basic-usage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/found/getting-started/installation"},next:{title:"Route configuration",permalink:"/found/configuration/route-config"}},p=[],l={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic-usage"},"Basic usage"),(0,o.kt)("p",null,"Define a route configuration as an array of objects, or as JSX with ",(0,o.kt)("inlineCode",{parentName:"p"},"<Route>")," elements using ",(0,o.kt)("inlineCode",{parentName:"p"},"makeRouteConfig"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const routeConfig = [\n  {\n    path: '/',\n    Component: AppPage,\n    children: [\n      {\n        Component: MainPage,\n      },\n      {\n        path: 'foo',\n        Component: FooPage,\n        children: [\n          {\n            path: 'bar',\n            Component: BarPage,\n          },\n        ],\n      },\n    ],\n  },\n];\n\n// This is equivalent:\nconst jsxRouteConfig = makeRouteConfig(\n  <Route path=\"/\" Component={AppPage}>\n    <Route Component={MainPage} />\n    <Route path=\"foo\" Component={FooPage}>\n      <Route path=\"bar\" Component={BarPage} />\n    </Route>\n  </Route>,\n);\n")),(0,o.kt)("p",null,"Create a router using your route configuration. For a basic router that uses the HTML5 History API, use ",(0,o.kt)("inlineCode",{parentName:"p"},"createBrowserRouter"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const BrowserRouter = createBrowserRouter({ routeConfig });\n")),(0,o.kt)("p",null,"Render this router component into the page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"ReactDOM.render(<BrowserRouter />, document.getElementById('root'));\n")),(0,o.kt)("p",null,"In components rendered by the router, use ",(0,o.kt)("inlineCode",{parentName:"p"},"<Link>")," to render links that navigate when clicked and display active state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<Link to="/foo" activeClassName="active">\n  Foo\n</Link>\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4Catalyzer/spa-routing"},"spa-routing")," to manage your links in an organized and well-typed way"))),(0,o.kt)("p",null,"That's basically it! Right now you should have a fully functional routing setup."))}g.isMDXComponent=!0}}]);