(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(A,n,i){"use strict";i.d(n,"b",(function(){return u})),i.d(n,"c",(function(){return c})),i.d(n,"a",(function(){return o})),i.d(n,"d",(function(){return I}));var e=i(7),t=i.n(e),r=(i(36),i(4));t.a.initializeApp(r.a);var a=t.a.database().ref(),u=a.child("freeTime"),c=a.child("length"),o=a.child("connect"),I=a.child("percent")},17:function(A,n,i){var e=i(18),t=i(19);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[A.i,t,""]]);var r={insert:"head",singleton:!1};e(t,r);A.exports=t.locals||{}},19:function(A,n,i){var e=i(20),t=i(31),r=i(21),a=i(22),u=i(23),c=i(24);n=e(!1);var o=t(r),I=t(a),d=t(u),l=t(c);n.push([A.i,"/* html {\n    padding: 20px;\n} */\n\n#mainpage, #menupage {\n    padding: 20px;\n}\n\n#menupage {\n    height: 100%;\n    display:flex;\n    align-items: center;\n}\n\n#menupage_c {\n    height: 100%;\n    align-items: center;\n}\n\n#menuinner {\n    width:100%;\n}\n\n/* #menuinner button {\n    margin-top: 30px;\n    margin-bottom: 30px;\n} */\n\na {\n    text-decoration:none;\n    color: inherit;\n}\n\n.img {\n    height: 200px;\n    padding-left: 5px;\n    padding-right: 5px;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center center;\n}\n\n.text{\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n\n@media (orientation: portrait), (max-width:400px) { \n    .text{\n        padding-top: 10px;\n        padding-bottom: 10px;\n    }\n}\n\n#footer {\n    margin-top: 30px;\n    font-size: 12px;\n}\n\n#img1 {\n    background-image: url("+o+");\n}\n#img2 {\n    background-image: url("+I+");\n}\n#img3 {\n    background-image: url("+d+");\n}\n#img4 {\n    background-image: url("+l+");\n}\n/* #img5 {\n    background-image: url(./img/icon-05.png);\n} */\n\n#loadOverlay{display: none;}",""]),A.exports=n},21:function(A,n,i){"use strict";i.r(n),n.default="data:image/png;base64,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"},22:function(A,n,i){"use strict";i.r(n),n.default="data:image/png;base64,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"},23:function(A,n,i){"use strict";i.r(n),n.default="data:image/png;base64,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"},24:function(A,n,i){"use strict";i.r(n),n.default="data:image/png;base64,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"},4:function(A,n,i){"use strict";i.d(n,"a",(function(){return e})),i.d(n,"b",(function(){return t}));var e={apiKey:"AIzaSyBmbwMxJPpkqAKkD9a9SE4wsAQoB68Fz-0",authDomain:"audio-server-zonesound.firebaseapp.com",databaseURL:"https://audio-server-zonesound.firebaseio.com",projectId:"audio-server-zonesound",storageBucket:"audio-server-zonesound.appspot.com",messagingSenderId:"413266833254",appId:"1:413266833254:web:1591be5bb0f8b54647a2a7",measurementId:"G-QRDPJ3BL63"},t="https://osc-server.herokuapp.com/"},45:function(A,n){},8:function(A,n,i){"use strict";n.a=i.p+"empty.wav"},93:function(A,n,i){var e=i(18),t=i(94);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[A.i,t,""]]);var r={insert:"head",singleton:!1};e(t,r);A.exports=t.locals||{}},94:function(A,n,i){(n=i(20)(!1)).push([A.i,"html, body {\n    width: 100%;\n    height: 100%;\n}\n\n#loading {\n    height: 100%;\n    position:relative;\n}\n\n#loading-content {\n    position:absolute;\n    top:0; \n    left:0; \n    bottom:0; \n    right:0;\n    margin: auto;\n    overflow: auto;\n    width: 80px;\n    height: 100px;\n    color: black;\n    font-size: 13px;\n    text-align: center;\n}\n\n.loader {\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    display: inline-block;\n    box-sizing: border-box;\n    animation: animloader 1s linear infinite;\n    vertical-align: center;   \n    margin-bottom: 10px; \n}\n  \n  @keyframes animloader {\n    0% {\n      box-shadow: -72px 0 black inset;\n    }\n    100% {\n      box-shadow: 48px 0 black inset;\n    }\n  }\n      ",""]),A.exports=n},97:function(A,n,i){"use strict";i.r(n);i(93),i(17);var e,t=i(15),r=i.n(t),a=i(0),u=i.n(a),c=i(2),o=i.n(c),I=i(1),d=i(8),l=i.p+"chA.mp3",X=i(16),x=i.n(X),s=i(4),p=["中文 A","中文 B","中文 C","台語 A","台語 C","英文 B"],F=x()(s.b),f=!1,y=new r.a(".step",1,3,{2:function(){J=!0,k()}}),h=!0,v={},b={},z=0,M=0,J=!1,m=new o.a(d.a,(function(){console.log("loaded")})),L=new o.a(l,(function(){console.log("yo",L.duration,L.loaded),e.setMax(L.duration),M++,J&&k(),console.log(L.player.buffer)}));function k(){f&&0!=M&&(J=!1,y.showNext())}(e=new c.PlayerUI("player","menuinner",null,{songname:"test",second:!0,range:!0,usePlay:!1,callback:function(A){if(console.log("changeState",A),"play"==A.state)F.emit("play",{time:A.now});else if("pause"==A.state)F.emit("pause",{time:A.now});else{if(h)return void(h=!1);console.log("restart"),y.showPrev(),y.showPrev()}}})).inactiveStart(),u()("#start").click((function(){y.showNext(),console.log("start: loaded?",m.loaded),m.loaded&&m.play(),F.emit("ask",{})}));var E=!0;function g(A,n,i){A.child(n).transaction((function(A){return i}))}I.d.on("value",(function(A){var n="<br><h5>比例</h5>";if(A.forEach((function(A){0!=A.key&&(v[A.key]=parseFloat(A.val()),E?n+='\n            <label for="percent-'.concat(A.key,'" style="margin-right: 20px;">').concat(p[parseInt(A.key)-1],'</label>\n            <input type="number" id="percent-').concat(A.key,'" value=').concat(parseFloat(A.val()),' step="0.01" min="0" max="1"></input><br>'):u()("#percent-"+A.key).val(parseFloat(A.val())))})),E){u()("#percent").html(n);var i=function(A){u()("#percent-"+A).on("change",(function(){console.log(A,u()(this).val()),g(I.d,A,u()(this).val())})),E=!1};for(var e in v)i(e)}})),I.a.on("value",(function(A){z=0,A.forEach((function(A){0!=A.key&&(b[A.key]=parseInt(A.val())-1,z+=parseInt(A.val())-1)})),function(){var A="<h5>共 ".concat(z," 人連線</h5>");for(var n in b)A+='\n        <span for="connect-'.concat(n,'" style="margin-right: 20px;">').concat(p[parseInt(n)-1],': </label>\n        <span id="connect-').concat(n,'">').concat(b[n],'人</input>\n        <span style="margin-left:10px;">(').concat(0==z?z:100*b[n]/z,"%)</span>\n        <br>");u()("#connect").html(A)}()})),u()("#resetConnect").click((function(){for(var A in g(I.a,0,1),b)console.log("reset",A),b[A]=0,g(I.a,A,1)})),F.on("connect",(function(A){console.log("connect!"),f=!0,J&&k(),F.on("play",(function(A){console.log("play",A),L.play(parseInt(A.time)),e.activeStart(),e.play(parseFloat(A.time))})),F.on("pause",(function(A){console.log("pause"),e.activeStart(),L.pause(),e.pause()}))}))}},[[97,0,1]]]);