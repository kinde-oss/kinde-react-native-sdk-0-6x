var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _urlParse=_interopRequireDefault(require("url-parse"));var _Storage=_interopRequireDefault(require("../Storage"));var _Utils=require("../Utils");var AuthorizationCode=function(){function AuthorizationCode(){(0,_classCallCheck2["default"])(this,AuthorizationCode);}(0,_createClass2["default"])(AuthorizationCode,[{key:"authenticate",value:function(){var _authenticate=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(kindeSDK){var usePKCE,startPage,additionalParameters,URLParsed,baseInfo,stateGenerated,challenge,_args=arguments;return _regenerator["default"].wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:usePKCE=_args.length>1&&_args[1]!==undefined?_args[1]:false;startPage=_args.length>2&&_args[2]!==undefined?_args[2]:'login';additionalParameters=_args.length>3&&_args[3]!==undefined?_args[3]:{};URLParsed=(0,_urlParse["default"])(kindeSDK.authorizationEndpoint,true);baseInfo=this.buildBaseAuthenticateURL(kindeSDK);Object.keys(baseInfo).forEach(function(k){URLParsed.query[k]=baseInfo[k];});URLParsed.query['start_page']=startPage;stateGenerated=(0,_Utils.generateRandomString)();URLParsed.query['state']=stateGenerated;(0,_Utils.addAdditionalParameters)(URLParsed.query,additionalParameters);_Storage["default"].setState(stateGenerated);if(usePKCE){challenge=(0,_Utils.generateChallenge)();URLParsed.query['code_challenge']=challenge.codeChallenge;URLParsed.query['code_challenge_method']='S256';_Storage["default"].setCodeVerifier(challenge.codeVerifier);}return _context.abrupt("return",(0,_Utils.OpenWebInApp)(URLParsed.toString(),kindeSDK));case 13:case"end":return _context.stop();}},_callee,this);}));function authenticate(_x){return _authenticate.apply(this,arguments);}return authenticate;}()},{key:"buildBaseAuthenticateURL",value:function buildBaseAuthenticateURL(kindeSDK){return{client_id:kindeSDK.clientId,redirect_uri:kindeSDK.redirectUri,client_secret:kindeSDK.clientSecret,scope:kindeSDK.scope,grant_type:'authorization_code',response_type:'code'};}}]);return AuthorizationCode;}();var _default=AuthorizationCode;exports["default"]=_default;