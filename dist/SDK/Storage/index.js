var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof3=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _jwtDecode2=_interopRequireDefault(require("jwt-decode"));var _TokenType=require("../Enums/TokenType.enum");var _Base=_interopRequireDefault(require("./Base"));var _expoConstants=_interopRequireWildcard(require("expo-constants"));var _globalThis$sessionSt;function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof3(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var Storage=function(_BaseStore){(0,_inherits2["default"])(Storage,_BaseStore);var _super=_createSuper(Storage);function Storage(){(0,_classCallCheck2["default"])(this,Storage);return _super.call(this);}(0,_createClass2["default"])(Storage,[{key:"getStorage",value:function(){var _getStorage=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(){var isExpoGo,_builder,builder;return _regenerator["default"].wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:isExpoGo=_expoConstants["default"].executionEnvironment===_expoConstants.ExecutionEnvironment.StoreClient;if(!isExpoGo){_context.next=6;break;}_context.next=4;return Promise.resolve().then(function(){return _interopRequireWildcard(require('./ExpoStorage'));});case 4:_builder=_context.sent;return _context.abrupt("return",new _builder["default"]());case 6:_context.next=8;return Promise.resolve().then(function(){return _interopRequireWildcard(require('./RNStorage'));});case 8:builder=_context.sent;return _context.abrupt("return",new builder["default"]());case 10:case"end":return _context.stop();}},_callee);}));function getStorage(){return _getStorage.apply(this,arguments);}return getStorage;}()},{key:"getToken",value:function(){var _getToken=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(){var storage,cred;return _regenerator["default"].wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:_context2.next=2;return this.getStorage();case 2:storage=_context2.sent;_context2.next=5;return storage.getItem();case 5:cred=_context2.sent;_context2.prev=6;if(!((0,_typeof2["default"])(cred)==='object')){_context2.next=9;break;}return _context2.abrupt("return",cred?JSON.parse(cred.password):null);case 9:return _context2.abrupt("return",cred?JSON.parse(cred):null);case 12:_context2.prev=12;_context2.t0=_context2["catch"](6);return _context2.abrupt("return",null);case 15:case"end":return _context2.stop();}},_callee2,this,[[6,12]]);}));function getToken(){return _getToken.apply(this,arguments);}return getToken;}()},{key:"setToken",value:function(){var _setToken=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(token){var storage;return _regenerator["default"].wrap(function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:_context3.next=2;return this.getStorage();case 2:storage=_context3.sent;return _context3.abrupt("return",storage.setItem(token));case 4:case"end":return _context3.stop();}},_callee3,this);}));function setToken(_x){return _setToken.apply(this,arguments);}return setToken;}()},{key:"getTokenType",value:function(){var _getTokenType=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(type){var _token$newType;var token,newType;return _regenerator["default"].wrap(function _callee4$(_context4){while(1)switch(_context4.prev=_context4.next){case 0:_context4.next=2;return this.getToken();case 2:token=_context4.sent;newType=type===_TokenType.TokenType.ID_TOKEN?type:_TokenType.TokenType.ACCESS_TOKEN;return _context4.abrupt("return",(_token$newType=token===null||token===void 0?void 0:token[newType])!==null&&_token$newType!==void 0?_token$newType:null);case 5:case"end":return _context4.stop();}},_callee4,this);}));function getTokenType(_x2){return _getTokenType.apply(this,arguments);}return getTokenType;}()},{key:"getAccessToken",value:function(){var _getAccessToken=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5(){return _regenerator["default"].wrap(function _callee5$(_context5){while(1)switch(_context5.prev=_context5.next){case 0:return _context5.abrupt("return",this.getTokenType(_TokenType.TokenType.ACCESS_TOKEN));case 1:case"end":return _context5.stop();}},_callee5,this);}));function getAccessToken(){return _getAccessToken.apply(this,arguments);}return getAccessToken;}()},{key:"getIdToken",value:function(){var _getIdToken=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6(){return _regenerator["default"].wrap(function _callee6$(_context6){while(1)switch(_context6.prev=_context6.next){case 0:return _context6.abrupt("return",this.getTokenType(_TokenType.TokenType.ID_TOKEN));case 1:case"end":return _context6.stop();}},_callee6,this);}));function getIdToken(){return _getIdToken.apply(this,arguments);}return getIdToken;}()},{key:"getExpiredAt",value:function(){var _getExpiredAt=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7(){var _jwtDecode;var token;return _regenerator["default"].wrap(function _callee7$(_context7){while(1)switch(_context7.prev=_context7.next){case 0:_context7.next=2;return this.getAccessToken();case 2:token=_context7.sent;return _context7.abrupt("return",token?(_jwtDecode=(0,_jwtDecode2["default"])(token))===null||_jwtDecode===void 0?void 0:_jwtDecode['exp']:0);case 4:case"end":return _context7.stop();}},_callee7,this);}));function getExpiredAt(){return _getExpiredAt.apply(this,arguments);}return getExpiredAt;}()},{key:"getState",value:function getState(){return this.getItem('state');}},{key:"setState",value:function setState(newState){return this.setItem('state',this.convertString(newState));}},{key:"getCodeVerifier",value:function getCodeVerifier(){return this.getItem('codeVerifier');}},{key:"setCodeVerifier",value:function setCodeVerifier(newCodeVerifier){return this.setItem('codeVerifier',this.convertString(newCodeVerifier));}},{key:"clearAll",value:function(){var _clearAll=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8(){var storage;return _regenerator["default"].wrap(function _callee8$(_context8){while(1)switch(_context8.prev=_context8.next){case 0:this.clear();_context8.next=3;return this.getStorage();case 3:storage=_context8.sent;return _context8.abrupt("return",storage.clear());case 5:case"end":return _context8.stop();}},_callee8,this);}));function clearAll(){return _clearAll.apply(this,arguments);}return clearAll;}()},{key:"getUserProfile",value:function(){var _getUserProfile=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee9(){var _payload$sub,_payload$given_name,_payload$family_name,_payload$email;var token,payload;return _regenerator["default"].wrap(function _callee9$(_context9){while(1)switch(_context9.prev=_context9.next){case 0:_context9.next=2;return this.getIdToken();case 2:token=_context9.sent;payload=token?(0,_jwtDecode2["default"])(token):{};return _context9.abrupt("return",{id:(_payload$sub=payload['sub'])!==null&&_payload$sub!==void 0?_payload$sub:'',given_name:(_payload$given_name=payload['given_name'])!==null&&_payload$given_name!==void 0?_payload$given_name:'',family_name:(_payload$family_name=payload['family_name'])!==null&&_payload$family_name!==void 0?_payload$family_name:'',email:(_payload$email=payload['email'])!==null&&_payload$email!==void 0?_payload$email:''});case 5:case"end":return _context9.stop();}},_callee9,this);}));function getUserProfile(){return _getUserProfile.apply(this,arguments);}return getUserProfile;}()},{key:"convertString",value:function convertString(str){return typeof str==='string'?str:JSON.stringify(str);}}]);return Storage;}(_Base["default"]);var sessionStorage=globalThis.sessionStorage=(_globalThis$sessionSt=globalThis.sessionStorage)!==null&&_globalThis$sessionSt!==void 0?_globalThis$sessionSt:new Storage();var _default=sessionStorage;exports["default"]=_default;