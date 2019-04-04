(function(){function S(r){function e(n,t,e,u,i,a){for(;i>=0&&i<a;i+=r){var o=u?u[i]:i;e=t(e,n[o],o,n)};return e};return function(u,i,a,c){i=o(i,c,4);var f=!t(u)&&n.keys(u),s=(f||u).length,l=r>0?0:s-1;return arguments.length<3&&(a=u[f?f[l]:l],l+=r),e(u,i,a,f,l,s)}};function E(n){return function(t,e,i){e=r(e,i);for(var a=u(t),o=n>0?0:a-1;o>=0&&o<a;o+=n)if(e(t[o],o,t))return o;return-1}};function M(r,t,i){return function(o,a,c){var l=0,f=u(o);if("number"==typeof c)r>0?l=c>=0?c:Math.max(c+f,l):f=c>=0?Math.min(c+1,f):c+f+1;else if(i&&c&&f)return c=i(o,a),o[c]===a?c:-1;if(a!==a)return c=t(e.call(o,l,f),n.isNaN),c>=0?c+l:-1;for(c=r>0?l:f-1;c>=0&&c<f;c+=r)if(o[c]===a)return c;return-1}};function I(r,t){var u=j.length,i=r.constructor,o=n.isFunction(i)&&i.prototype||g,e="constructor";for(n.has(r,e)&&!n.contains(t,e)&&t.push(e);u--;)e=j[u],e in r&&r[e]!==o[e]&&!n.contains(t,e)&&t.push(e)};var v=this,z=v._,c=Array.prototype,g=Object.prototype,D=Function.prototype,L=c.push,e=c.slice,a=g.toString,P=g.hasOwnProperty,C=Array.isArray,k=Object.keys,y=D.bind,F=Object.create,m=function(){},n=function(r){return r instanceof n?r:this instanceof n?void(this._wrapped=r):new n(r)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=n),exports._=n):v._=n,n.VERSION="1.8.3";var o=function(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 2:return function(t,e){return n.call(r,t,e)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,i){return n.call(r,t,e,u,i)}};return function(){return n.apply(r,arguments)}},r=function(r,t,e){return null==r?n.identity:n.isFunction(r)?o(r,t,e):n.isObject(r)?n.matcher(r):n.property(r)};n.iteratee=function(n,t){return r(n,t,1/0)};var h=function(n,r){return function(t){var c=arguments.length;if(c<2||null==t)return t;for(var i=1;i<c;i++)for(var o=arguments[i],a=n(o),f=a.length,u=0;u<f;u++){var e=a[u];r&&void 0!==t[e]||(t[e]=o[e])};return t}},A=function(r){if(!n.isObject(r))return{};if(F)return F(r);m.prototype=r;var t=new m;return m.prototype=null,t},O=function(n){return function(r){return null==r?void 0:r[n]}},q=Math.pow(2,53)-1,u=O("length"),t=function(n){var r=u(n);return"number"==typeof r&&r>=0&&r<=q};n.each=n.forEach=function(r,e,u){e=o(e,u);var i,a;if(t(r))for(i=0,a=r.length;i<a;i++)e(r[i],i,r);else{var c=n.keys(r);for(i=0,a=c.length;i<a;i++)e(r[c[i]],c[i],r)};return r},n.map=n.collect=function(e,u,i){u=r(u,i);for(var a=!t(e)&&n.keys(e),f=(a||e).length,l=Array(f),o=0;o<f;o++){var c=a?a[o]:o;l[o]=u(e[c],c,e)};return l},n.reduce=n.foldl=n.inject=S(1),n.reduceRight=n.foldr=S(-1),n.find=n.detect=function(r,e,u){var i;if(i=t(r)?n.findIndex(r,e,u):n.findKey(r,e,u),void 0!==i&&i!==-1)return r[i]},n.filter=n.select=function(t,e,u){var i=[];return e=r(e,u),n.each(t,function(n,r,t){e(n,r,t)&&i.push(n)}),i},n.reject=function(t,e,u){return n.filter(t,n.negate(r(e)),u)},n.every=n.all=function(e,u,i){u=r(u,i);for(var a=!t(e)&&n.keys(e),f=(a||e).length,o=0;o<f;o++){var c=a?a[o]:o;if(!u(e[c],c,e))return!1};return!0},n.some=n.any=function(e,u,i){u=r(u,i);for(var a=!t(e)&&n.keys(e),f=(a||e).length,o=0;o<f;o++){var c=a?a[o]:o;if(u(e[c],c,e))return!0};return!1},n.contains=n.includes=n.include=function(r,e,u,i){return t(r)||(r=n.values(r)),("number"!=typeof u||i)&&(u=0),n.indexOf(r,e,u)>=0},n.invoke=function(r,t){var u=e.call(arguments,2),i=n.isFunction(t);return n.map(r,function(n){var r=i?t:n[t];return null==r?r:r.apply(n,u)})},n.pluck=function(r,t){return n.map(r,n.property(t))},n.where=function(r,t){return n.filter(r,n.matcher(t))},n.findWhere=function(r,t){return n.find(r,n.matcher(t))},n.max=function(e,u,i){var f,a,o=-(1/0),l=-(1/0);if(null==u&&null!=e){e=t(e)?e:n.values(e);for(var c=0,s=e.length;c<s;c++)f=e[c],f>o&&(o=f)}
else u=r(u,i),n.each(e,function(n,r,t){a=u(n,r,t),(a>l||a===-(1/0)&&o===-(1/0))&&(o=n,l=a)});return o},n.min=function(e,u,i){var f,a,o=1/0,l=1/0;if(null==u&&null!=e){e=t(e)?e:n.values(e);for(var c=0,s=e.length;c<s;c++)f=e[c],f<o&&(o=f)}
else u=r(u,i),n.each(e,function(n,r,t){a=u(n,r,t),(a<l||a===1/0&&o===1/0)&&(o=n,l=a)});return o},n.shuffle=function(r){for(var u,o=t(r)?r:n.values(r),a=o.length,i=Array(a),e=0;e<a;e++)u=n.random(0,e),u!==e&&(i[e]=i[u]),i[u]=o[e];return i},n.sample=function(r,e,u){return null==e||u?(t(r)||(r=n.values(r)),r[n.random(r.length-1)]):n.shuffle(r).slice(0,Math.max(0,e))},n.sortBy=function(t,e,u){return e=r(e,u),n.pluck(n.map(t,function(n,r,t){return{value:n,index:r,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(t<e||void 0===e)return-1};return n.index-r.index}),"value")};var p=function(t){return function(e,u,i){var o={};return u=r(u,i),n.each(e,function(n,r){var i=u(n,r,e);t(o,n,i)}),o}};n.groupBy=p(function(r,t,e){n.has(r,e)?r[e].push(t):r[e]=[t]}),n.indexBy=p(function(n,r,t){n[t]=r}),n.countBy=p(function(r,t,e){n.has(r,e)?r[e]++:r[e]=1}),n.toArray=function(r){return r?n.isArray(r)?e.call(r):t(r)?n.map(r,n.identity):n.values(r):[]},n.size=function(r){return null==r?0:t(r)?r.length:n.keys(r).length},n.partition=function(t,e,u){e=r(e,u);var i=[],o=[];return n.each(t,function(n,r,t){(e(n,r,t)?i:o).push(n)}),[i,o]},n.first=n.head=n.take=function(r,t,e){if(null!=r)return null==t||e?r[0]:n.initial(r,r.length-t)},n.initial=function(n,r,t){return e.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))},n.last=function(r,t,e){if(null!=r)return null==t||e?r[r.length-1]:n.rest(r,Math.max(0,r.length-t))},n.rest=n.tail=n.drop=function(n,r,t){return e.call(n,null==r||t?1:r)},n.compact=function(r){return n.filter(r,n.identity)};var i=function(r,e,o,a){for(var f=[],h=0,l=a||0,v=u(r);l<v;l++){var c=r[l];if(t(c)&&(n.isArray(c)||n.isArguments(c))){e||(c=i(c,e,o));var s=0,p=c.length;for(f.length+=p;s<p;)f[h++]=c[s++]}
else o||(f[h++]=c)};return f};n.flatten=function(n,r){return i(n,r,!1)},n.without=function(r){return n.difference(r,e.call(arguments,1))},n.uniq=n.unique=function(t,e,i,o){n.isBoolean(e)||(o=i,i=e,e=!1),null!=i&&(i=r(i,o));for(var c=[],s=[],f=0,p=u(t);f<p;f++){var a=t[f],l=i?i(a,f,t):a;e?(f&&s===l||c.push(a),s=l):i?n.contains(s,l)||(s.push(l),c.push(a)):n.contains(c,a)||c.push(a)};return c},n.union=function(){return n.uniq(i(arguments,!0,!0))},n.intersection=function(r){for(var i=[],a=arguments.length,o=0,c=u(r);o<c;o++){var e=r[o];if(!n.contains(i,e)){for(var t=1;t<a&&n.contains(arguments[t],e);t++);t===a&&i.push(e)}};return i},n.difference=function(r){var t=i(arguments,!0,!0,1);return n.filter(r,function(r){return!n.contains(t,r)})},n.zip=function(){return n.unzip(arguments)},n.unzip=function(r){for(var e=r&&n.max(r,u).length||0,i=Array(e),t=0;t<e;t++)i[t]=n.pluck(r,t);return i},n.object=function(n,r){for(var e={},t=0,i=u(n);t<i;t++)r?e[n[t]]=r[t]:e[n[t][0]]=n[t][1];return e},n.findIndex=E(1),n.findLastIndex=E(-1),n.sortedIndex=function(n,t,e,i){e=r(e,i,1);for(var f=e(t),o=0,c=u(n);o<c;){var a=Math.floor((o+c)/2);e(n[a])<f?o=a+1:c=a};return o},n.indexOf=M(1,n.findIndex,n.sortedIndex),n.lastIndexOf=M(-1,n.findLastIndex),n.range=function(n,r,t){null==r&&(r=n||0,n=0),t=t||1;for(var u=Math.max(Math.ceil((r-n)/t),0),i=Array(u),e=0;e<u;e++,n+=t)i[e]=n;return i};var w=function(r,t,e,u,i){if(!(u instanceof t))return r.apply(e,i);var o=A(r.prototype),a=r.apply(o,i);return n.isObject(a)?a:o};n.bind=function(r,t){if(y&&r.bind===y)return y.apply(r,e.call(arguments,1));if(!n.isFunction(r))throw new TypeError("Bind must be called on a function");var i=e.call(arguments,2),u=function(){return w(r,u,t,this,i.concat(e.call(arguments)))};return u},n.partial=function(r){var t=e.call(arguments,1),u=function(){for(var i=0,a=t.length,o=Array(a),e=0;e<a;e++)o[e]=t[e]===n?arguments[i++]:t[e];for(;i<arguments.length;)o.push(arguments[i++]);return w(r,u,this,this,o)};return u},n.bindAll=function(r){var t,e,u=arguments.length;if(u<=1)throw new Error("bindAll must be passed function names");for(t=1;t<u;t++)e=arguments[t],r[e]=n.bind(r[e],r);return r},n.memoize=function(r,t){var e=function(u){var i=e.cache,o=""+(t?t.apply(this,arguments):u);return n.has(i,o)||(i[o]=r.apply(this,arguments)),i[o]};return e.cache={},e},n.delay=function(n,r){var t=e.call(arguments,2);return setTimeout(function(){return n.apply(null,t)},r)},n.defer=n.partial(n.delay,n,1),n.throttle=function(r,t,e){var i,o,c,u=null,a=0;e||(e={});var f=function(){a=e.leading===!1?0:n.now(),u=null,c=r.apply(i,o),u||(i=o=null)};return function(){var s=n.now();a||e.leading!==!1||(a=s);var l=t-(s-a);return i=this,o=arguments,l<=0||l>t?(u&&(clearTimeout(u),u=null),a=s,c=r.apply(i,o),u||(i=o=null)):u||e.trailing===!1||(u=setTimeout(f,l)),c}},n.debounce=function(r,t,e){var u,i,o,c,a,f=function(){var l=n.now()-c;l<t&&l>=0?u=setTimeout(f,t-l):(u=null,e||(a=r.apply(o,i),u||(o=i=null)))};return function(){o=this,i=arguments,c=n.now();var l=e&&!u;return u||(u=setTimeout(f,t)),l&&(a=r.apply(o,i),o=i=null),a}},n.wrap=function(r,t){return n.partial(t,r)},n.negate=function(n){return function(){return!n.apply(this,arguments)}},n.compose=function(){var n=arguments,r=n.length-1;return function(){for(var e=r,t=n[r].apply(this,arguments);e--;)t=n[e].call(this,t);return t}},n.after=function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},n.before=function(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}},n.once=n.partial(n.before,2);var x=!{toString:null}.propertyIsEnumerable("toString"),j=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];n.keys=function(r){if(!n.isObject(r))return[];if(k)return k(r);var t=[];for(var e in r)n.has(r,e)&&t.push(e);return x&&I(r,t),t},n.allKeys=function(r){if(!n.isObject(r))return[];var t=[];for(var e in r)t.push(e);return x&&I(r,t),t},n.values=function(r){for(var e=n.keys(r),u=e.length,i=Array(u),t=0;t<u;t++)i[t]=r[e[t]];return i},n.mapObject=function(t,e,u){e=r(e,u);for(var i,a=n.keys(t),f=a.length,c={},o=0;o<f;o++)i=a[o],c[i]=e(t[i],i,t);return c},n.pairs=function(r){for(var e=n.keys(r),u=e.length,i=Array(u),t=0;t<u;t++)i[t]=[e[t],r[e[t]]];return i},n.invert=function(r){for(var u={},e=n.keys(r),t=0,i=e.length;t<i;t++)u[r[e[t]]]=e[t];return u},n.functions=n.methods=function(r){var e=[];for(var t in r)n.isFunction(r[t])&&e.push(t);return e.sort()},n.extend=h(n.allKeys),n.extendOwn=n.assign=h(n.keys),n.findKey=function(t,e,u){e=r(e,u);for(var i,a=n.keys(t),o=0,c=a.length;o<c;o++)if(i=a[o],e(t[i],i,t))return i},n.pick=function(r,t,e){var l,a,s={},u=r;if(null==u)return s;n.isFunction(t)?(a=n.allKeys(u),l=o(t,e)):(a=i(arguments,!1,!1,1),l=function(n,r,t){return r in t},u=Object(u));for(var f=0,h=a.length;f<h;f++){var c=a[f],p=u[c];l(p,c,u)&&(s[c]=p)};return s},n.omit=function(r,t,e){if(n.isFunction(t))t=n.negate(t);else{var u=n.map(i(arguments,!1,!1,1),String);t=function(r,t){return!n.contains(u,t)}};return n.pick(r,t,e)},n.defaults=h(n.allKeys,!0),n.create=function(r,t){var e=A(r);return t&&n.extendOwn(e,t),e},n.clone=function(r){return n.isObject(r)?n.isArray(r)?r.slice():n.extend({},r):r},n.tap=function(n,r){return r(n),n},n.isMatch=function(r,t){var o=n.keys(t),a=o.length;if(null==r)return!a;for(var i=Object(r),u=0;u<a;u++){var e=o[u];if(t[e]!==i[e]||!(e in i))return!1};return!0};var s=function(r,t,e,u){if(r===t)return 0!==r||1/r===1/t;if(null==r||null==t)return r===t;r instanceof n&&(r=r._wrapped),t instanceof n&&(t=t._wrapped);var l=a.call(r);if(l!==a.call(t))return!1;switch(l){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!==+r?+t!==+t:0===+r?1/+r===1/t:+r===+t;case"[object Date]":case"[object Boolean]":return+r===+t};var h="[object Array]"===l;if(!h){if("object"!=typeof r||"object"!=typeof t)return!1;var c=r.constructor,f=t.constructor;if(c!==f&&!(n.isFunction(c)&&c instanceof c&&n.isFunction(f)&&f instanceof f)&&"constructor"in r&&"constructor"in t)return!1};e=e||[],u=u||[];for(var i=e.length;i--;)if(e[i]===r)return u[i]===t;if(e.push(r),u.push(t),h){if(i=r.length,i!==t.length)return!1;for(;i--;)if(!s(r[i],t[i],e,u))return!1}
else{var o,p=n.keys(r);if(i=p.length,n.keys(t).length!==i)return!1;for(;i--;)if(o=p[i],!n.has(t,o)||!s(r[o],t[o],e,u))return!1};return e.pop(),u.pop(),!0};n.isEqual=function(n,r){return s(n,r)},n.isEmpty=function(r){return null==r||(t(r)&&(n.isArray(r)||n.isString(r)||n.isArguments(r))?0===r.length:0===n.keys(r).length)},n.isElement=function(n){return!(!n||1!==n.nodeType)},n.isArray=C||function(n){return"[object Array]"===a.call(n)},n.isObject=function(n){var r=typeof n;return"function"===r||"object"===r&&!!n},n.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(r){n["is"+r]=function(n){return a.call(n)==="[object "+r+"]"}}),n.isArguments(arguments)||(n.isArguments=function(r){return n.has(r,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(n.isFunction=function(n){return"function"==typeof n||!1}),n.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},n.isNaN=function(r){return n.isNumber(r)&&r!==+r},n.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===a.call(n)},n.isNull=function(n){return null===n},n.isUndefined=function(n){return void 0===n},n.has=function(n,r){return null!=n&&P.call(n,r)},n.noConflict=function(){return v._=z,this},n.identity=function(n){return n},n.constant=function(n){return function(){return n}},n.noop=function(){},n.property=O,n.propertyOf=function(n){return null==n?function(){}:function(r){return n[r]}},n.matcher=n.matches=function(r){return r=n.extendOwn({},r),function(t){return n.isMatch(t,r)}},n.times=function(n,r,t){var u=Array(Math.max(0,n));r=o(r,t,1);for(var e=0;e<n;e++)u[e]=r(e);return u},n.random=function(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))},n.now=Date.now||function(){return(new Date).getTime()};var d={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#x27;","`":"&#x60;"},K=n.invert(d),b=function(r){var e=function(n){return r[n]},t="(?:"+n.keys(r).join("|")+")",u=RegExp(t),i=RegExp(t,"g");return function(n){return n=null==n?"":""+n,u.test(n)?n.replace(i,e):n}};n.escape=b(d),n.unescape=b(K),n.result=function(r,t,e){var u=null==r?void 0:r[t];return void 0===u&&(u=e),n.isFunction(u)?u.call(r):u};var R=0;n.uniqueId=function(n){var r=++R+"";return n?n+r:r},n.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var l=/(.)^/,N={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\u2028|\u2029/g,T=function(n){return"\\"+N[n]};n.template=function(r,t,e){!t&&e&&(t=e),t=n.defaults({},t,n.templateSettings);var s=RegExp([(t.escape||l).source,(t.interpolate||l).source,(t.evaluate||l).source].join("|")+"|$","g"),o=0,u="__p+='";r.replace(s,function(n,t,e,i,a){return u+=r.slice(o,a).replace(B,T),o=a+n.length,t?u+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?u+="'+\n((__t=("+e+"))==null?'':__t)+\n'":i&&(u+="';\n"+i+"\n__p+='"),n}),u+="';\n",t.variable||(u="with(obj||{}){\n"+u+"}\n"),u="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+u+"return __p;\n";try{var f=new Function(t.variable||"obj","_",u)}catch(a){throw a.source=u,a};var i=function(r){return f.call(this,r,n)},c=t.variable||"obj";return i.source="function("+c+"){\n"+u+"}",i},n.chain=function(r){var t=n(r);return t._chain=!0,t};var f=function(r,t){return r._chain?n(t).chain():t};n.mixin=function(r){n.each(n.functions(r),function(t){var e=n[t]=r[t];n.prototype[t]=function(){var r=[this._wrapped];return L.apply(r,arguments),f(this,e.apply(n,r))}})},n.mixin(n),n.each(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=c[r];n.prototype[r]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0],f(this,n)}}),n.each(["concat","join","slice"],function(r){var t=c[r];n.prototype[r]=function(){return f(this,t.apply(this._wrapped,arguments))}}),n.prototype.value=function(){return this._wrapped},n.prototype.valueOf=n.prototype.toJSON=n.prototype.value,n.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return n})}).call(this);;window.wp=window.wp||{},function(n,t){var s,r,e={},i=Array.prototype.slice;s=function(){},r=function(e,n,r){var i;return i=n&&n.hasOwnProperty('constructor')?n.constructor:function(){var t=e.apply(this,arguments);return t},t.extend(i,e),s.prototype=e.prototype,i.prototype=new s,n&&t.extend(i.prototype,n),r&&t.extend(i,r),i.prototype.constructor=i,i.__super__=e.prototype,i},e.Class=function(n,i,r){var s,a=arguments;return n&&i&&e.Class.applicator===n&&(a=i,t.extend(this,r||{})),s=this,this.instance&&(s=function(){return s.instance.apply(s,arguments)},t.extend(s,this)),s.initialize.apply(s,a),s},e.Class.extend=function(t,e){var n=r(this,t,e);return n.extend=this.extend,n},e.Class.applicator={},e.Class.prototype.initialize=function(){},e.Class.prototype.extended=function(t){for(var e=this;'undefined'!=typeof e.constructor;){if(e.constructor===t)return!0;if('undefined'==typeof e.constructor.__super__)return!1;e=e.constructor.__super__};return!1},e.Events={trigger:function(t){return this.topics&&this.topics[t]&&this.topics[t].fireWith(this,i.call(arguments,1)),this},bind:function(e){return this.topics=this.topics||{},this.topics[e]=this.topics[e]||t.Callbacks(),this.topics[e].add.apply(this.topics[e],i.call(arguments,1)),this},unbind:function(t){return this.topics&&this.topics[t]&&this.topics[t].remove.apply(this.topics[t],i.call(arguments,1)),this}},e.Value=e.Class.extend({initialize:function(e,n){this._value=e,this.callbacks=t.Callbacks(),this._dirty=!1,t.extend(this,n||{}),this.set=t.proxy(this.set,this)},instance:function(){return arguments.length?this.set.apply(this,arguments):this.get()},get:function(){return this._value},set:function(t){var e=this._value;return t=this._setter.apply(this,arguments),t=this.validate(t),null===t||_.isEqual(e,t)?this:(this._value=t,this._dirty=!0,this.callbacks.fireWith(this,[t,e]),this)},_setter:function(t){return t},setter:function(t){var e=this.get();return this._setter=t,this._value=null,this.set(e),this},resetSetter:function(){return this._setter=this.constructor.prototype._setter,this.set(this.get()),this},validate:function(t){return t},bind:function(){return this.callbacks.add.apply(this.callbacks,arguments),this},unbind:function(){return this.callbacks.remove.apply(this.callbacks,arguments),this},link:function(){var e=this.set;return t.each(arguments,function(){this.bind(e)}),this},unlink:function(){var e=this.set;return t.each(arguments,function(){this.unbind(e)}),this},sync:function(){var e=this;return t.each(arguments,function(){e.link(this),this.link(e)}),this},unsync:function(){var e=this;return t.each(arguments,function(){e.unlink(this),this.unlink(e)}),this}}),e.Values=e.Class.extend({defaultConstructor:e.Value,initialize:function(e){t.extend(this,e||{}),this._value={},this._deferreds={}},instance:function(t){return 1===arguments.length?this.value(t):this.when.apply(this,arguments)},value:function(t){return this._value[t]},has:function(t){return'undefined'!=typeof this._value[t]},add:function(t,n){var s,r,i=this;if('string'==typeof t)s=t,r=n;else{if('string'!=typeof t.id)throw new Error('Unknown key');s=t.id,r=t};return i.has(s)?i.value(s):(i._value[s]=r,r.parent=i,r.extended(e.Value)&&r.bind(i._change),i.trigger('add',r),i._deferreds[s]&&i._deferreds[s].resolve(),i._value[s])},create:function(t){return this.add(t,new this.defaultConstructor(e.Class.applicator,i.call(arguments,1)))},each:function(e,n){n='undefined'==typeof n?this:n,t.each(this._value,function(t,i){e.call(n,i,t)})},remove:function(t){var n=this.value(t);n&&(this.trigger('remove',n),n.extended(e.Value)&&n.unbind(this._change),delete n.parent),delete this._value[t],delete this._deferreds[t],n&&this.trigger('removed',n)},when:function(){var e=this,n=i.call(arguments),s=t.Deferred();return t.isFunction(n[n.length-1])&&s.done(n.pop()),t.when.apply(t,t.map(n,function(n){if(!e.has(n))return e._deferreds[n]=e._deferreds[n]||t.Deferred()})).done(function(){var i=t.map(n,function(t){return e(t)});return i.length!==n.length?void e.when.apply(e,n).done(function(){s.resolveWith(e,i)}):void s.resolveWith(e,i)}),s.promise()},_change:function(){this.parent.trigger('change',this)}}),t.extend(e.Values.prototype,e.Events),e.ensure=function(e){return'string'==typeof e?t(e):e},e.Element=e.Value.extend({initialize:function(n,i){var s,u,r,a=this,o=e.Element.synchronizer.html;this.element=e.ensure(n),this.events='',this.element.is('input, select, textarea')&&(s=this.element.prop('type'),this.events+=' change input',o=e.Element.synchronizer.val,this.element.is('input')&&e.Element.synchronizer[s]&&(o=e.Element.synchronizer[s])),e.Value.prototype.initialize.call(this,null,t.extend(i||{},o)),this._value=this.get(),u=this.update,r=this.refresh,this.update=function(t){t!==r.call(a)&&u.apply(this,arguments)},this.refresh=function(){a.set(r.call(a))},this.bind(this.update),this.element.bind(this.events,this.refresh)},find:function(e){return t(e,this.element)},refresh:function(){},update:function(){}}),e.Element.synchronizer={},t.each(['html','val'],function(t,n){e.Element.synchronizer[n]={update:function(t){this.element[n](t)},refresh:function(){return this.element[n]()}}}),e.Element.synchronizer.checkbox={update:function(t){this.element.prop('checked',t)},refresh:function(){return this.element.prop('checked')}},e.Element.synchronizer.radio={update:function(t){this.element.filter(function(){return this.value===t}).prop('checked',!0)},refresh:function(){return this.element.filter(':checked').val()}},t.support.postMessage=!!window.postMessage,e.Messenger=e.Class.extend({add:function(t,n,i){return this[t]=new e.Value(n,i)},initialize:function(e,n){var i=window.parent===window?null:window.parent;t.extend(this,n||{}),this.add('channel',e.channel),this.add('url',e.url||''),this.add('origin',this.url()).link(this.url).setter(function(t){var e=document.createElement('a');return e.href=t,e.protocol+'//'+e.host.replace(/:(80|443)$/,'')}),this.add('targetWindow',null),this.targetWindow.set=function(t){var e=this._value;return t=this._setter.apply(this,arguments),t=this.validate(t),null===t||e===t?this:(this._value=t,this._dirty=!0,this.callbacks.fireWith(this,[t,e]),this)},this.targetWindow(e.targetWindow||i),this.receive=t.proxy(this.receive,this),this.receive.guid=t.guid++,t(window).on('message',this.receive)},destroy:function(){t(window).off('message',this.receive)},receive:function(t){var e;t=t.originalEvent,this.targetWindow&&this.targetWindow()&&(this.origin()&&t.origin!==this.origin()||'string'==typeof t.data&&'{'===t.data[0]&&(e=JSON.parse(t.data),e&&e.id&&'undefined'!=typeof e.data&&((e.channel||this.channel())&&this.channel()!==e.channel||this.trigger(e.id,e.data))))},send:function(t,e){var n;e='undefined'==typeof e?null:e,this.url()&&this.targetWindow()&&(n={id:t,data:e},this.channel()&&(n.channel=this.channel()),this.targetWindow().postMessage(JSON.stringify(n),this.origin()))}}),t.extend(e.Messenger.prototype,e.Events),e.Notification=e.Class.extend({template:null,templateId:'customize-notification',containerClasses:'',initialize:function(t,e){var n;this.code=t,n=_.extend({message:null,type:'error',fromServer:!1,data:null,setting:null,template:null,dismissible:!1,containerClasses:''},e),delete n.code,_.extend(this,n)},render:function(){var n,i,e=this;return e.template||(e.template=wp.template(e.templateId)),i=_.extend({},e,{alt:e.parent&&e.parent.alt}),n=t(e.template(i)),e.dismissible&&n.find('.notice-dismiss').on('click keydown',function(t){'keydown'===t.type&&13!==t.which||(e.parent?e.parent.remove(e.code):n.remove())}),n}}),e=t.extend(new e.Values,e),e.get=function(){var t={};return this.each(function(e,n){t[n]=e.get()}),t},e.utils={},e.utils.parseQueryString=function(t){var e={};return _.each(t.split('&'),function(t){var n,i,s;n=t.split('=',2),n[0]&&(i=decodeURIComponent(n[0].replace(/\+/g,' ')),i=i.replace(/ /g,'_'),s=_.isUndefined(n[1])?null:decodeURIComponent(n[1].replace(/\+/g,' ')),e[i]=s)}),e},n.customize=e}(wp,jQuery);