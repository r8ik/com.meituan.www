$('#input').on('focus', function () {
  $('.head-center-hot').css({
    'display': 'block'
  })
  $('#input').on('blur', function () {
    $('.head-center-hot').css({
      'display': 'none'
    })
  })
})

// 2 轮播部分 carousel li里面的盒子 显示隐藏
// console.log($('.carousel-left-box'))
// console.log($('.carousel-left-li'))

$('.carousel-left-li').on('mouseover', function () {
  $(this).find('.carousel-left-box').show().siblings('.carousel-left-box').hide()
})
$('.carousel-left-li').on('mouseleave', function () {
  $(this).find('.carousel-left-box').hide()
})
// $('.carousel-left').on('mouseleave', function () {
//   let $carouselLeftIndex = $(this).index()
//   $('.carousel-left-AllBox').hide()
//   // $('.carousel-left-AllBox').children().hide()
//   // $('.carousel-left-AllBox').children().stop().fadeOut(0)
//   // $('.carousel-left-AllBox').children().eq($carouselLeftIndex).stop().fadeIn()
// })

//  2 轮播图
// var $num = 0
// $('.carousel-right-top-hotel-right').click(function () {
//   $num++
//   console.log($('carousel-right-top-hotel-ul>li'))
//   if ($num > $('.carousel-right-top-hotel-ul').length) {
//     $num = 0

//   }
//   $('.carousel-right-top-hotel-ul>li').eq($num).stop().fadeIn().siblings('li').stop().fadeOut()

// })
// //  2 轮播图 登录移动效果
// $('.carousel-right-top-login-div').mouseenter(function () {
//   console.log($(this));
//   $(this).animate(function () {
//     'backgroundColor', 'red'
//   }, 1000)
// })

var $num = 0

$('.carousel-right-top-hotel-ul li').eq(0).stop().fadeIn()
//获取右箭头，添加事件
$('.carousel-right-top-hotel-right').on('click', function () {
  // 切换下一张
  $num++;
  // 进行判断是不是最后一张
  if ($num == $('.carousel-right-top-hotel-ul li').length) {
    $num = 0;
  }
  $('.carousel-right-top-hotel-ul li').eq($num).stop().fadeIn().siblings().stop().fadeOut()
  //小圆点跟着切换
  $('.carousel-right-top-hotel-circle li').eq($num).addClass("current").siblings().removeClass('current')

})


// :点击左箭头，切换上一张图片，同时下面的小圆点也在跟着切换加类名
$('.carousel-right-top-hotel-left').on('click', function () {
  // 5.1 $num--；
  $num--;
  // 判断
  if ($num < 0) {
    $num = $('.carousel-right-top-hotel-ul li').length - 1;
  }
  //切换上一张图片
  $('.carousel-right-top-hotel-ul li').eq($num).stop().fadeIn().siblings().stop().fadeOut()
  //下面的小圆点也在跟着切换加类名
  $('.carousel-right-top-hotel-circle li').eq($num).addClass("current").siblings().removeClass('current')

})



// 自动轮播
var timer = setInterval(function () {
  $('.carousel-right-top-hotel-right').click()
}, 2000)

// 移动到slider上面定时器删除
$('.carousel-right-top-hotel').on('mouseenter', function () {
  // 移除定时器
  clearInterval(timer)
  // 显示
  $('.carousel-right-top-hotel-left').show();
  $('.carousel-right-top-hotel-right').show();

})
$('.carousel-right-top-hotel').on('mouseleave', function () {
  timer = setInterval(function () {
    $('.arrow-right').click()
  }, 2000)
  // 隐藏
  $('.carousel-right-top-hotel-left').hide();
  $('.carousel-right-top-hotel-right').hide();

})



// 民宿部分
console.log($('.homestay-title-left h4'))
$('.homestay-title-left h4').mouseover(function () {
  // console.log($(this).index())
  $(this).find('i').show()
  console.log($(this).find('i'))
  $(this).siblings('h4').find('i').hide()
  $('.homestay-bottom ul').eq($(this).index() - 1).show().siblings('ul').hide()
})



// 电影部分
// console.log()
console.log($('#right'))
$('#left').click(function () {
  $('.movie-bottom-ul').css({
    // 'position':'absolute',
    'margin-left': 0,
    'transition': '1.5s'

  })
})
$('#right').click(function () {
  $('.movie-bottom-ul').css({
    // 'position':'absolute',
    'margin-left': '-1162px',
    'transition': '1.5s'
  })
})


$('.movie-bottom').mouseover(function () {
  $('.movie-left').show()
  $('.movie-right').show()

})
$('.movie-bottom').mouseleave(function () {
  $('.movie-left').hide()
  $('.movie-right').hide()
})