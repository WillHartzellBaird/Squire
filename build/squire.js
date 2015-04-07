!function(e,t){"use strict";function n(e,t,n){this.root=this.currentNode=e,this.nodeType=t,this.filter=n}function r(e,t){for(var n=e.length;n--;)if(!t(e[n]))return!1;return!0}function o(e,t,n){if(e.nodeName!==t)return!1;for(var r in n)if(e.getAttribute(r)!==n[r])return!1;return!0}function i(e,t){return e.nodeType===t.nodeType&&e.nodeName===t.nodeName&&e.className===t.className&&(!e.style&&!t.style||e.style.cssText===t.style.cssText)}function a(e){return e.nodeType===O&&!!te[e.nodeName]}function s(e){return ee.test(e.nodeName)}function d(e){return e.nodeType===O&&!s(e)&&r(e.childNodes,s)}function l(e){return e.nodeType===O&&!s(e)&&!d(e)}function c(e){var t=e.ownerDocument,r=new n(t.body,A,d,!1);return r.currentNode=e,r}function f(e){return c(e).previousNode()}function h(e){return c(e).nextNode()}function u(e,t,n){do if(o(e,t,n))return e;while(e=e.parentNode);return null}function p(e){var t,n,r,o,i=e.parentNode;return i&&e.nodeType===O?(t=p(i),t+=(t?">":"")+e.nodeName,(n=e.id)&&(t+="#"+n),(r=e.className.trim())&&(o=r.split(/\s\s*/),o.sort(),t+=".",t+=o.join("."))):t=i?p(i):"",t}function g(e){var t=e.nodeType;return t===O?e.childNodes.length:e.length||0}function m(e){var t=e.parentNode;return t&&t.removeChild(e),e}function v(e,t){var n=e.parentNode;n&&n.replaceChild(t,e)}function C(e){for(var t=e.ownerDocument.createDocumentFragment(),n=e.childNodes,r=n?n.length:0;r--;)t.appendChild(e.firstChild);return t}function N(e,n,r,o){var i,a,s,d,l=e.createElement(n);if(r instanceof Array&&(o=r,r=null),r)for(i in r)a=r[i],a!==t&&l.setAttribute(i,r[i]);if(o)for(s=0,d=o.length;d>s;s+=1)l.appendChild(o[s]);return l}function S(e){var t,n,r,o=e.ownerDocument,i=e;if("BODY"===e.nodeName&&((n=e.firstChild)&&"BR"!==n.nodeName||(r=k(o),t=r?r.createDefaultBlock():N(o,"DIV"),n?e.replaceChild(t,n):e.appendChild(t),e=t,t=null)),s(e)){for(n=e.firstChild;G&&n&&n.nodeType===x&&!n.data;)e.removeChild(n),n=e.firstChild;n||(G?(t=o.createTextNode(w),k(o)._didAddZWS()):t=o.createTextNode(""))}else if(Q){for(;e.nodeType!==x&&!a(e);){if(n=e.firstChild,!n){t=o.createTextNode("");break}e=n}e.nodeType===x?/^ +$/.test(e.data)&&(e.data=""):a(e)&&e.parentNode.insertBefore(o.createTextNode(""),e)}else if(!e.querySelector("BR"))for(t=N(o,"BR");(n=e.lastElementChild)&&!s(n);)e=n;return t&&e.appendChild(t),i}function _(e){var t,n,r,o,i=e.childNodes,a=e.ownerDocument,d=null;for(t=0,n=i.length;n>t;t+=1)r=i[t],o="BR"===r.nodeName,!o&&s(r)?(d||(d=N(a,"DIV")),d.appendChild(r),t-=1,n-=1):(o||d)&&(d||(d=N(a,"DIV")),S(d),o?e.replaceChild(d,r):(e.insertBefore(d,r),t+=1,n+=1),d=null),l(r)&&_(r);return d&&e.appendChild(S(d)),e}function y(e,t,n){var r,o,i,a=e.nodeType;if(a===x&&e!==n)return y(e.parentNode,e.splitText(t),n);if(a===O){if("number"==typeof t&&(t=t<e.childNodes.length?e.childNodes[t]:null),e===n)return t;for(r=e.parentNode,o=e.cloneNode(!1);t;)i=t.nextSibling,o.appendChild(t),t=i;return"OL"===e.nodeName&&u(e,"BLOCKQUOTE")&&(o.start=(+e.start||1)+e.childNodes.length-1),S(e),S(o),(i=e.nextSibling)?r.insertBefore(o,i):r.appendChild(o),y(r,o,n)}return t}function T(e,t){if(e.nodeType===O)for(var n,r,o,a=e.childNodes,d=a.length,l=[];d--;)if(n=a[d],r=d&&a[d-1],d&&s(n)&&i(n,r)&&!te[n.nodeName])t.startContainer===n&&(t.startContainer=r,t.startOffset+=g(r)),t.endContainer===n&&(t.endContainer=r,t.endOffset+=g(r)),t.startContainer===e&&(t.startOffset>d?t.startOffset-=1:t.startOffset===d&&(t.startContainer=r,t.startOffset=g(r))),t.endContainer===e&&(t.endOffset>d?t.endOffset-=1:t.endOffset===d&&(t.endContainer=r,t.endOffset=g(r))),m(n),n.nodeType===x?r.appendData(n.data):l.push(C(n));else if(n.nodeType===O){for(o=l.length;o--;)n.appendChild(l.pop());T(n,t)}}function E(e,t,n){for(var r,o,i,a=t;1===a.parentNode.childNodes.length;)a=a.parentNode;m(a),o=e.childNodes.length,r=e.lastChild,r&&"BR"===r.nodeName&&(e.removeChild(r),o-=1),i={startContainer:e,startOffset:o,endContainer:e,endOffset:o},e.appendChild(C(t)),T(e,i),n.setStart(i.startContainer,i.startOffset),n.collapse(!0),Z&&(r=e.lastChild)&&"BR"===r.nodeName&&e.removeChild(r)}function B(e){var t,n,r=e.previousSibling,o=e.firstChild,a=e.ownerDocument,s="LI"===e.nodeName;if(!s||o&&/^[OU]L$/.test(o.nodeName))if(r&&i(r,e)){if(!l(r)){if(!s)return;n=N(a,"DIV"),n.appendChild(C(r)),r.appendChild(n)}m(e),t=!l(e),r.appendChild(C(e)),t&&_(r),o&&B(o)}else s&&(r=N(a,"DIV"),e.insertBefore(r,o),S(r))}function k(e){for(var t,n=Ne.length;n--;)if(t=Ne[n],t._doc===e)return t;return null}function b(e){var t,n=e.defaultView,r=e.body;this._win=n,this._doc=e,this._body=r,this._events={},this._sel=n.getSelection(),this._lastSelection=null,$&&this.addEventListener("beforedeactivate",this.getSelection),this._hasZWS=!1,this._lastAnchorNode=null,this._lastFocusNode=null,this._path="",this.addEventListener("keyup",this._updatePathOnEvent),this.addEventListener("mouseup",this._updatePathOnEvent),n.addEventListener("focus",this,!1),n.addEventListener("blur",this,!1),this._undoIndex=-1,this._undoStack=[],this._undoStackLength=0,this._isInUndoState=!1,this._ignoreChange=!1,Y?(t=new MutationObserver(this._docWasChanged.bind(this)),t.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0}),this._mutation=t):this.addEventListener("keyup",this._keyUpDetectChange),this.defaultBlockTag="DIV",this.defaultBlockProperties=null,this._awaitingPaste=!1,this.addEventListener(z?"beforecut":"cut",this._onCut),this.addEventListener(z?"beforepaste":"paste",this._onPaste),this.addEventListener(Z?"keypress":"keydown",this._onKey),z&&(n.Text.prototype.splitText=function(e){var t=this.ownerDocument.createTextNode(this.data.slice(e)),n=this.nextSibling,r=this.parentNode,o=this.length-e;return n?r.insertBefore(t,n):r.appendChild(t),o&&this.deleteData(e,o),t}),r.setAttribute("contenteditable","true"),this.setHTML("");try{e.execCommand("enableObjectResizing",!1,"false"),e.execCommand("enableInlineTableEditing",!1,"false")}catch(o){}Ne.push(this)}var L=2,O=1,x=3,A=1,R=4,D=0,U=1,I=2,P=3,w="​",F=e.defaultView,M=navigator.userAgent,W=/iP(?:ad|hone|od)/.test(M),H=/Mac OS X/.test(M),K=/Gecko\//.test(M),z=/Trident\/[456]\./.test(M),Z=!!F.opera,V=/WebKit\//.test(M),q=H?"meta-":"ctrl-",Q=z||Z,G=z||V,$=z,Y="undefined"!=typeof MutationObserver,j=/[^ \t\r\n]/,X=Array.prototype.indexOf,J={1:1,2:2,3:4,8:128,9:256,11:1024};n.prototype.nextNode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,o=this.filter;;){for(e=t.firstChild;!e&&t&&t!==n;)e=t.nextSibling,e||(t=t.parentNode);if(!e)return null;if(J[e.nodeType]&r&&o(e))return this.currentNode=e,e;t=e}},n.prototype.previousNode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,o=this.filter;;){if(t===n)return null;if(e=t.previousSibling)for(;t=e.lastChild;)e=t;else e=t.parentNode;if(!e)return null;if(J[e.nodeType]&r&&o(e))return this.currentNode=e,e;t=e}};var ee=/^(?:#text|A(?:BBR|CRONYM)?|B(?:R|D[IO])?|C(?:ITE|ODE)|D(?:ATA|FN|EL)|EM|FONT|HR|I(?:NPUT|MG|NS)?|KBD|Q|R(?:P|T|UBY)|S(?:U[BP]|PAN|TR(?:IKE|ONG)|MALL|AMP)?|U|VAR|WBR)$/,te={BR:1,HR:1,IMG:1,INPUT:1},ne=function(e,t){for(var n=e.childNodes;t&&e.nodeType===O;)e=n[t-1],n=e.childNodes,t=n.length;return e},re=function(e,t){if(e.nodeType===O){var n=e.childNodes;if(t<n.length)e=n[t];else{for(;e&&!e.nextSibling;)e=e.parentNode;e&&(e=e.nextSibling)}}return e},oe=function(e,t){e=e.cloneRange(),fe(e);for(var r=e.startContainer,o=e.endContainer,i=e.startContainer===e.endContainer?e.startContainer:e.commonAncestorContainer,a=new n(i,R,function(t){return ce(e,t,!0)},!1),s=a.currentNode=r;!t(s,e)&&s!==o&&(s=a.nextNode()););},ie=function(e){var t="";return oe(e,function(e,n){var r=e.data;r&&/\S/.test(r)&&(e===n.endContainer&&(r=r.slice(0,n.endOffset)),e===n.startContainer&&(r=r.slice(n.startOffset)),t+=r)}),t},ae=function(e,t){var n,r,o,i,a=e.startContainer,s=e.startOffset,d=e.endContainer,l=e.endOffset;a.nodeType===x?(n=a.parentNode,r=n.childNodes,s===a.length?(s=X.call(r,a)+1,e.collapsed&&(d=n,l=s)):(s&&(i=a.splitText(s),d===a?(l-=s,d=i):d===n&&(l+=1),a=i),s=X.call(r,a)),a=n):r=a.childNodes,o=r.length,s===o?a.appendChild(t):a.insertBefore(t,r[s]),a===d&&(l+=r.length-o),e.setStart(a,s),e.setEnd(d,l)},se=function(e,t){var n=e.startContainer,r=e.startOffset,o=e.endContainer,i=e.endOffset;t||(t=e.commonAncestorContainer),t.nodeType===x&&(t=t.parentNode);for(var a,s,d,l=y(o,i,t),c=y(n,r,t),f=t.ownerDocument.createDocumentFragment();c!==l;)a=c.nextSibling,f.appendChild(c),c=a;return n=t,r=l?X.call(t.childNodes,l):t.childNodes.length,d=t.childNodes[r],s=d&&d.previousSibling,s&&s.nodeType===x&&d.nodeType===x&&(n=s,r=s.length,s.appendData(d.data),m(d)),e.setStart(n,r),e.collapse(!0),S(t),f},de=function(e){he(e),se(e),fe(e);var t=ue(e),n=pe(e);t&&n&&t!==n&&E(t,n,e),t&&S(t);var r=e.endContainer.ownerDocument.body,o=r.firstChild;o&&"BR"!==o.nodeName||(S(r),e.selectNodeContents(r.firstChild))},le=function(e,t){for(var n=!0,r=t.childNodes,o=r.length;o--;)if(!s(r[o])){n=!1;break}if(e.collapsed||de(e),fe(e),n)ae(e,t),e.collapse(!1);else{for(var i,a,d=y(e.startContainer,e.startOffset,e.startContainer.ownerDocument.body),l=d.previousSibling,c=l,f=c.childNodes.length,u=d,p=0,m=d.parentNode;(i=c.lastChild)&&i.nodeType===O&&"BR"!==i.nodeName;)c=i,f=c.childNodes.length;for(;(i=u.firstChild)&&i.nodeType===O&&"BR"!==i.nodeName;)u=i;for(;(i=t.firstChild)&&s(i);)c.appendChild(i);for(;(i=t.lastChild)&&s(i);)u.insertBefore(i,u.firstChild),p+=1;for(a=t;a=h(a);)S(a);m.insertBefore(t,d),a=d.previousSibling,d.textContent?B(d):m.removeChild(d),d.parentNode||(u=a,p=g(u)),l.textContent?B(l):(c=l.nextSibling,f=0,m.removeChild(l)),e.setStart(c,f),e.setEnd(u,p),fe(e)}},ce=function(e,t,n){var r=t.ownerDocument.createRange();if(r.selectNode(t),n){var o=e.compareBoundaryPoints(P,r)>-1,i=e.compareBoundaryPoints(U,r)<1;return!o&&!i}var a=e.compareBoundaryPoints(D,r)<1,s=e.compareBoundaryPoints(I,r)>-1;return a&&s},fe=function(e){for(var t,n=e.startContainer,r=e.startOffset,o=e.endContainer,i=e.endOffset;n.nodeType!==x&&(t=n.childNodes[r],t&&!a(t));)n=t,r=0;if(i)for(;o.nodeType!==x&&(t=o.childNodes[i-1],t&&!a(t));)o=t,i=g(o);else for(;o.nodeType!==x&&(t=o.firstChild,t&&!a(t));)o=t;e.collapsed?(e.setStart(o,i),e.setEnd(n,r)):(e.setStart(n,r),e.setEnd(o,i))},he=function(e,t){var n,r=e.startContainer,o=e.startOffset,i=e.endContainer,a=e.endOffset;for(t||(t=e.commonAncestorContainer);r!==t&&!o;)n=r.parentNode,o=X.call(n.childNodes,r),r=n;for(;i!==t&&a===g(i);)n=i.parentNode,a=X.call(n.childNodes,i)+1,i=n;e.setStart(r,o),e.setEnd(i,a)},ue=function(e){var t,n=e.startContainer;return s(n)?t=f(n):d(n)?t=n:(t=ne(n,e.startOffset),t=h(t)),t&&ce(e,t,!0)?t:null},pe=function(e){var t,n,r=e.endContainer;if(s(r))t=f(r);else if(d(r))t=r;else{if(t=re(r,e.endOffset),!t)for(t=r.ownerDocument.body;n=t.lastChild;)t=n;t=f(t)}return t&&ce(e,t,!0)?t:null},ge=new n(null,R|A,function(e){return e.nodeType===x?j.test(e.data):"IMG"===e.nodeName}),me=function(e){var t=e.startContainer,n=e.startOffset;if(t.nodeType===x){if(n)return!1;ge.currentNode=t}else ge.currentNode=re(t,n);return ge.root=ue(e),!ge.previousNode()},ve=function(e){var t,n=e.endContainer,r=e.endOffset;if(n.nodeType===x){if(t=n.data.length,t&&t>r)return!1;ge.currentNode=n}else ge.currentNode=ne(n,r);return ge.root=pe(e),!ge.nextNode()},Ce=function(e){var t,n=ue(e),r=pe(e);n&&r&&(t=n.parentNode,e.setStart(t,X.call(t.childNodes,n)),t=r.parentNode,e.setEnd(t,X.call(t.childNodes,r)+1))},Ne=[],Se=b.prototype;Se.createElement=function(e,t,n){return N(this._doc,e,t,n)},Se.createDefaultBlock=function(e){return S(this.createElement(this.defaultBlockTag,this.defaultBlockProperties,e))},Se.didError=function(e){console.log(e)},Se.getDocument=function(){return this._doc};var _e={focus:1,blur:1,pathChange:1,select:1,input:1,undoStateChange:1};Se.fireEvent=function(e,t){var n,r,o,i=this._events[e];if(i)for(t||(t={}),t.type!==e&&(t.type=e),i=i.slice(),n=0,r=i.length;r>n;n+=1){o=i[n];try{o.handleEvent?o.handleEvent(t):o.call(this,t)}catch(a){a.details="Squire: fireEvent error. Event type: "+e,this.didError(a)}}return this},Se.destroy=function(){var e,t=this._win,n=this._doc,r=this._events;t.removeEventListener("focus",this,!1),t.removeEventListener("blur",this,!1);for(e in r)_e[e]||n.removeEventListener(e,this,!0);this._mutation&&this._mutation.disconnect();for(var o=Ne.length;o--;)Ne[o]===this&&Ne.splice(o,1)},Se.handleEvent=function(e){this.fireEvent(e.type,e)},Se.addEventListener=function(e,t){var n=this._events[e];return t?(n||(n=this._events[e]=[],_e[e]||this._doc.addEventListener(e,this,!0)),n.push(t),this):(this.didError({name:"Squire: addEventListener with null or undefined fn",message:"Event type: "+e}),this)},Se.removeEventListener=function(e,t){var n,r=this._events[e];if(r){for(n=r.length;n--;)r[n]===t&&r.splice(n,1);r.length||(delete this._events[e],_e[e]||this._doc.removeEventListener(e,this,!1))}return this},Se._createRange=function(e,t,n,r){if(e instanceof this._win.Range)return e.cloneRange();var o=this._doc.createRange();return o.setStart(e,t),n?o.setEnd(n,r):o.setEnd(e,t),o},Se.setSelection=function(e){if(e){W&&this._win.focus();var t=this._sel;t.removeAllRanges(),t.addRange(e)}return this},Se.getSelection=function(){var e,t,n,r=this._sel;return r.rangeCount?(e=r.getRangeAt(0).cloneRange(),t=e.startContainer,n=e.endContainer,t&&a(t)&&e.setStartBefore(t),n&&a(n)&&e.setEndBefore(n),this._lastSelection=e):e=this._lastSelection,e||(e=this._createRange(this._body.firstChild,0)),e},Se.getSelectedText=function(){return ie(this.getSelection())},Se.getPath=function(){return this._path};var ye=function(e){for(var t,r,o=new n(e,R,function(){return!0},!1);t=o.nextNode();)for(;(r=t.data.indexOf(w))>-1;)t.deleteData(r,1)};Se._didAddZWS=function(){this._hasZWS=!0},Se._removeZWS=function(){this._hasZWS&&(ye(this._body),this._hasZWS=!1)},Se._updatePath=function(e,t){var n,r=e.startContainer,o=e.endContainer;(t||r!==this._lastAnchorNode||o!==this._lastFocusNode)&&(this._lastAnchorNode=r,this._lastFocusNode=o,n=r&&o?r===o?p(o):"(selection)":"",this._path!==n&&(this._path=n,this.fireEvent("pathChange",{path:n}))),this.fireEvent("select")},Se._updatePathOnEvent=function(){this._updatePath(this.getSelection())},Se.focus=function(){return Z||this._body.focus(),this._win.focus(),this},Se.blur=function(){return K&&this._body.blur(),top.focus(),this};var Te="squire-selection-start",Ee="squire-selection-end";Se._saveRangeToBookmark=function(e){var t,n=this.createElement("INPUT",{id:Te,type:"hidden"}),r=this.createElement("INPUT",{id:Ee,type:"hidden"});ae(e,n),e.collapse(!1),ae(e,r),n.compareDocumentPosition(r)&L&&(n.id=Ee,r.id=Te,t=n,n=r,r=t),e.setStartAfter(n),e.setEndBefore(r)},Se._getRangeAndRemoveBookmark=function(e){var t=this._doc,n=t.getElementById(Te),r=t.getElementById(Ee);if(n&&r){var o,i=n.parentNode,a=r.parentNode,s={startContainer:i,endContainer:a,startOffset:X.call(i.childNodes,n),endOffset:X.call(a.childNodes,r)};i===a&&(s.endOffset-=1),m(n),m(r),T(i,s),i!==a&&T(a,s),e||(e=t.createRange()),e.setStart(s.startContainer,s.startOffset),e.setEnd(s.endContainer,s.endOffset),o=e.collapsed,fe(e),o&&e.collapse(!0)}return e||null},Se._keyUpDetectChange=function(e){var t=e.keyCode;e.ctrlKey||e.metaKey||e.altKey||!(16>t||t>20)||!(33>t||t>45)||this._docWasChanged()},Se._docWasChanged=function(){return Y&&this._ignoreChange?void(this._ignoreChange=!1):(this._isInUndoState&&(this._isInUndoState=!1,this.fireEvent("undoStateChange",{canUndo:!0,canRedo:!1})),void this.fireEvent("input"))},Se._recordUndoState=function(e){if(!this._isInUndoState){var t=this._undoIndex+=1,n=this._undoStack;t<this._undoStackLength&&(n.length=this._undoStackLength=t),e&&this._saveRangeToBookmark(e),n[t]=this._getHTML(),this._undoStackLength+=1,this._isInUndoState=!0}},Se.undo=function(){if(0!==this._undoIndex||!this._isInUndoState){this._recordUndoState(this.getSelection()),this._undoIndex-=1,this._setHTML(this._undoStack[this._undoIndex]);var e=this._getRangeAndRemoveBookmark();e&&this.setSelection(e),this._isInUndoState=!0,this.fireEvent("undoStateChange",{canUndo:0!==this._undoIndex,canRedo:!0}),this.fireEvent("input")}return this},Se.redo=function(){var e=this._undoIndex,t=this._undoStackLength;if(t>e+1&&this._isInUndoState){this._undoIndex+=1,this._setHTML(this._undoStack[this._undoIndex]);var n=this._getRangeAndRemoveBookmark();n&&this.setSelection(n),this.fireEvent("undoStateChange",{canUndo:!0,canRedo:t>e+2}),this.fireEvent("input")}return this},Se.hasFormat=function(e,t,r){if(e=e.toUpperCase(),t||(t={}),!r&&!(r=this.getSelection()))return!1;var o,i,a=r.commonAncestorContainer;if(u(a,e,t))return!0;if(a.nodeType===x)return!1;o=new n(a,R,function(e){return ce(r,e,!0)},!1);for(var s=!1;i=o.nextNode();){if(!u(i,e,t))return!1;s=!0}return s},Se._addFormat=function(e,t,r){var o,i,a,s,d,l,c,f;if(r.collapsed)o=S(this.createElement(e,t)),ae(r,o),r.setStart(o.firstChild,o.firstChild.length),r.collapse(!0);else{i=new n(r.commonAncestorContainer,R,function(e){return ce(r,e,!0)},!1),a=r.startContainer,d=r.startOffset,s=r.endContainer,l=r.endOffset,i.currentNode=a,a.nodeType!==x&&(a=i.nextNode(),d=0);do c=i.currentNode,c&&(f=!u(c,e,t),f&&(c===s&&c.length>l&&c.splitText(l),c===a&&d&&(c=c.splitText(d),s===a&&(s=c,l-=d),a=c,d=0),o=this.createElement(e,t),v(c,o),o.appendChild(c)));while(i.nextNode());s.nodeType!==x&&(s=c,l=c.length),r=this._createRange(a,d,s,l)}return r},Se._removeFormat=function(e,t,n,r){this._saveRangeToBookmark(n);var i,a=this._doc;n.collapsed&&(G?(i=a.createTextNode(w),this._didAddZWS()):i=a.createTextNode(""),ae(n,i));for(var d=n.commonAncestorContainer;s(d);)d=d.parentNode;var l=n.startContainer,c=n.startOffset,f=n.endContainer,h=n.endOffset,u=[],p=function(e,t){if(!ce(n,e,!1)){var r,o,i=e.nodeType===x;if(!ce(n,e,!0))return void("INPUT"===e.nodeName||i&&!e.data||u.push([t,e]));if(i)e===f&&h!==e.length&&u.push([t,e.splitText(h)]),e===l&&c&&(e.splitText(c),u.push([t,e]));else for(r=e.firstChild;r;r=o)o=r.nextSibling,p(r,t)}},g=Array.prototype.filter.call(d.getElementsByTagName(e),function(r){return ce(n,r,!0)&&o(r,e,t)});r||g.forEach(function(e){p(e,e)}),u.forEach(function(e){var t=e[0].cloneNode(!1),n=e[1];v(n,t),t.appendChild(n)}),g.forEach(function(e){v(e,C(e))}),this._getRangeAndRemoveBookmark(n),i&&n.collapse(!1);var m={startContainer:n.startContainer,startOffset:n.startOffset,endContainer:n.endContainer,endOffset:n.endOffset};return T(d,m),n.setStart(m.startContainer,m.startOffset),n.setEnd(m.endContainer,m.endOffset),n},Se.changeFormat=function(e,t,n,r){return n||(n=this.getSelection())?(this._recordUndoState(n),this._getRangeAndRemoveBookmark(n),t&&(n=this._removeFormat(t.tag.toUpperCase(),t.attributes||{},n,r)),e&&(n=this._addFormat(e.tag.toUpperCase(),e.attributes||{},n)),this.setSelection(n),this._updatePath(n,!0),Y||this._docWasChanged(),this):void 0};var Be={DT:"DD",DD:"DT",LI:"LI"},ke=function(e,t,n,r){var i=Be[t.nodeName],a=null,s=y(n,r,t.parentNode);return i||(i=e.defaultBlockTag,a=e.defaultBlockProperties),o(s,i,a)||(t=N(s.ownerDocument,i,a),s.dir&&(t.className="rtl"===s.dir?"dir-rtl":"",t.dir=s.dir),v(s,t),t.appendChild(C(s)),s=t),s};Se.forEachBlock=function(e,t,n){if(!n&&!(n=this.getSelection()))return this;t&&(this._recordUndoState(n),this._getRangeAndRemoveBookmark(n));var r=ue(n),o=pe(n);if(r&&o)do if(e(r)||r===o)break;while(r=h(r));return t&&(this.setSelection(n),this._updatePath(n,!0),Y||this._docWasChanged()),this},Se.modifyBlocks=function(e,t){if(!t&&!(t=this.getSelection()))return this;this._isInUndoState?this._saveRangeToBookmark(t):this._recordUndoState(t),Ce(t);var n,r=this._body;return he(t,r),n=se(t,r),ae(t,e.call(this,n)),t.endOffset<t.endContainer.childNodes.length&&B(t.endContainer.childNodes[t.endOffset]),B(t.startContainer.childNodes[t.startOffset]),this._getRangeAndRemoveBookmark(t),this.setSelection(t),this._updatePath(t,!0),Y||this._docWasChanged(),this};var be=function(e){return this.createElement("BLOCKQUOTE",[e])},Le=function(e){var t=e.querySelectorAll("blockquote");return Array.prototype.filter.call(t,function(e){return!u(e.parentNode,"BLOCKQUOTE")}).forEach(function(e){v(e,C(e))}),e},Oe=function(){return this.createDefaultBlock([this.createElement("INPUT",{id:Te,type:"hidden"}),this.createElement("INPUT",{id:Ee,type:"hidden"})])},xe=function(e,n,r){for(var o,i,a,s,d=c(n);o=d.nextNode();)i=o.parentNode.nodeName,"LI"!==i?(s=e.createElement("LI",{"class":"rtl"===o.dir?"dir-rtl":t,dir:o.dir||t}),(a=o.previousSibling)&&a.nodeName===r?a.appendChild(s):v(o,e.createElement(r,[s])),s.appendChild(o)):(o=o.parentNode.parentNode,i=o.nodeName,i!==r&&/^[OU]L$/.test(i)&&v(o,e.createElement(r,[C(o)])))},Ae=function(e){return xe(this,e,"UL"),e},Re=function(e){return xe(this,e,"OL"),e},De=function(e){var t,n,r,o,i,a,s,d=e.querySelectorAll("UL, OL");for(t=0,n=d.length;n>t;t+=1){for(o=d[t],i=C(o),a=i.childNodes,r=a.length;r--;)s=a[r],v(s,C(s));_(i),v(o,i)}return e},Ue=function(e){var t,n,r,o,i,a=e.querySelectorAll("LI");for(t=0,n=a.length;n>t;t+=1)r=a[t],l(r.firstChild)||(o=r.parentNode.nodeName,i=r.previousSibling,i&&(i=i.lastChild)&&i.nodeName===o||v(r,this.createElement("LI",[i=this.createElement(o)])),i.appendChild(r));return e},Ie=function(e){var t=e.querySelectorAll("LI");return Array.prototype.filter.call(t,function(e){return!l(e.firstChild)}).forEach(function(t){var n,r=t.parentNode,o=r.parentNode,i=t.firstChild,a=i;for(t.previousSibling&&(r=y(r,t,o));a&&(n=a.nextSibling,!l(a));)o.insertBefore(a,r),a=n;for("LI"===o.nodeName&&i.previousSibling&&y(o,i,o.parentNode);t!==e&&!t.childNodes.length;)r=t.parentNode,r.removeChild(t),t=r},this),_(e),e},Pe=/\b((?:(?:ht|f)tps?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,}\/)(?:[^\s()<>]+|\([^\s()<>]+\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|([\w\-.%+]+@(?:[\w\-]+\.)+[A-Z]{2,}\b)/i,we=function(e){for(var t,r,o,i,a,s,d,l=e.ownerDocument,c=new n(e,R,function(e){return!u(e,"A")},!1);t=c.nextNode();)for(r=t.data,o=t.parentNode;i=Pe.exec(r);)a=i.index,s=a+i[0].length,a&&(d=l.createTextNode(r.slice(0,a)),o.insertBefore(d,t)),d=l.createElement("A"),d.textContent=r.slice(a,s),d.href=i[1]?/^(?:ht|f)tps?:/.test(i[1])?i[1]:"http://"+i[1]:"mailto:"+i[2],o.insertBefore(d,t),t.data=r=r.slice(s)},Fe=/^(?:A(?:DDRESS|RTICLE|SIDE|UDIO)|BLOCKQUOTE|CAPTION|D(?:[DLT]|IV)|F(?:IGURE|OOTER)|H[1-6]|HEADER|L(?:ABEL|EGEND|I)|O(?:L|UTPUT)|P(?:RE)?|SECTION|T(?:ABLE|BODY|D|FOOT|H|HEAD|R)|UL)$/,Me={1:10,2:13,3:16,4:18,5:24,6:32,7:48},We={backgroundColor:{regexp:j,replace:function(e,t){return N(e,"SPAN",{"class":"highlight",style:"background-color: "+t})}},color:{regexp:j,replace:function(e,t){return N(e,"SPAN",{"class":"colour",style:"color:"+t})}},fontWeight:{regexp:/^bold/i,replace:function(e){return N(e,"B")}},fontStyle:{regexp:/^italic/i,replace:function(e){return N(e,"I")}},fontFamily:{regexp:j,replace:function(e,t){return N(e,"SPAN",{"class":"font",style:"font-family:"+t})}},fontSize:{regexp:j,replace:function(e,t){return N(e,"SPAN",{"class":"size",style:"font-size:"+t})}}},He=function(e){return function(t,n){var r=N(t.ownerDocument,e);return n.replaceChild(r,t),r.appendChild(C(t)),r}},Ke={SPAN:function(e,t){var n,r,o,i,a,s,d=e.style,l=e.ownerDocument;for(n in We)r=We[n],o=d[n],o&&r.regexp.test(o)&&(s=r.replace(l,o),i&&i.appendChild(s),i=s,a||(a=s));return a&&(i.appendChild(C(e)),t.replaceChild(a,e)),i||e},STRONG:He("B"),EM:He("I"),STRIKE:He("S"),FONT:function(e,t){var n,r,o,i,a,s=e.face,d=e.size,l=e.color,c=e.ownerDocument;return s&&(n=N(c,"SPAN",{"class":"font",style:"font-family:"+s}),a=n,i=n),d&&(r=N(c,"SPAN",{"class":"size",style:"font-size:"+Me[d]+"px"}),a||(a=r),i&&i.appendChild(r),i=r),l&&/^#?([\dA-F]{3}){1,2}$/i.test(l)&&("#"!==l.charAt(0)&&(l="#"+l),o=N(c,"SPAN",{"class":"colour",style:"color:"+l}),a||(a=o),i&&i.appendChild(o),i=o),a||(a=i=N(c,"SPAN")),t.replaceChild(a,e),i.appendChild(C(e)),i},TT:function(e,t){var n=N(e.ownerDocument,"SPAN",{"class":"font",style:'font-family:menlo,consolas,"courier new",monospace'});return t.replaceChild(n,e),n.appendChild(C(e)),n}},ze=function(e){for(var t,n=e.childNodes,r=n.length;r--;)t=n[r],t.nodeType!==O||a(t)?t.nodeType!==x||t.data||e.removeChild(t):(ze(t),s(t)&&!t.firstChild&&e.removeChild(t))},Ze=function(e,t){var n,r,o,i,a,d,l,c,f,h,u=e.childNodes;for(n=0,r=u.length;r>n;n+=1)if(o=u[n],i=o.nodeName,a=o.nodeType,d=Ke[i],a===O){if(l=o.childNodes.length,d)o=d(o,e);else{if(!Fe.test(i)&&!s(o)){n-=1,r+=l-1,e.replaceChild(C(o),o);continue}!t&&o.style.cssText&&o.removeAttribute("style")}l&&Ze(o,t)}else{if(a===x){if(c=o.data,/\S/.test(c)){if(s(e))continue;if(f=0,h=c.length,!n||!s(u[n-1])){for(;h>f&&!j.test(c.charAt(f));)f+=1;f&&(o.data=c=c.slice(f),h-=f)}if(n+1===r||!s(u[n+1])){for(f=h;f>0&&!j.test(c.charAt(f-1));)f-=1;h>f&&(o.data=c.slice(0,f))}continue}if(n&&r>n+1&&s(u[n-1])&&s(u[n+1])){o.data=" ";continue}}e.removeChild(o),n-=1,r-=1}return e},Ve=function(e){return e.nodeType===O?"BR"===e.nodeName:j.test(e.data)},qe=function(e){for(var t,r=e.parentNode;s(r);)r=r.parentNode;return t=new n(r,A|R,Ve),t.currentNode=e,!!t.nextNode()},Qe=function(e){var t,n,r,o=e.querySelectorAll("BR"),i=[],a=o.length;for(t=0;a>t;t+=1)i[t]=qe(o[t]);for(;a--;)if(n=o[a],r=n.parentNode){for(;s(r);)r=r.parentNode;if(d(r)){if(i[a]){if("DIV"!==r.nodeName)continue;y(n.parentNode,n,r.parentNode)}m(n)}else _(r)}};Se._ensureBottomLine=function(){var e=this._body,t=e.lastElementChild;t&&t.nodeName===this.defaultBlockTag&&d(t)||e.appendChild(this.createDefaultBlock())},Se._onCut=function(){var e=this.getSelection(),t=this;this._recordUndoState(e),this._getRangeAndRemoveBookmark(e),this.setSelection(e),setTimeout(function(){try{t._ensureBottomLine()}catch(e){t.didError(e)}},0)},Se._onPaste=function(e){if(!this._awaitingPaste){var t,n,r=e.clipboardData,o=r&&r.items,i=!1,a=!1;if(o){for(t=o.length;t--;){if(n=o[t].type,"text/html"===n){a=!1;break}/^image\/.*/.test(n)&&(a=!0)}if(a)return e.preventDefault(),this.fireEvent("dragover",{dataTransfer:r,preventDefault:function(){i=!0}}),void(i&&this.fireEvent("drop",{dataTransfer:r}))}this._awaitingPaste=!0;var s,d,l,c,f,u=this,p=this._body,g=this.getSelection();u._recordUndoState(g),u._getRangeAndRemoveBookmark(g),s=g.startContainer,d=g.startOffset,l=g.endContainer,c=g.endOffset,f=ue(g);var v=this.createElement("DIV",{style:"position: absolute; overflow: hidden; top:"+(p.scrollTop+(f?f.getBoundingClientRect().top:0))+"px; left: 0; width: 1px; height: 1px;"});p.appendChild(v),g.selectNodeContents(v),this.setSelection(g),setTimeout(function(){try{var e=C(m(v)),t=e.firstChild,n=u._createRange(s,d,l,c);if(t){t===e.lastChild&&"DIV"===t.nodeName&&e.replaceChild(C(t),t),e.normalize(),we(e),Ze(e,!1),Qe(e),ze(e);for(var r=e,o=!0;r=h(r);)S(r);u.fireEvent("willPaste",{fragment:e,preventDefault:function(){o=!1}}),o&&(le(n,e),Y||u._docWasChanged(),n.collapse(!1),u._ensureBottomLine())}u.setSelection(n),u._updatePath(n,!0),u._awaitingPaste=!1}catch(i){u.didError(i)}},0)}};var Ge={8:"backspace",9:"tab",13:"enter",32:"space",37:"left",39:"right",46:"delete",219:"[",221:"]"},$e=function(e){return function(t,n){n.preventDefault(),t[e]()}},Ye=function(e,t){return t=t||null,function(n,r){r.preventDefault();var o=n.getSelection();n.hasFormat(e,null,o)?n.changeFormat(null,{tag:e},o):n.changeFormat({tag:e},t,o)}},je=function(e,t){try{t||(t=e.getSelection());var n,r=t.startContainer;for(r.nodeType===x&&(r=r.parentNode),n=r;s(n)&&(!n.textContent||n.textContent===w);)r=n,n=r.parentNode;r!==n&&(t.setStart(n,X.call(n.childNodes,r)),t.collapse(!0),n.removeChild(r),d(n)||(n=f(n)),S(n),fe(t)),e._ensureBottomLine(),e.setSelection(t),e._updatePath(t,!0)}catch(o){e.didError(o)}},Xe={enter:function(e,t,n){var r,o,i;if(t.preventDefault(),e._recordUndoState(n),we(n.startContainer),e._removeZWS(),e._getRangeAndRemoveBookmark(n),n.collapsed||de(n),r=ue(n),!r||/^T[HD]$/.test(r.nodeName))return ae(n,e.createElement("BR")),n.collapse(!1),e.setSelection(n),void e._updatePath(n,!0);if((o=u(r,"LI"))&&(r=o),!r.textContent){if(u(r,"UL")||u(r,"OL"))return e.modifyBlocks(Ie,n);if(u(r,"BLOCKQUOTE"))return e.modifyBlocks(Oe,n)}for(i=ke(e,r,n.startContainer,n.startOffset),ye(r),ze(r),S(r);i.nodeType===O;){var a,s=i.firstChild;if("A"!==i.nodeName||i.textContent){for(;s&&s.nodeType===x&&!s.data&&(a=s.nextSibling,a&&"BR"!==a.nodeName);)m(s),s=a;if(!s||"BR"===s.nodeName||s.nodeType===x&&!Z)break;i=s}else v(i,C(i)),i=s}n=e._createRange(i,0),e.setSelection(n),e._updatePath(n,!0),i.nodeType===x&&(i=i.parentNode);var d=e._doc,l=e._body;i.offsetTop+i.offsetHeight>(d.documentElement.scrollTop||l.scrollTop)+l.offsetHeight&&i.scrollIntoView(!1)},backspace:function(e,t,n){if(e._removeZWS(),e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),n.collapsed)if(me(n)){t.preventDefault();var r=ue(n),o=r&&f(r);if(o){if(!o.isContentEditable)return void m(o);for(E(o,r,n),r=o.parentNode;r&&!r.nextSibling;)r=r.parentNode;r&&(r=r.nextSibling)&&B(r),e.setSelection(n)}else if(r){if(u(r,"UL")||u(r,"OL"))return e.modifyBlocks(Ie,n);if(u(r,"BLOCKQUOTE"))return e.modifyBlocks(Le,n);e.setSelection(n),e._updatePath(n,!0)}}else e.setSelection(n),setTimeout(function(){je(e)},0);else t.preventDefault(),de(n),je(e,n)},"delete":function(e,t,n){if(e._removeZWS(),e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),n.collapsed)if(ve(n)){t.preventDefault();var r=ue(n),o=r&&h(r);if(o){if(!o.isContentEditable)return void m(o);for(E(r,o,n),o=r.parentNode;o&&!o.nextSibling;)o=o.parentNode;o&&(o=o.nextSibling)&&B(o),e.setSelection(n),e._updatePath(n,!0)}}else e.setSelection(n),setTimeout(function(){je(e)},0);else t.preventDefault(),de(n),je(e,n)},tab:function(e,t,n){var r,o;if(e._removeZWS(),n.collapsed&&me(n)&&ve(n)){for(r=ue(n);o=r.parentNode;){if("UL"===o.nodeName||"OL"===o.nodeName){r.previousSibling&&(t.preventDefault(),e.modifyBlocks(Ue,n));break}r=o}t.preventDefault()}},space:function(e,t,n){var r,o;e._recordUndoState(n),we(n.startContainer),e._getRangeAndRemoveBookmark(n),r=n.endContainer,o=r.parentNode,n.collapsed&&"A"===o.nodeName&&!r.nextSibling&&n.endOffset===g(r)&&n.setStartAfter(o),e.setSelection(n)},left:function(e){e._removeZWS()},right:function(e){e._removeZWS()}};H&&K&&F.getSelection().modify&&(Xe["meta-left"]=function(e,t){t.preventDefault(),e._sel.modify("move","backward","lineboundary")},Xe["meta-right"]=function(e,t){t.preventDefault(),e._sel.modify("move","forward","lineboundary")}),Xe[q+"b"]=Ye("B"),Xe[q+"i"]=Ye("I"),Xe[q+"u"]=Ye("U"),Xe[q+"shift-7"]=Ye("S"),Xe[q+"shift-5"]=Ye("SUB",{tag:"SUP"}),Xe[q+"shift-6"]=Ye("SUP",{tag:"SUB"}),Xe[q+"shift-8"]=$e("makeUnorderedList"),Xe[q+"shift-9"]=$e("makeOrderedList"),Xe[q+"["]=$e("decreaseQuoteLevel"),Xe[q+"]"]=$e("increaseQuoteLevel"),Xe[q+"y"]=$e("redo"),Xe[q+"z"]=$e("undo"),Xe[q+"shift-z"]=$e("redo"),Se._onKey=function(e){var t=e.keyCode,n=Ge[t],r="",o=this.getSelection();n||(n=String.fromCharCode(t).toLowerCase(),/^[A-Za-z0-9]$/.test(n)||(n="")),Z&&46===e.which&&(n="."),t>111&&124>t&&(n="f"+(t-111)),"backspace"!==n&&"delete"!==n&&(e.altKey&&(r+="alt-"),e.ctrlKey&&(r+="ctrl-"),e.metaKey&&(r+="meta-")),e.shiftKey&&(r+="shift-"),n=r+n,Xe[n]?Xe[n](this,e,o):1!==n.length||o.collapsed||(this._recordUndoState(o),this._getRangeAndRemoveBookmark(o),de(o),this._ensureBottomLine(),this.setSelection(o),this._updatePath(o,!0))},Se._getHTML=function(){return this._body.innerHTML},Se._setHTML=function(e){var t=this._body;t.innerHTML=e;do S(t);while(t=h(t));this._ignoreChange=!0},Se.getHTML=function(e){var t,n,r,o,i,a=[];if(e&&(i=this.getSelection())&&this._saveRangeToBookmark(i),Q)for(t=this._body;t=h(t);)t.textContent||t.querySelector("BR")||(n=this.createElement("BR"),t.appendChild(n),a.push(n));if(r=this._getHTML().replace(/\u200B/g,""),Q)for(o=a.length;o--;)m(a[o]);return i&&this._getRangeAndRemoveBookmark(i),r},Se.setHTML=function(e){var t,n=this._doc.createDocumentFragment(),r=this.createElement("DIV");r.innerHTML=e,n.appendChild(C(r)),Ze(n,!0),Qe(n),_(n);for(var o=n;o=h(o);)S(o);this._ignoreChange=!0;for(var i=this._body;t=i.lastChild;)i.removeChild(t);i.appendChild(n),S(i),this._undoIndex=-1,this._undoStack.length=0,this._undoStackLength=0,this._isInUndoState=!1;var a=this._getRangeAndRemoveBookmark()||this._createRange(i.firstChild,0);

return this._recordUndoState(a),this._getRangeAndRemoveBookmark(a),$?this._lastSelection=a:this.setSelection(a),this._updatePath(a,!0),this},Se.insertElement=function(e,t){if(t||(t=this.getSelection()),t.collapse(!0),s(e))ae(t,e),t.setStartAfter(e);else{for(var n,r,o=this._body,i=ue(t)||o;i!==o&&!i.nextSibling;)i=i.parentNode;i!==o&&(n=i.parentNode,r=y(n,i.nextSibling,o)),r?(o.insertBefore(e,r),t.setStart(r,0),t.setStart(r,0),fe(t)):(o.appendChild(e),o.appendChild(this.createDefaultBlock()),t.setStart(e,0),t.setEnd(e,0)),this.focus(),this.setSelection(t),this._updatePath(t)}return this},Se.insertImage=function(e){var t=this.createElement("IMG",{src:e});return this.insertElement(t),t};var Je=function(e,t,n){return function(){return this[e](t,n),this.focus()}};Se.addStyles=function(e){if(e){var t=this._doc.documentElement.firstChild,n=this.createElement("STYLE",{type:"text/css"});n.styleSheet?(t.appendChild(n),n.styleSheet.cssText=e):(n.appendChild(this._doc.createTextNode(e)),t.appendChild(n))}return this},Se.bold=Je("changeFormat",{tag:"B"}),Se.italic=Je("changeFormat",{tag:"I"}),Se.underline=Je("changeFormat",{tag:"U"}),Se.strikethrough=Je("changeFormat",{tag:"S"}),Se.subscript=Je("changeFormat",{tag:"SUB"},{tag:"SUP"}),Se.superscript=Je("changeFormat",{tag:"SUP"},{tag:"SUB"}),Se.removeBold=Je("changeFormat",null,{tag:"B"}),Se.removeItalic=Je("changeFormat",null,{tag:"I"}),Se.removeUnderline=Je("changeFormat",null,{tag:"U"}),Se.removeStrikethrough=Je("changeFormat",null,{tag:"S"}),Se.removeSubscript=Je("changeFormat",null,{tag:"SUB"}),Se.removeSuperscript=Je("changeFormat",null,{tag:"SUP"}),Se.makeLink=function(e,t){var n=this.getSelection();if(n.collapsed){var r=e.indexOf(":")+1;if(r)for(;"/"===e[r];)r+=1;ae(n,this._doc.createTextNode(e.slice(r)))}return t||(t={}),t.href=e,this.changeFormat({tag:"A",attributes:t},{tag:"A"},n),this.focus()},Se.removeLink=function(){return this.changeFormat(null,{tag:"A"},this.getSelection(),!0),this.focus()},Se.setFontFace=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"font",style:"font-family: "+e+", sans-serif;"}},{tag:"SPAN",attributes:{"class":"font"}}),this.focus()},Se.setFontSize=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"size",style:"font-size: "+("number"==typeof e?e+"px":e)}},{tag:"SPAN",attributes:{"class":"size"}}),this.focus()},Se.setTextColour=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"colour",style:"color: "+e}},{tag:"SPAN",attributes:{"class":"colour"}}),this.focus()},Se.setHighlightColour=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"highlight",style:"background-color: "+e}},{tag:"SPAN",attributes:{"class":"highlight"}}),this.focus()},Se.setTextAlignment=function(e){return this.forEachBlock(function(t){t.className=(t.className.split(/\s+/).filter(function(e){return!/align/.test(e)}).join(" ")+" align-"+e).trim(),t.style.textAlign=e},!0),this.focus()},Se.setTextDirection=function(e){return this.forEachBlock(function(t){t.className=(t.className.split(/\s+/).filter(function(e){return!/dir/.test(e)}).join(" ")+" dir-"+e).trim(),t.dir=e},!0),this.focus()},Se.increaseQuoteLevel=Je("modifyBlocks",be),Se.decreaseQuoteLevel=Je("modifyBlocks",Le),Se.makeUnorderedList=Je("modifyBlocks",Ae),Se.makeOrderedList=Je("modifyBlocks",Re),Se.removeList=Je("modifyBlocks",De),Se.increaseListLevel=Je("modifyBlocks",Ue),Se.decreaseListLevel=Je("modifyBlocks",Ie),top!==F?(F.editor=new b(e),F.onEditorLoad&&(F.onEditorLoad(F.editor),F.onEditorLoad=null)):F.Squire=b}(document);