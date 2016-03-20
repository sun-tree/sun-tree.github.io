$(function(){
  var _css_array = [
    "CSS_GOOGLE",
    "CSS_BOOTSTRAP",
    "CSS_FULLPAGE",
    "CSS_FONT",
    "CSS_MAIN"
  ];

  var _link_array = [
    "//fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,300",
    "//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
    "//cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.5.9/jquery.fullPage.min.css",
    "/css/style.css",
    "/css/main.css"
  ];

  for(var i = 0, ileng = _link_array.length; i < ileng; i++){
    var n = document.createElement('link');
    n.async = true;
    n.defer = true;
    n.type = 'text/css';
    n.rel  = 'stylesheet';
    n.href = _link_array[i];
    var s = document.getElementsByTagName('script');
    var c = s[s.length - 1];
    c.parentNode.insertBefore(n, c);
  }


  $('#fullpage').fullpage({
    sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff'],
    anchors: ['home', 'about', 'works', 'contact'],
    menu: '#menu',
    continuousVertical: false,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About', 'works', 'Contact']
  });
})
