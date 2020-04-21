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