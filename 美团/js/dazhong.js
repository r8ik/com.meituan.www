// 1 导航 nav
// 导航左边点击效果
$('.nav-left').click(function () {
  $(this).css({
    'backgroundColor': '#ffffff',
    'border-left': ' 1px solid #e3e3e3',
    'border-right': '1px solid #e3e3e3'
  })
  $('#nav-city').show()
})
$('.nav-left').mouseleave(function () {
  $(this).css({
    'backgroundColor': '#f6f6f6',
    'border-left': '1px solid #f6f6f6',
    'border-right': '1px solid #f6f6f6'
  })
  $('#nav-city').hide()
})

// 导航右边点击效果
// console.log($('.nav-right-div ul'))
$('.nav-right-div').mouseover(function () {
  $(this).find('ul').show()
  $(this).addClass('nav-right-div-current').siblings().removeClass('nav-right-div-current')
})
$('.nav-right-div').mouseleave(function () {
  $(this).find('ul').hide()
  $(this).removeClass('nav-right-div-current')

})

// 全部分类效果
// console.log($('.head-bottom-left'))
console.log($('.head-bottom-left-box'))
$('.head-bottom-left').mouseover(function(){
   $('.head-bottom-left-box').show()
})
$('.head-bottom-left').mouseleave(function(){
  $('.head-bottom-left-box').hide()
})
 $('.head-bottom-left-box li').mouseover(function(){
  $(this).find('.head-bottom-li-box').show().siblings('.head-bottom-li-box').hide()
  // console.log($(this))
})
$('.head-bottom-left-box li').mouseleave(function(){
  $(this).find('.head-bottom-li-box').hide()
  // console.log($(this))
})

