(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),BASE_BUTTON="rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg",CONTAINED_BUTTON="".concat(BASE_BUTTON," bg-teal-400 border border-teal-400 text-white"),OUTLINED_BUTTON="".concat(BASE_BUTTON," border border-teal-400 text-teal-400"),Button=function Button(_ref){var onClick=_ref.onClick,_ref$label=_ref.label,label=void 0===_ref$label?"Some label":_ref$label,outlined=_ref.outlined;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{onClick:onClick,className:outlined?OUTLINED_BUTTON:CONTAINED_BUTTON},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,label))};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:{value:"Some label"},description:"Label of the button",name:"label",required:!1,type:{name:"string"}},outlined:{defaultValue:null,description:"Boolean value to define the button style",name:"outlined",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Button click action",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},1210:function(module,exports,__webpack_require__){},1211:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(132);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1213)],module)}.call(this,__webpack_require__(1212)(module))},1213:function(module,exports,__webpack_require__){var map={"./button.stories.tsx":1214,"./button2.stories.tsx":1235,"./button3.stories.tsx":1236};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1213},1214:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"primary",(function(){return primary}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_components_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(104),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(105),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(46);__webpack_exports__.default={title:"Button",decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs]};var primary=function primary(){var label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Label","See now!"),outlined=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Outlined",!1);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_1__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked"),outlined:outlined,label:label})}},1235:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"primary",(function(){return primary}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_components_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(104),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(105),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(46);__webpack_exports__.default={title:"Button",decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs]};var primary=function primary(){var label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Label","This is a test of the github action"),outlined=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Outlined",!1);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_1__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked"),outlined:outlined,label:label})}},1236:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"primary",(function(){return primary}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_components_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(104),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(105),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(46);__webpack_exports__.default={title:"Button",decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs]};var primary=function primary(){var label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Label","This is a test of the github action"),outlined=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Outlined",!1);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_1__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked"),outlined:outlined,label:label})}},1240:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var objectSpread2=__webpack_require__(179),react=__webpack_require__(0),react_default=__webpack_require__.n(react),client=__webpack_require__(132),dist=__webpack_require__(389),Layout_Layout=(__webpack_require__(1210),function Layout(_ref){var children=_ref.children;return react_default.a.createElement("div",{className:"px-20 py-10"},children)});Layout_Layout.__docgenInfo={description:"",methods:[],displayName:"Layout"};var _storybook_Layout=Layout_Layout;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/Layout.js"]={name:"Layout",docgenInfo:Layout_Layout.__docgenInfo,path:".storybook/Layout.js"}),Object(client.addDecorator)((function(storyFn){return react_default.a.createElement(_storybook_Layout,null,storyFn())})),Object(client.addDecorator)(Object(dist.withInfo)({inline:!0,styles:function styles(base){return Object(objectSpread2.a)(Object(objectSpread2.a)({},base),{},{infoBody:Object(objectSpread2.a)({},base.infoBody),source:{h1:{margin:"20px 0",padding:"0 0 5px 0",fontSize:"25px",borderBottom:"1px solid #EEE"}}})},propTablesExclude:[_storybook_Layout]}))},403:function(module,exports,__webpack_require__){__webpack_require__(404),__webpack_require__(547),__webpack_require__(1240),module.exports=__webpack_require__(1211)},466:function(module,exports){},728:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":351,"./nestedObjectAssign.js":351};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=728}},[[403,1,2]]]);
//# sourceMappingURL=main.f834dbbda1a855146c42.bundle.js.map