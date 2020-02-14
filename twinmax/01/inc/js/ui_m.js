var $container = $("#mainBnr"), tl = new TimelineMax;
tl.to($container.find(".layer01"), .4, {opacity:1, top:0})
  .to($container.find(".layer02"), .4, {opacity:1, top:0, scale:1})
  .to($container.find(".layer03"), .4, {opacity:1, top:0, scale:1})
  .to($container.find(".layer04"), .4, {opacity:1, top:0, scale:1})
  .to($container.find(".layer05"), .4, {opacity:1, top:0, scale:1})
  .to($container.find(".layer06"), .3, {opacity:1, top:0, scale:1})

var $aviPlay = $('.aviPlay'),
    $aviArea = $('.aviArea');

$aviPlay.on('click', function(){
  $aviArea.show().html('<iframe src="https://player.vimeo.com/video/367702088?autoplay=1&amp;muted=1&amp;color=e3000f&amp;title=0&amp;byline=0&amp;portrait=0" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" style="position:absolute; width: 100%; height: 100%;" allow="fullscreen"></iframe>')
})