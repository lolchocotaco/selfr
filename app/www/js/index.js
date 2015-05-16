var server_url = "camera";


function readyme () {
console.log('this doesnt work')
}
//
// var app = {
//     initialize: function() {
//       this.bindEvents();
//     },
//
//     bindEvents: function() {
//       document.addEventListener('deviceready', this.onDeviceReady, false);
//     },
//
//     onDeviceReady: function() {
//       navigator.notification.alert(
//           'readt!',  // message
//           alertDismissed,         // callback
//           'Game read',            // title
//           'readt'                  // buttonName
//       );
//
//       console.log('DeviceIsready');
//
//       // $("#loginForm").on("submit",function(e) {
//       //   console.log('CLicked');
//       //
//       //   $("#submitButton", this).attr("disabled","disabled");
//       //
//       //   var u = $("#username", this).val(),
//       //     p = $("#password", this).val();
//       //
//       //   if (u !== '' && p!== '') {
//       //     console.log('posting');
//       //     $.post(server_url, {
//       //       username : u,
//       //       password : p
//       //     }, function (res) {
//       //       console.log('posted');
//       //       res = true;
//       //       if (res === true) {
//       //         // $.mobile.changePage("camera.html");
//       //         $.mobile.changePage("camera.html",{allowSamePageTransition:true,reloadPage:false,changeHash:true,transition:"slide"});
//       //       } else {
//       //         navigator.notification.alert("Your login failed", function() {});
//       //       }
//       //       $("#submitButton").removeAttr("disabled");
//       //       }, "json");
//       //     }
//       //   return false;
//       // });
//     }
// };
