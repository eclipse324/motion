var PF001 = {
  init: function() {
    // var agent = navigator.userAgent.toLowerCase();
    // if((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1) || agent.indexOf('edge') > -1) {
    //   console.log($(".animateTxt"))
    //   $(".animateTxt").css({ opacity: 1 });
    //   return;
    // }
  },
  scroll: function() {
    var _this = this;
    _this.$animate = _this.$body.find(".sec");

    var sec1,
        sec2,
        sec3,
        sec4,
        sec5,
        sec6,
        sec7,
        sec8;

    var handler = {
      sec1: function SEC1_ANIMATE() {
        if(sec1) return;
        sec1 = true;
        var $container = $(".sec1"), tl = new TimelineMax;
        tl.add([
          TweenMax.to($container.find(".mainImg li:nth-child(1) .bg"), .2, {height: 2000, top:-500, ease: Linear.easeNone}),
          TweenMax.to($container.find(".mainImg li:nth-child(2) .bg"), .4, {height: 2000, top:-500, ease: Linear.easeNone}),
          TweenMax.to($container.find(".mainImg li:nth-child(3) .bg"), .6, {height: 2000, top:-500, ease: Linear.easeNone}),
          TweenMax.to($container.find(".mainImg li:nth-child(5) .bg"), .8, {height: 2000, top:-500, ease: Linear.easeNone}),
          TweenMax.to($container.find(".mainImg li:nth-child(4) .bg"), 1, {height: 2000, top:-500, ease: Linear.easeNone})
        ])
        .to($container.find(".mainImg li .bg2"), .1, {opacity:1})
        .to($container.find(".mainImg li:nth-child(1) img"), 0, {opacity:1, ease: Linear.easeNone})
        .to($container.find(".mainImg li:nth-child(2) img"), 0, {opacity:1, ease: Linear.easeNone})
        .to($container.find(".mainImg li:nth-child(5) img"), 0, {opacity:1, ease: Linear.easeNone})
        .to($container.find(".mainImg li:nth-child(4) img"), 0, {opacity:1, ease: Linear.easeNone})        
        .add([
          TweenMax.to($container.find(".mainImg li:nth-child(1) .bg"), .25, {height: 2000, top:1000, ease: Linear.easeNone}),
          TweenMax.to($container.find(".mainImg li:nth-child(2) .bg"), .25, {height: 2000, top:1000, ease: Linear.easeNone}),
          TweenMax.to($container.find(".mainImg li:nth-child(3) .bg"), .25, {height: 2000, top:1000, ease: Linear.easeNone}),
          TweenMax.to($container.find(".mainImg li:nth-child(5) .bg"), .25, {height: 2000, top:1000, ease: Linear.easeNone}),
          TweenMax.to($container.find(".mainImg li:nth-child(4) .bg"), .25, {height: 2000, top:1000, ease: Linear.easeNone})
        ])               
        .to($container.find(".mainImg li .bg"), 0, {display:'none'})
        .add([
          TweenMax.to($container.find(".mainImg li:nth-child(1) .bg2"), .3, {opacity:0}),
          TweenMax.to($container.find(".mainImg li:nth-child(4) .bg2"), .3, {opacity:0}),
          TweenMax.to($container.find(".mainImg li:nth-child(2) .bg2"), .3, {opacity:0}),
          TweenMax.to($container.find(".mainImg li:nth-child(5) .bg2"), .3, {opacity:0})
        ])
        .to($container.find(".mainImg li:nth-child(3) img"), .1, {opacity:1, ease: Linear.easeNone})                   
        .add([
          TweenMax.to($container.find(".mainImg li:nth-child(3) .bg2"), .1, {opacity:0}),
          TweenMax.to($container.find("h2"), .25, {opacity:1, ease: Linear.easeNone})
        ])
        .to($container.find(".mainImg li:nth-child(3)"), .25, {className:'+=shadowBox'})

      },
      sec2: function SEC2_ANIMATE() {
        if(sec2) return;
        sec2 = true;
        var $container = $(".sec2"), tl = new TimelineMax();
        tl.to($container.find("h3"), .3, { y:0, opacity:1, ease: Linear.easeNone, delay:.5})
            .to($container.find(".per99 span"), .3, { width: '99%', ease: Linear.easeNone})
            .to($container.find(".per65 span"), .4, { width: '65%', delay:.1, ease: Linear.easeNone})
            .to($container.find(".per17 span"), .3, { width: '17%', delay:.1, ease: Linear.easeNone})
            .to($container.find(".per6 span"), .2, { width: '6%', delay:.1, ease: Linear.easeNone})
      },
      sec3: function SEC3_ANIMATE() {
        if(sec3) return;
        sec3 = true;
        var $container = $(".sec3"), tl = new TimelineMax();
        tl.to($container.find("p"), .3, { y:0, opacity:1, ease: Linear.easeNone, delay:0.8})
        .to($container.find("ul li:nth-child(3)"), .2, { y:0, opacity:1, ease: Linear.easeNone,})
        .add([
          TweenMax.to($container.find("ul li:nth-child(2)"), .3, { x:0, opacity:1, ease: Linear.easeNone, delay:0.3}),
          TweenMax.to($container.find("ul li:nth-child(4)"), .3, { x:0, opacity:1, ease: Linear.easeNone, delay:0.3})       
        ])
        .add([
          TweenMax.to($container.find("ul li:nth-child(1)"), .4, { x:0, opacity:1, ease: Linear.easeNone}),
          TweenMax.to($container.find("ul li:nth-child(5)"), .4, { x:0, opacity:1, ease: Linear.easeNone})
        ])
        
      },
      sec4: function SEC4_ANIMATE() { 
        if(sec4) return;
        sec4 = true;
        var $container = $(".sec4"), tl = new TimelineMax();
        tl.to($container.find(".keyPoint"), .3, { y:0, opacity:1, ease: Linear.easeNone, delay:.5})
        .to($container.find("h3"), .3, { y:0, opacity:1, ease: Linear.easeNone})
        .to($container.find("p"), .3, { y:0, opacity:1, ease: Linear.easeNone})
      },
      sec5: function SEC5_ANIMATE() {
        if(sec5) return;
        sec5 = true;
        var $container = $(".sec5"), tl = new TimelineMax();
        tl.to($container.find("h3"), .3, { y:0, opacity:1, ease: Linear.easeNone, delay:.5})
        .to($container.find("p"), .3, { y:0, opacity:1, ease: Linear.easeNone})
        .to($container.find(".sec5Right"), .3, { y:0, opacity:1, ease: Linear.easeNone})
      },
      sec6: function SEC6_ANIMATE() {
        if(sec6) return;
        sec6 = true;
        var $container = $(".sec6"), tl = new TimelineMax();
        tl.to($container.find("ul li:nth-child(1) img:nth-child(1)"), .3, { y:0, opacity:1, ease: Linear.easeNone})
        .to($container.find("ul li:nth-child(2) img:nth-child(1),ul li:nth-child(1) img:nth-child(2)"), .3, { y:0, opacity:1, ease: Linear.easeNone})
        .add([
          TweenMax.to($container.find("h3"), .3, { y:0, opacity:1, ease: Linear.easeNone}),
          TweenMax.to($container.find("p"), .3, { y:0, opacity:1, ease: Linear.easeNone}),
          TweenMax.to($container.find("ul li:nth-child(2) img:nth-child(2)"), .3, { y:0, opacity:1, ease: Linear.easeNone})
        ])        
        .to($container.find("ul li:nth-child(3) img"), .3, { y:0, opacity:1, ease: Linear.easeNone})
        
        
      },
      sec7: function SEC7_ANIMATE() {
        if(sec7) return;
        sec7 = true;
        var $container = $(".sec7"), tl = new TimelineMax();
        tl.to($container.find("h3"), .3, { y:0, opacity:1, ease: Linear.easeNone})
        .to($container.find("p"), .3, { y:0, opacity:1, ease: Linear.easeNone})
        TweenMax.to($container.find(".iconBox li:nth-child(1) img"), 1, { ease: Power1.easeOut, y:25, yoyo: true, repeat:-1})
        TweenMax.to($container.find(".iconBox li:nth-child(2) img"), 0.8, { ease: Power1.easeOut, y:20, yoyo: true, repeat:-1})
        TweenMax.to($container.find(".iconBox li:nth-child(3) img"), 0.9, { ease: Power1.easeOut, y:20, yoyo: true, repeat:-1})
        TweenMax.to($container.find(".iconBox li:nth-child(4) img"), 1.2, { ease: Power1.easeOut, y:20, yoyo: true, repeat:-1})
      },
      sec8: function SEC8_ANIMATE() {
        if(sec8) return;
        sec8 = true;
      }
    }

    $(window).on("scroll", function(){
      var viewTop = $(this).scrollTop(),
          viewHeight = $(this).outerHeight(true),
          viewBottom = viewTop + viewHeight;

      _this.$animate.each(function(){
        var elementTop = $(this).offset().top,
            elementHeight = $(this).outerHeight(),
            elementBottom = elementTop + elementHeight;

        if(viewTop < elementBottom && viewBottom > elementTop) {
          var id = $(this).attr("id");
          handler[id]();
//          console.log( handler[id]);
        }
      })
    }).trigger("scroll");
  }
}
var motion = {
  parallex :function parallex(){
    $('#sec4 ul li').each(function(){
    var $this = $(this);
    $(window).scroll(function(){
        var height = $('#sec4 div').height();
        var max = $this.data('max');
        var thisPos = $('.sec3 ul').offset().top;
        var maxPos = thisPos + height;
        var nowHeight = $(window).scrollTop();
        var scrollSpeed = $this.data('speed');

        if(nowHeight > thisPos && nowHeight <= maxPos){
          var tPerc = ((nowHeight-thisPos) / (maxPos-thisPos)) * 100;
          var nowheig = max * (tPerc / 100) * (scrollSpeed / 10);        
        }
        if(max < nowheig){
          nowheig = max
        }
        var posi = nowheig+'px';
        $this.css({bottom: posi})
    })
  })
  }
}

$(function(){
  PF001.$body = $("body");
  PF001.init();
  PF001.scroll();
  motion.parallex();


  $('.sec8 button').click(function(){
    $('.sec8 div div').hide();
    $('.sec8 div').html('<iframe src="https://player.vimeo.com/video/367702088?autoplay=1&amp;muted=1&amp;color=e3000f&amp;title=0&amp;byline=0&amp;portrait=0" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" style="position:absolute; width: 100%; height: 100%;" allow="fullscreen"></iframe>')
  })
})