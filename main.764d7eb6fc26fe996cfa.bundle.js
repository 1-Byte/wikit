(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1256:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(452);module._StorybookPreserveDecorators=!0,Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1280)],module)}.call(this,__webpack_require__(1257)(module))},1280:function(module,exports,__webpack_require__){var map={"./01-colors.stories.mdx":1281,"./02-opacity.stories.mdx":1282,"./index.stories.js":1283};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1280},1281:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(2),__webpack_require__(44),__webpack_require__(39),__webpack_require__(11),__webpack_require__(10),__webpack_require__(13),__webpack_require__(3),__webpack_require__(59),__webpack_require__(40),__webpack_require__(437),__webpack_require__(438),__webpack_require__(5),__webpack_require__(42),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(7),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(35),_lib_flattenTokenTree__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(87),_wmde_wikit_tokens__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(88);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_15__.Meta,{title:"Design Tokens|Colors",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("h2",{id:"base"},"Base"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_15__.ColorPalette,{mdxType:"ColorPalette"},Object(_lib_flattenTokenTree__WEBPACK_IMPORTED_MODULE_16__.a)(_wmde_wikit_tokens__WEBPACK_IMPORTED_MODULE_17__.a.base).map((function(color,index){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_15__.ColorItem,{key:index,title:color.name,subtitle:color.referencedTokens,colors:[color.value],mdxType:"ColorItem"})}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("h2",{id:"accent"},"Accent"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_15__.ColorPalette,{mdxType:"ColorPalette"},Object(_lib_flattenTokenTree__WEBPACK_IMPORTED_MODULE_16__.a)(_wmde_wikit_tokens__WEBPACK_IMPORTED_MODULE_17__.a.accent).map((function(color,index){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_15__.ColorItem,{key:index,title:color.name,subtitle:color.referencedTokens,colors:[color.value],mdxType:"ColorItem"})}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("h2",{id:"utility"},"Utility"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_15__.ColorPalette,{mdxType:"ColorPalette"},Object(_lib_flattenTokenTree__WEBPACK_IMPORTED_MODULE_16__.a)(_wmde_wikit_tokens__WEBPACK_IMPORTED_MODULE_17__.a.utility).map((function(color,index){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_15__.ColorItem,{key:index,title:color.name,subtitle:color.referencedTokens,colors:[color.value],mdxType:"ColorItem"})}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("h2",{id:"modifier"},"Modifier"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_15__.ColorPalette,{mdxType:"ColorPalette"},Object(_lib_flattenTokenTree__WEBPACK_IMPORTED_MODULE_16__.a)(_wmde_wikit_tokens__WEBPACK_IMPORTED_MODULE_17__.a.modifier).map((function(color,index){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_15__.ColorItem,{key:index,title:color.name,subtitle:color.referencedTokens,colors:[color.value],mdxType:"ColorItem"})}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("h2",{id:"interaction"},"Interaction"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_15__.ColorPalette,{mdxType:"ColorPalette"},Object(_lib_flattenTokenTree__WEBPACK_IMPORTED_MODULE_16__.a)(_wmde_wikit_tokens__WEBPACK_IMPORTED_MODULE_17__.a.interaction).map((function(color,index){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_15__.ColorItem,{key:index,title:color.name,subtitle:color.referencedTokens,colors:[color.value],mdxType:"ColorItem"})}))))}MDXContent.isMDXComponent=!0;var __page=function(){throw new Error("Docs-only story")};__page.story={parameters:{docsOnly:!0}};var componentMeta={title:"Design Tokens|Colors",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=_objectSpread(_objectSpread({},componentMeta.parameters.docs||{}),{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_15__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},1282:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(2),__webpack_require__(44),__webpack_require__(39),__webpack_require__(11),__webpack_require__(10),__webpack_require__(13),__webpack_require__(3),__webpack_require__(59),__webpack_require__(40),__webpack_require__(437),__webpack_require__(438),__webpack_require__(5),__webpack_require__(42),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(7),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(35),_lib_flattenTokenTree__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(87),_wmde_wikit_tokens__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(88);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_15__.Meta,{title:"Design Tokens|Opacity",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("h2",{id:"opacity"},"Opacity"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("table",{name:"opacity",style:{width:"100%"}},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("tr",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("th",null,"Name"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("th",null,"Source"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("th",null,"Value")),Object(_lib_flattenTokenTree__WEBPACK_IMPORTED_MODULE_16__.a)(_wmde_wikit_tokens__WEBPACK_IMPORTED_MODULE_17__.b).map((function(opacity,index){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("tr",{key:index},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("td",null,opacity.name),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("td",null,opacity.referencedTokens),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)("td",null,opacity.value))}))))}MDXContent.isMDXComponent=!0;var __page=function(){throw new Error("Docs-only story")};__page.story={parameters:{docsOnly:!0}};var componentMeta={title:"Design Tokens|Opacity",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=_objectSpread(_objectSpread({},componentMeta.parameters.docs||{}),{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_15__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_14__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},1283:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default={title:"Change Me"}},454:function(module,exports,__webpack_require__){__webpack_require__(455),__webpack_require__(601),__webpack_require__(602),__webpack_require__(1254),module.exports=__webpack_require__(1256)},519:function(module,exports){},87:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return flattenTokenTree}));__webpack_require__(26),__webpack_require__(76),__webpack_require__(57),__webpack_require__(13);var traverse__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(453),traverse__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(traverse__WEBPACK_IMPORTED_MODULE_4__);function flattenTokenTree(nestedTokens){return traverse__WEBPACK_IMPORTED_MODULE_4___default()(nestedTokens).reduce((function(tokens,node){return node.original?tokens.concat({name:node.name,referencedTokens:node.attributes.tokens.join(", "),value:node.value}):tokens}),[])}},88:function(module){module.exports=JSON.parse('{"a":{"base":{"0":{"value":"#000","original":{"value":"{wmf-wmui-color-base0.value}"},"name":"color-base-0","attributes":{"tokens":["wmf-wmui-color-base0"]},"path":["color","base","0"]},"10":{"value":"#202122","original":{"value":"{wmf-wmui-color-base10.value}"},"name":"color-base-10","attributes":{"tokens":["wmf-wmui-color-base10"]},"path":["color","base","10"]},"20":{"value":"#54595d","original":{"value":"{wmf-wmui-color-base20.value}"},"name":"color-base-20","attributes":{"tokens":["wmf-wmui-color-base20"]},"path":["color","base","20"]},"30":{"value":"#72777d","original":{"value":"{wmf-wmui-color-base30.value}"},"name":"color-base-30","attributes":{"tokens":["wmf-wmui-color-base30"]},"path":["color","base","30"]},"50":{"value":"#a2a9b1","original":{"value":"{wmf-wmui-color-base50.value}"},"name":"color-base-50","attributes":{"tokens":["wmf-wmui-color-base50"]},"path":["color","base","50"]},"70":{"value":"#c8ccd1","original":{"value":"{wmf-wmui-color-base70.value}"},"name":"color-base-70","attributes":{"tokens":["wmf-wmui-color-base70"]},"path":["color","base","70"]},"80":{"value":"#eaecf0","original":{"value":"{wmf-wmui-color-base80.value}"},"name":"color-base-80","attributes":{"tokens":["wmf-wmui-color-base80"]},"path":["color","base","80"]},"90":{"value":"#f8f9fa","original":{"value":"{wmf-wmui-color-base90.value}"},"name":"color-base-90","attributes":{"tokens":["wmf-wmui-color-base90"]},"path":["color","base","90"]},"100":{"value":"#fff","original":{"value":"{wmf-wmui-color-base100.value}"},"name":"color-base-100","attributes":{"tokens":["wmf-wmui-color-base100"]},"path":["color","base","100"]}},"accent":{"30":{"value":"#2a4b8d","original":{"value":"{wmf-wmui-color-accent30.value}"},"name":"color-accent-30","attributes":{"tokens":["wmf-wmui-color-accent30"]},"path":["color","accent","30"]},"50":{"value":"#36c","original":{"value":"{wmf-wmui-color-accent50.value}"},"name":"color-accent-50","attributes":{"tokens":["wmf-wmui-color-accent50"]},"path":["color","accent","50"]},"90":{"value":"#eaf3ff","original":{"value":"{wmf-wmui-color-accent90.value}"},"name":"color-accent-90","attributes":{"tokens":["wmf-wmui-color-accent90"]},"path":["color","accent","90"]}},"utility":{"red":{"30":{"value":"#b32424","original":{"value":"{wmf-wmui-color-red30.value}"},"name":"color-utility-red-30","attributes":{"tokens":["wmf-wmui-color-red30"]},"path":["color","utility","red","30"]},"50":{"value":"#d33","original":{"value":"{wmf-wmui-color-red50.value}"},"name":"color-utility-red-50","attributes":{"tokens":["wmf-wmui-color-red50"]},"path":["color","utility","red","50"]},"90":{"value":"#fee7e6","original":{"value":"{wmf-wmui-color-red90.value}"},"name":"color-utility-red-90","attributes":{"tokens":["wmf-wmui-color-red90"]},"path":["color","utility","red","90"]}},"yellow":{"30":{"value":"#ac6600","original":{"value":"{wmf-wmui-color-yellow30.value}"},"name":"color-utility-yellow-30","attributes":{"tokens":["wmf-wmui-color-yellow30"]},"path":["color","utility","yellow","30"]},"50":{"value":"#fc3","original":{"value":"{wmf-wmui-color-yellow50.value}"},"name":"color-utility-yellow-50","attributes":{"tokens":["wmf-wmui-color-yellow50"]},"path":["color","utility","yellow","50"]},"90":{"value":"#fef6e7","original":{"value":"{wmf-wmui-color-yellow90.value}"},"name":"color-utility-yellow-90","attributes":{"tokens":["wmf-wmui-color-yellow90"]},"path":["color","utility","yellow","90"]}},"green":{"30":{"value":"#14866d","original":{"value":"{wmf-wmui-color-green30.value}"},"name":"color-utility-green-30","attributes":{"tokens":["wmf-wmui-color-green30"]},"path":["color","utility","green","30"]},"50":{"value":"#00af89","original":{"value":"{wmf-wmui-color-green50.value}"},"name":"color-utility-green-50","attributes":{"tokens":["wmf-wmui-color-green50"]},"path":["color","utility","green","50"]},"90":{"value":"#d5fdf4","original":{"value":"{wmf-wmui-color-green90.value}"},"name":"color-utility-green-90","attributes":{"tokens":["wmf-wmui-color-green90"]},"path":["color","utility","green","90"]}}},"modifier":{"lighten":{"base-10":{"value":"#404244","original":{"value":"#404244"},"name":"color-modifier-lighten-base-10","attributes":{"tokens":[]},"path":["color","modifier","lighten","base-10"]},"base-20":{"value":"#6c7378","original":{"value":"#6c7378"},"name":"color-modifier-lighten-base-20","attributes":{"tokens":[]},"path":["color","modifier","lighten","base-20"]}}},"interaction":{"accent-50-hover":{"value":"#447ff5","original":{"value":"#447ff5"},"name":"color-interaction-accent-50-hover","attributes":{"tokens":[]},"path":["color","interaction","accent-50-hover"]},"utility-red-50-hover":{"value":"#ff4242","original":{"value":"#ff4242"},"name":"color-interaction-utility-red-50-hover","attributes":{"tokens":[]},"path":["color","interaction","utility-red-50-hover"]},"purple":{"value":"#6b4ba1","original":{"value":"#6b4ba1"},"name":"color-interaction-purple","attributes":{"tokens":[]},"path":["color","interaction","purple"]}}},"b":{"base":{"value":"1","original":{"value":"{wmf-opacity-base.value}"},"name":"opacity-base","attributes":{"tokens":["wmf-opacity-base"]},"path":["opacity","base"]},"disabled":{"value":"0.51","original":{"value":"{wmf-opacity-base--disabled.value}"},"name":"opacity-disabled","attributes":{"tokens":["wmf-opacity-base--disabled"]},"path":["opacity","disabled"]}}}')}},[[454,1,2]]]);
//# sourceMappingURL=main.764d7eb6fc26fe996cfa.bundle.js.map