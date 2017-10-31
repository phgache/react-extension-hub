define(function(){return function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=3)}([function(t,n,e){var i,o;i=[e,n,e(2)],void 0!==(o=function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(){this.disableTelemetry="false",this.disableAjaxTracking="false",this.enableDebug="false"}return t}();n.TelemetryClientSettings=i;var o=function(){function t(){this.IsAvailable=!0}return t.getClient=function(n){return this._instance||(console.log("Creating new TelemetryClient!"),this._instance=new t,this._instance.Init(n)),this._instance},t.prototype.Init=function(t){console.log("TelemetryClient settings key: "+t.key.substring(0,8)+"************"),console.log("TelemetryClient settings extension context: "+t.extensioncontext),console.log("TelemetryClient settings disableTelemetry: "+("true"===t.disableTelemetry)),console.log("TelemetryClient settings disableAjaxTracking: "+("true"===t.disableAjaxTracking)),console.log("TelemetryClient settings enableDebug: "+("true"===t.enableDebug));var n={instrumentationKey:t.key,disableTelemetry:"true"===t.disableTelemetry,disableAjaxTracking:"true"===t.disableAjaxTracking,enableDebug:"true"===t.enableDebug};this.ExtensionContext=t.extensioncontext;try{var i=VSS.getWebContext();e.AppInsights.downloadAndSetup(n),e.AppInsights.setAuthenticatedUserContext(i.user.id,i.collection.id)}catch(t){console.log(t)}},t.prototype.trackPageView=function(t,n,i,o,s){try{e.AppInsights.trackPageView(this.ExtensionContext+"."+t,n,i,o,s),e.AppInsights.flush()}catch(t){console.log(t)}},t.prototype.trackEvent=function(t,n,i){try{console.log("Tracking event: "+this.ExtensionContext+"."+t),e.AppInsights.trackEvent(this.ExtensionContext+"."+t,n,i),e.AppInsights.flush()}catch(t){console.log(t)}},t.prototype.trackException=function(t,n,i,o){try{console.error(t);var s={name:this.ExtensionContext+"."+n,message:t};e.AppInsights.trackException(s,n,i,o),e.AppInsights.flush()}catch(t){console.log(t)}},t.prototype.trackMetric=function(t,n,i,o,s,r){try{e.AppInsights.trackMetric(this.ExtensionContext+"."+t,n,i,o,s,r),e.AppInsights.flush()}catch(t){console.log(t)}},t}();n.TelemetryClient=o}.apply(n,i))&&(t.exports=o)},function(t,n,e){var i,o;i=[e,n],void 0!==(o=function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.settings={key:"__InstrumentationKey__",extensioncontext:"React Extension Hub",disableTelemetry:"false",disableAjaxTracking:"false",enableDebug:"false"}}.apply(n,i))&&(t.exports=o)},function(t,n,e){"use strict";var i,o,s;!function(t){t.ApplicationInsights||(t.ApplicationInsights={})}(s||(s={}));var s;!function(t){!function(t){var n=function(){function t(){}return t}();t.Base=n}(t.Telemetry||(t.Telemetry={}))}(s||(s={}));var s;!function(t){!function(t){var n=function(){function t(){this.ver=1,this.sampleRate=100,this.tags={}}return t}();t.Envelope=n}(t.Telemetry||(t.Telemetry={}))}(s||(s={}));var s;!function(t){!function(t){t.Context||(t.Context={})}(t.ApplicationInsights||(t.ApplicationInsights={}))}(s||(s={}));var s;!function(t){!function(t){t.Context||(t.Context={})}(t.ApplicationInsights||(t.ApplicationInsights={}))}(s||(s={}));var s;!function(t){!function(t){t.Context||(t.Context={})}(t.ApplicationInsights||(t.ApplicationInsights={}))}(s||(s={}));var s;!function(t){!function(t){t.Context||(t.Context={})}(t.ApplicationInsights||(t.ApplicationInsights={}))}(s||(s={}));var s;!function(t){!function(t){t.Context||(t.Context={})}(t.ApplicationInsights||(t.ApplicationInsights={}))}(s||(s={}));var s;!function(t){!function(t){t.Context||(t.Context={})}(t.ApplicationInsights||(t.ApplicationInsights={}))}(s||(s={}));var s;!function(t){!function(t){t.Context||(t.Context={})}(t.ApplicationInsights||(t.ApplicationInsights={}))}(s||(s={}));var s;!function(t){!function(t){t.Context||(t.Context={})}(t.ApplicationInsights||(t.ApplicationInsights={}))}(s||(s={}));var s;!function(t){t.ApplicationInsights||(t.ApplicationInsights={})}(s||(s={}));var s;!function(t){t.ApplicationInsights||(t.ApplicationInsights={})}(s||(s={}));var s;!function(t){t.ApplicationInsights||(t.ApplicationInsights={})}(s||(s={}));var r;!function(t){!function(t){t[t.Verbose=0]="Verbose",t[t.Information=1]="Information",t[t.Warning=2]="Warning",t[t.Error=3]="Error",t[t.Critical=4]="Critical"}(t.SeverityLevel||(t.SeverityLevel={}))}(r||(r={}));var s;!function(t){t.ApplicationInsights||(t.ApplicationInsights={})}(s||(s={})),i=[e,n],void 0!==(o=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var e=function(){function t(){}return t._createLazyMethod=function(n){var e=window[t.appInsightsName];e[n]=function(){var t=arguments;e.queue?e.queue.push(function(){return e[n].apply(e,t)}):e[n].apply(e,t)}},t._defineLazyMethods=function(){var n=window[t.appInsightsName];try{n.cookie=document.cookie}catch(t){}n.queue=[];for(var e=["clearAuthenticatedUserContext","flush","setAuthenticatedUserContext","startTrackEvent","startTrackPage","stopTrackEvent","stopTrackPage","trackDependency","trackEvent","trackException","trackMetric","trackPageView","trackTrace"];e.length;)t._createLazyMethod(e.pop())},t._download=function(n){t.appInsightsInstance.config=n;var e=window[t.appInsightsName];if(e.queue||(e.queue=[]),setTimeout(function(){var t=document.createElement("script");t.src=n.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js",document.head.appendChild(t)}),!n.disableExceptionTracking){t._createLazyMethod("_onerror");var i=window.onerror;window.onerror=function(t,n,o,s,r){var a=i&&i(t,n,o,s,r);return!0!==a&&e._onerror(t,n,o,s,r),a}}},Object.defineProperty(t,"appInsightsInstance",{get:function(){if("undefined"!=typeof window)return window[t.appInsightsName]||(window[t.appInsightsName]={downloadAndSetup:t._download,_defineLazyMethods:t._defineLazyMethods},t._defineLazyMethods()),window[t.appInsightsName]},enumerable:!0,configurable:!0}),t.appInsightsInitialized=!1,t.appInsightsName="appInsights",t}();n.AppInsights=e.appInsightsInstance}.apply(n,i))&&(t.exports=o)},function(t,n,e){var i,o;i=[e,n,e(0),e(1)],void 0!==(o=function(t,n,e,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),new(function(){function t(t){this.element=t,this.element.innerHTML+="The time is: ",this.span=document.createElement("span"),this.element.appendChild(this.span),this.span.innerText=(new Date).toUTCString()}return t.prototype.start=function(){var t=this;this.timerToken=setInterval(function(){return t.span.innerHTML=(new Date).toUTCString()},500)},t.prototype.stop=function(){clearTimeout(this.timerToken)},t}())(document.getElementById("content")).start(),e.TelemetryClient.getClient(i.settings).trackPageView("React Extension Hub.Index")}.apply(n,i))&&(t.exports=o)}])});