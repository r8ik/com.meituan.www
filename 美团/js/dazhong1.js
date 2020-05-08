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

// 轮播图
var config = [
  {
    // width: 224,
    top: 84,
    left: 28,
    // opacity: 1,
    zIndex: 1
  },//0
  {
    // width: 600,
    top: 54,
    left:  28,
    // opacity: 0.8,
    zIndex: 2
  },//1
  {
    // width: 800,
    top: 0,
    left: 140,
    // opacity: 1,
    zIndex: 4
  },//2
  {
    // width: 600,
    top: 54,
    left: 248,
    // opacity: 0.8,
    zIndex: 3
  },//3
  {
    // width: 400,
    top: 84,
    left: 248,
    // opacity: 0.2,
    zIndex: 0
  }//4

];

    // 页面载入事件
    $(function () {
      // 让左右按钮出来
      // $('.slide').on('mouseenter', function () {
      //   $('.arrow').fadeTo(200, 1)
      // })
      // $('.slide').on('mouseleave', function () {
      //   $('.arrow').fadeTo(200, 0)
      // })

      // let flag = true;
      // 1.图片散开
      function assign() {
        $.each($('.center-right li'), function (i, n) {
          // console.log(i, n)
          $(n).animate(config[i])
          console.log(n)
        })
      }
      assign();

      // 点击右边按钮
      $('.next').on('click', function () {
        config.push(config.shift())
        assign();
      })

      $('.prev').on('click', function () {
        config.unshift(config.pop())
        assign();
      })

       

    })

    let timer=setInterval(function(){
      $('.prev').click()
    },1500)