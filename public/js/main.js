$('.ui.sidebar')
.sidebar('toggle')
;

$('.search-select')
.dropdown()
;

$('.cover-img')
// fade up out is used if available
.transition({
    animation: 'fade up', 
    duration   : '2s',
})
// this is now fade up in
.transition({
    animation: 'fade up', 
    duration   : '2s',
})
;

setTimeout(() => {
  $('.shape').shape('flip right');
}, 2000);

setTimeout(() => {
  $('.shape').shape('flip right');
}, 4000);

  $('.ui .item').on('click', function() {
      $('.ui .item').removeClass('active');
      $(this).addClass('active');
  });             

