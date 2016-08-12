function setup(){
window.fbAsyncInit = function() {
  FB.init({
    appId      : '511216629071889', //Replace your-app-id with actual app-id
    xfbml      : true,
    version    : 'v2.7'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
}

function shareButton(){
  document.getElementById('shareBtn').onclick = function() {
    FB.ui(
      {
        method: 'share',
        display: 'popup',
        href: 'https://developers.facebook.com/docs/',
      }, function(response){}
    );
  }
}

function getAccessToken(){
FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    var accessToken = response.authResponse.accessToken;
  } 
} );
}

setup()