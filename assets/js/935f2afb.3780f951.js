"use strict";(self.webpackChunkfound_docs=self.webpackChunkfound_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/found/","docId":"intro"},{"type":"category","label":"Getting started","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Installation","href":"/found/getting-started/installation","docId":"getting-started/installation"},{"type":"link","label":"Basic usage","href":"/found/getting-started/basic-usage","docId":"getting-started/basic-usage"}]},{"type":"category","label":"Configuration","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Route configuration","href":"/found/configuration/route-config","docId":"configuration/route-config"},{"type":"link","label":"Router configuration","href":"/found/configuration/router-config","docId":"configuration/router-config"},{"type":"link","label":"Navigation","href":"/found/configuration/navigation","docId":"configuration/navigation"}]},{"type":"category","label":"Advanced","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Accessing route matches in components","href":"/found/advanced/component-route-access","docId":"advanced/component-route-access"},{"type":"link","label":"Error handling","href":"/found/advanced/error-handling","docId":"advanced/error-handling"},{"type":"link","label":"Redirects","href":"/found/advanced/redirects","docId":"advanced/redirects"},{"type":"link","label":"Named child routes","href":"/found/advanced/names-child-routes","docId":"advanced/names-child-routes"},{"type":"link","label":"Custom route classes","href":"/found/advanced/custom-route-classes","docId":"advanced/custom-route-classes"},{"type":"link","label":"Redux integration","href":"/found/advanced/redux-integration","docId":"advanced/redux-integration"},{"type":"link","label":"Minimizing bundle size","href":"/found/advanced/minimize-bundle","docId":"advanced/minimize-bundle"},{"type":"link","label":"Server-side rendering","href":"/found/advanced/server-side-rendering","docId":"advanced/server-side-rendering"},{"type":"link","label":"Hot reloading","href":"/found/advanced/hot-reloading","docId":"advanced/hot-reloading"},{"type":"link","label":"Examples and extensions","href":"/found/advanced/further-reading","docId":"advanced/further-reading"}]}]},"docs":{"advanced/component-route-access":{"id":"advanced/component-route-access","title":"Accessing route matches in components","description":"To access details of the current route match, Found injects { router, match } props","sidebar":"tutorialSidebar"},"advanced/custom-route-classes":{"id":"advanced/custom-route-classes","title":"Custom route classes","description":"You can implement reusable logic in routes with a custom route class. When extending Route, methods defined on the class will be overridden by explicitly specified route properties. You can use custom route classes for either object route configurations or JSX route configurations.","sidebar":"tutorialSidebar"},"advanced/error-handling":{"id":"advanced/error-handling","title":"Error handling","description":"The HttpError class signals handled router-level error states. This error class takes a status value that should be an integer corresponding to an HTTP error code and an optional data value of any type. You can handle these errors and render appropriate error feedback in the router-level render method described below.","sidebar":"tutorialSidebar"},"advanced/further-reading":{"id":"advanced/further-reading","title":"Examples and extensions","description":"Examples","sidebar":"tutorialSidebar"},"advanced/hot-reloading":{"id":"advanced/hot-reloading","title":"Hot reloading","description":"When using hot reloading via React Hot Loader, mark your route configuration with hotRouteConfig to enable hot reloading for your route configuration as well.","sidebar":"tutorialSidebar"},"advanced/minimize-bundle":{"id":"advanced/minimize-bundle","title":"Minimizing bundle size","description":"The top-level found package exports everything available in this library. It is unlikely that any single application will use all the features available. As such, for real applications, you should import the modules you need directly, to pull in only the code that you use.","sidebar":"tutorialSidebar"},"advanced/names-child-routes":{"id":"advanced/names-child-routes","title":"Named child routes","description":"Specify an object for the children property on a route to set up named child routes. A route with named child routes will match only if every route group matches. The elements corresponding to the child routes will be available on their parent as props with the same name as the route groups.","sidebar":"tutorialSidebar"},"advanced/redirects":{"id":"advanced/redirects","title":"Redirects","description":"The Redirect route class sets up static redirect routes. You can also use it to create JSX ` elements for use with makeRouteConfig. This class takes from and to properties and an optional status property. from should be a path pattern as for normal routes above. to can be either a path pattern or a function. If it is a path pattern, the router will populate path parameters appropriately. If it is a function, it will receive the same routing state object as getComponent and getData, as described above. status is used to set the HTTP status code when redirecting from the server, and defaults to 302` if it is not specified.","sidebar":"tutorialSidebar"},"advanced/redux-integration":{"id":"advanced/redux-integration","title":"Redux integration","description":"Found uses Redux to manage all serializable state. Farce uses Redux actions for navigation. As such, you can also access those serializable parts of the routing state from the store state, and you can navigate by dispatching actions.","sidebar":"tutorialSidebar"},"advanced/server-side-rendering":{"id":"advanced/server-side-rendering","title":"Server-side rendering","description":"Found supports server-side rendering for universal applications. Functionality specific to server-side rendering is available in found/server.","sidebar":"tutorialSidebar"},"configuration/navigation":{"id":"configuration/navigation","title":"Navigation","description":"Found provides a high-level abstractions such as a link component for controlling browser navigation. Under the hood, it delegates to Farce for implementation, and as such can also be controlled directly via the Redux store.","sidebar":"tutorialSidebar"},"configuration/route-config":{"id":"configuration/route-config","title":"Route configuration","description":"A route object under the default matching algorithm and route element resolver consists of the following properties, all of which are optional:","sidebar":"tutorialSidebar"},"configuration/router-config":{"id":"configuration/router-config","title":"Router configuration","description":"Found exposes a number of router component class factories at varying levels of abstraction. These factories accept the static configuration properties for the router, such as the route configuration. The use of static configuration allows for efficient, parallel data fetching and state management as above.","sidebar":"tutorialSidebar"},"getting-started/basic-usage":{"id":"getting-started/basic-usage","title":"Basic usage","description":"Define a route configuration as an array of objects, or as JSX with ` elements using makeRouteConfig`.","sidebar":"tutorialSidebar"},"getting-started/installation":{"id":"getting-started/installation","title":"Installation","description":"Using npm:","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"Found","sidebar":"tutorialSidebar"}}}')}}]);