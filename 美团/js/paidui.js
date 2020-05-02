//  3 下载 down
// 免费试用效果
// 获取 里面所有li
// console.log($(' .down li'))

// 免费试用按键
// console.log($(".map-free"))

$(".map-free").click(function () {
  $('.down i').fadeToggle(200)
  $('.down').slideToggle(500)
})
$(' .down li').hover(function () {
  $(this).animate({
    'margin-top': '12px'
  }, 200)
}, function () {
  $(this).animate({
    'margin-top': '25px'
  }, 200)
})

// 硬件下面的盒子
console.log($('.ying-li'))
$('.ying-li').mouseenter(function () {
  $(this).find('i').css({

    'background': '#06c1ae'
  })
  $(this).siblings().find('i').css({
    'background': 'transparent'
  })
  let index=$(this).index()
  // console.log($(this).index())
  // console.log($('.ying-box'))
  $('.ying-box').eq(index).addClass('active')
  $('.ying-box').eq(index).siblings().removeClass('active')
})