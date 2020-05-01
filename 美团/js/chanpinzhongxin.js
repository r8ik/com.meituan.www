// 获取导航2 navi 距离页面顶部的距离吧
let naviTop = $('.navi').offset().top
console.log(naviTop)

$(window).scroll(function () {
  if (document.documentElement.scrollTop >= naviTop) {
    $('.navi').css({
      'position': 'fixed',
      'top': '100px',
      'left': 0
    })
  } else {
    $('.navi').css({
      'position': 'static',
    })
  }
})
$('#dian').click(function () {
  document.documentElement.scrollTop = 700
})
$('#miao').click(function () {
  document.documentElement.scrollTop = 1658
})
$('#kai').click(function () {
  document.documentElement.scrollTop = 2609
})
$('#pai').click(function () {
  document.documentElement.scrollTop = 3573
})