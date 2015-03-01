$(function(){
  $('#fullpage').fullpage({
    sectionsColor: ['#ffffff', '#ffffff', '#ffffff'],
    anchors: ['home', 'about', 'contact'],
    menu: '#menu',
    continuousVertical: false,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About', 'Contact']
  });
})
