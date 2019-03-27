$(document).ready(() => {
  $('#cart').on('click', () => {
    $('#cartMenu').show();
  })
  $('#account').on('click', () => {
    $('#accountMenu').show();
  })
  $('#help').on('click', () => {
    $('#helpMenu').show();
  })
  $('.dropdown').on('mouseleave', () => {
		$('.dropdown-menu').hide();
	})

})
