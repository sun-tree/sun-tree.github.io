$(function(){
  var _css_array = [
    "CSS_GOOGLE",
    "CSS_BOOTSTRAP",
    "CSS_FULLPAGE",
    "CSS_FONT",
    "CSS_MAIN"
  ]

  for(var i = 0, ileng = _css_array.length; i < ileng; i++){
    var n = document.getElementById(_css_array[i]);
    n.rel = 'stylesheet';
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
