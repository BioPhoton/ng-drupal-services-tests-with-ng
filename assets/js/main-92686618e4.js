!function(){"use strict";function e(e,t,r){r.drupal_instance="http://www.drupalionic.org/drupal_test/",r.api_endpoint+="v1/",t.otherwise("/home"),e.state("home",{url:"/home",templateUrl:"./app/components/home/home.view.html",controller:"HomeController as home"}).state("auth",{url:"/auth",templateUrl:"./app/components/auth/auth.view.html",controller:"AuthController as auth"}).state("system",{url:"/system",templateUrl:"./app/components/system/system.view.html",controller:"SystemController as system"}).state("user",{url:"/user",templateUrl:"./app/components/user/_user.view.html",controller:"UserController as user"})}angular.module("ngDrupalServicesTests",["ui.router","ui.bootstrap","ngMessages","commons.directives.formControlFeedback","ngDrupal7Services-3_x.commons.configurations","ngDrupal7Services-3_x.commons.http.configurations","ngDrupalServicesTests.navigation.controller","ngDrupalServicesTests.home.controller","ngDrupalServicesTests.auth.controller","ngDrupalServicesTests.system.controller","ngDrupalServicesTests.user.controller","ngDrupal7Services-3_x.commons.authentication.service"]).config(e),e.$inject=["$stateProvider","$urlRouterProvider","DrupalApiConstant"]}();
!function(){"use strict";function n(n){var o=this;o.navCollapsed=!0}angular.module("ngDrupalServicesTests.navigation.controller",[]).controller("NavigationController",n),n.$inject=["$scope"]}();
!function(){"use strict";function e(e){}angular.module("ngDrupalServicesTests.home.controller",[]).controller("HomeController",e),e.$inject=["$scope"]}();
!function(){"use strict";function t(t,e,n){function o(){D=Date.now(),e.login(C.loginData).then(function(t){console.log("auth login success",t)},function(t){console.log("auth login error")})}function u(t){q=Date.now(),console.log("subAuthenticationLoginConfirmed"),C.loginRequests.push({requestStart:D,requestEnd:q,requestDuration:q-D,data:t})}function a(t){q=Date.now(),console.log("subAuthenticationLoginFailed",t),C.loginRequests.push({requestStart:D,requestEnd:q,requestDuration:q-D,data:t})}function i(){D=Date.now(),e.logout(C.logoutData).then(function(t){console.log("auth logout success")},function(t){console.log("auth logout error")})}function s(t){q=Date.now(),console.log("subAuthenticationLogoutConfirmed"),C.logoutRequests.push({requestStart:D,requestEnd:q,requestDuration:q-D,data:t})}function r(t){q=Date.now(),console.log("subAuthenticationLogoutFailed"),C.logoutRequests.push({requestStart:D,requestEnd:q,requestDuration:q-D,data:t})}function c(){D=Date.now(),e.refreshConnection().then(function(t){console.log("auth RefreshConnection success")},function(t){console.log("auth RefreshConnection error")})}function l(t){q=Date.now(),console.log("subAuthenticationRefreshConnectionConfirmedCallback"),C.refreshConnectionRequests.push({requestStart:D,requestEnd:q,requestDuration:q-D,data:t})}function h(t){q=Date.now(),console.log("subAuthenticationRefreshConnectionFailedCallback"),C.refreshConnectionRequests.push({requestStart:D,requestEnd:q,requestDuration:q-D,data:t})}function g(){D=Date.now(),q=Date.now(),C.getLastConnectionTimeData.push({requestStart:D,requestEnd:q,requestDuration:q-D,data:e.getLastConnectTime()})}function d(){D=Date.now(),q=Date.now(),console.log(e),C.getConnectionStateData.push({requestStart:D,requestEnd:q,requestDuration:q-D,data:e.getConnectionState()})}function f(){D=Date.now(),q=Date.now(),C.getAuthenticationHeadersData.push({requestStart:D,requestEnd:q,requestDuration:q-D,data:e.getAuthenticationHeaders()})}var q=0,D=0,C=this;C.loginRequests=[],C.loginData={uid:""},C.doLogin=o,n.subAuthenticationLoginConfirmed(t,u),n.subAuthenticationLoginFailed(t,a),C.logoutRequests=[],C.doLogout=i,n.subAuthenticationLogoutConfirmed(t,s),n.subAuthenticationLogoutFailed(t,r),C.refreshConnectionRequests=[],C.doRefreshConnection=c,n.subAuthenticationRefreshConnectionConfirmed(t,l),n.subAuthenticationRefreshConnectionFailed(t,h),C.getLastConnectionTimeData=[],C.doGetLastConnectTime=g,C.getConnectionStateData=[],C.doGetConnectionState=d,C.getAuthenticationHeadersData=[],C.doGetAuthenticationHeaders=f}angular.module("ngDrupalServicesTests.auth.controller",["ngDrupal7Services-3_x.commons.authentication.service","ngDrupal7Services-3_x.commons.authentication.channel"]).controller("AuthController",t),t.$inject=["$scope","AuthenticationService","AuthenticationChannel"]}();
!function(){"use strict";function e(e,t,a){function s(e){e.$valid&&(V=Date.now(),t.connect().then(function(e){console.log("system connect success")},function(e){console.log("system connect error")}))}function n(e){f=Date.now(),console.log("subConnectConfirmed"),g.connectRequests.push({requestStart:V,requestEnd:f,requestDuration:f-V,data:e})}function o(e){f=Date.now(),console.log("subConnectFailed"),g.connectRequests.push({requestStart:V,requestEnd:f,requestDuration:f-V,data:e})}function r(e){e.$valid&&(V=Date.now(),t.get_variable(g.getVariableData).then(function(e){console.log("system get_variable success")},function(e){console.log("system get_variable error")}))}function l(e){f=Date.now(),console.log("subGetVariableConfirmed"),g.getVariableRequests.push({requestStart:V,requestEnd:f,requestDuration:f-V,data:e})}function u(e){f=Date.now(),console.log("subGetVariableFailed"),g.getVariableRequests.push({requestStart:V,requestEnd:f,requestDuration:f-V,data:e})}function i(e){e.$valid&&(V=Date.now(),t.set_variable(g.setVariableData).then(function(e){console.log("system set_variable success")},function(e){console.log("system set_variable error")}))}function c(e){f=Date.now(),console.log("subSetVariableConfirmed"),g.setVariableRequests.push({requestStart:V,requestEnd:f,requestDuration:f-V,data:e})}function b(e){f=Date.now(),console.log("subSetVariableFailed"),g.setVariableRequests.push({requestStart:V,requestEnd:f,requestDuration:f-V,data:e})}function d(e){e.$valid&&(V=Date.now(),t.del_variable(g.delVariableData).then(function(e){console.log("system del_variable success")},function(e){console.log("system del_variable error")}))}function q(e){f=Date.now(),console.log("subDelVariableConfirmed"),g.delVariableRequests.push({requestStart:V,requestEnd:f,requestDuration:f-V,data:e})}function D(e){f=Date.now(),console.log("subDelVariableFailed"),g.delVariableRequests.push({requestStart:V,requestEnd:f,requestDuration:f-V,data:e})}var f=0,V=0,g=this;g.connectRequests=[],g.doConncet=s,a.subConnectConfirmed(e,n),a.subConnectFailed(e,o),g.getVariableRequests=[],g.doGetVariable=r,g.getVariableData={name:"","default":""},a.subGetVariableConfirmed(e,l),a.subGetVariableFailed(e,u),g.setVariableRequests=[],g.doSetVariable=i,g.setVariableData={name:"",value:""},a.subSetVariableConfirmed(e,c),a.subSetVariableFailed(e,b),g.delVariableRequests=[],g.doDelVariable=d,g.delVariableData={name:""},a.subDelVariableConfirmed(e,q),a.subDelVariableFailed(e,D)}angular.module("ngDrupalServicesTests.system.controller",["ngDrupal7Services-3_x.resources.system.resource","ngDrupal7Services-3_x.resources.system.channel"]).controller("SystemController",e),e.$inject=["$scope","SystemResource","SystemChannel"]}();
!function(){"use strict";function e(e,s,t,o){function n(e){e.$valid&&(G=Date.now(),s.retrieve(J.retrieveData).then(function(e){console.log("user retrieve success")},function(e){console.log("user retrieve error")}))}function u(e){B=Date.now(),console.log("subRetrieveConfirmed"),J.retrieveRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function r(e){B=Date.now(),console.log("subRetrieveFailed"),J.retrieveRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function a(e){e.$valid&&(G=Date.now(),s.login(J.loginData).then(function(e){console.log("user login success")},function(e){console.log("user login error")}))}function i(e){B=Date.now(),console.log("subLoginConfirmed"),J.loginRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function l(e){B=Date.now(),console.log("subLoginFailed"),J.loginRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function d(e){e.$valid&&(G=Date.now(),s.logout(J.logoutData).then(function(e){console.log("user logout success")},function(e){console.log("user logout error")}))}function c(e){B=Date.now(),console.log("subLogoutConfirmed"),J.logoutRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function q(e){B=Date.now(),console.log("subLogoutFailed"),J.logoutRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function D(e){e.$valid&&(G=Date.now(),s.token(J.tokenData).then(function(e){console.log("user token success")},function(e){console.log("user token error")}))}function f(e){B=Date.now(),console.log("subTokenConfirmed"),J.tokenRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function g(e){B=Date.now(),console.log("subTokenFailed"),J.tokenRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function w(e){e.$valid&&(J.createData.field_nickname=o.structureField(J.createData.field_nickname),G=Date.now(),s.create(J.createData).then(function(e){console.log("user create success")},function(e){console.log("user create error")}))}function R(e){B=Date.now(),console.log("subCreateConfirmed"),J.createRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function m(e){B=Date.now(),console.log("subCreateFailed"),J.createRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function p(e){e.$valid&&(J.updateData.field_nickname=o.structureField(J.createData.field_nickname),G=Date.now(),s.update(J.updateData).then(function(e){console.log("user update success")},function(e){console.log("user update error")}))}function b(e){B=Date.now(),console.log("subUpdateConfirmed"),J.updateRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function h(e){B=Date.now(),console.log("subUpdateFailed"),J.updateRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function E(e){e.$valid&&(G=Date.now(),s["delete"](J.deleteData).then(function(e){console.log("user delete success")},function(e){console.log("user delete error")}))}function C(e){B=Date.now(),console.log("subDeleteConfirmed"),J.deleteRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function S(e){B=Date.now(),J.deleteErrors=e,console.log("subDeleteFailed"),J.deleteRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function F(e){e.$valid&&(G=Date.now(),s.index(J.indexData).then(function(e){console.log("user index success")},function(e){console.log("user index error")}))}function v(e){B=Date.now(),console.log("subIndexConfirmed"),J.indexRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function x(e){B=Date.now(),console.log("subIndexFailed"),J.indexRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function P(e){e.$valid&&(G=Date.now(),s.register(J.registerData).then(function(e){console.log("user register success")},function(e){console.log("user register error")}))}function k(e){B=Date.now(),console.log("subRegisterConfirmed"),J.registerRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function N(e){B=Date.now(),console.log("subRegisterFailed"),J.registerRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function W(){console.log("ASDF"),G=Date.now(),s.resendWelcomeEmail(J.resendWelcomeEmailData).then(function(e){console.log("user resendWelcomeEmail success")},function(e){console.log("user resendWelcomeEmail error")})}function $(e){B=Date.now(),console.log("subResendWelcomeEmailConfirmed"),J.resendWelcomeEmailRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function L(e){B=Date.now(),console.log("subResendWelcomeEmailFailed"),J.resendWelcomeEmailRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function U(){G=Date.now(),s.cancel(J.cancelData).then(function(e){console.log("user cancel success")},function(e){console.log("user cancel error")})}function _(e){B=Date.now(),console.log("subCancelConfirmed"),J.cancelRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function T(e){B=Date.now(),console.log("subCancelFailed"),J.cancelRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function I(){G=Date.now(),s.passwordReset(J.passwordResetData).then(function(e){console.log("user passwordReset success")},function(e){console.log("user passwordReset error")})}function j(e){B=Date.now(),console.log("subPasswordResetConfirmed"),J.passwordResetRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function z(e){B=Date.now(),console.log("subPasswordResetFailed"),J.passwordResetRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function A(){G=Date.now(),s.requestNewPassword(J.requestNewPasswordData).then(function(e){console.log("user requestNewPassword success")},function(e){console.log("user requestNewPassword error")})}function H(e){B=Date.now(),console.log("subRequestNewPasswordConfirmed"),J.requestNewPasswordRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}function y(e){B=Date.now(),console.log("subRequestNewPasswordFailed"),J.requestNewPasswordRequests.push({requestStart:G,requestEnd:B,requestDuration:B-G,data:e})}var B=0,G=0,J=this;J.retrieveRequests=[],J.retrieveData={uid:""},J.doRetrieve=n,t.subRetrieveConfirmed(e,u),t.subRetrieveFailed(e,r),J.loginRequests=[],J.loginData={uid:""},J.doLogin=a,t.subLoginConfirmed(e,i),t.subLoginFailed(e,l),J.logoutRequests=[],J.doLogout=d,t.subLogoutConfirmed(e,c),t.subLogoutFailed(e,q),J.tokenRequests=[],J.doToken=D,t.subTokenConfirmed(e,f),t.subTokenFailed(e,g),J.createRequests=[],J.createData={name:"s",pass:"s",mail:"s@s.at"},J.doCreate=w,t.subCreateConfirmed(e,R),t.subCreateFailed(e,m),J.updateRequests=[],J.updateData={},J.doUpdate=p,t.subUpdateConfirmed(e,b),t.subUpdateFailed(e,h),J.deleteRequests=[],J.deleteErrors={},J.deleteData={uid:""},J.doDelete=E,t.subDeleteConfirmed(e,C),t.subDeleteFailed(e,S),J.indexRequests=[],J.indexData={},J.indexData.page=0,J.indexData.fields={},J.indexData.parameters={},J.indexData.pagesize=5,J.indexFieldsColapsed=!0,J.indexParametersColapsed=!0,J.doIndex=F,t.subIndexConfirmed(e,v),t.subIndexFailed(e,x),J.registerRequests=[],J.registerData={name:"s",pass:"s",mail:"s@s.at"},J.doRegister=P,t.subRegisterConfirmed(e,k),t.subRegisterFailed(e,N),J.resendWelcomeEmailRequests=[],J.resendWelcomeEmailData={uid:""},J.doResendWelcomeEmail=W,t.subResendWelcomeEmailConfirmed(e,$),t.subResendWelcomeEmailFailed(e,L),J.cancelRequests=[],J.cancelData={name:"s",pass:"s",mail:"s@s.at"},J.doCancel=U,t.subCancelConfirmed(e,_),t.subCancelFailed(e,T),J.passwordResetRequests=[],J.passwordResetData={name:"s",pass:"s",mail:"s@s.at"},J.doPasswordReset=I,t.subPasswordResetConfirmed(e,j),t.subPasswordResetFailed(e,z),J.requestNewPasswordRequests=[],J.requestNewPasswordData={uid:""},J.doRequestNewPassword=A,t.subRequestNewPasswordConfirmed(e,H),t.subRequestNewPasswordFailed(e,y)}angular.module("ngDrupalServicesTests.user.controller",["ngDrupal7Services-3_x.resources.user.resource","ngDrupal7Services-3_x.resources.user.channel","ngDrupal7Services-3_x.commons.helperService"]).controller("UserController",e),e.$inject=["$scope","UserResource","UserChannel","DrupalHelperService"]}();
//# sourceMappingURL=maps/main-92686618e4.js.map