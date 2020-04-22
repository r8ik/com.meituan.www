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
$('.carousel-left>li').on('mouseover', function () {
  let $carouselLeftIndex = $(this).index()
  $('.carousel-left-AllBox').show()
  $('.carousel-left-AllBox').children().hide()
  $('.carousel-left-AllBox').children().stop().fadeOut(0)
  $('.carousel-left-AllBox').children().eq($carouselLeftIndex).stop().fadeIn()
})
$('.carousel-left').on('mouseleave', function () {
  let $carouselLeftIndex = $(this).index()
  $('.carousel-left-AllBox').hide()
  // $('.carousel-left-AllBox').children().hide()
  // $('.carousel-left-AllBox').children().stop().fadeOut(0)
  // $('.carousel-left-AllBox').children().eq($carouselLeftIndex).stop().fadeIn()
})

//  2 轮播图
var $num = 0
$('.carousel-right-top-hotel-right').click(function () {
  $num++
  console.log($('carousel-right-top-hotel-ul>li'))
  if ($num > $('.carousel-right-top-hotel-ul').length) {
    $num = 0

  }
  $('.carousel-right-top-hotel-ul>li').eq($num).stop().fadeIn().siblings('li').stop().fadeOut()

})
//  2 轮播图 登录移动效果
$('.carousel-right-top-login-div').mouseenter(function () {
  console.log($(this));
  $(this).animate(function () {
    'backgroundColor', 'red'
  }, 1000)
})