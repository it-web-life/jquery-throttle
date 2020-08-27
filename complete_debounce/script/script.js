$(function() {
  // トップへ戻るボタン
  $(window).scroll(
    $.debounce(250, function() {
      if ($(this).scrollTop() > 100) {
        $('.backToTop').fadeIn();
      } else {
        $('.backToTop').fadeOut();
      }
    })
  );

  // トップへ戻るボタンのクリック
  $('.backToTop').on('click', function() {
    $('body,html').animate({
      scrollTop:0
    },500);
    return false;
  });
});
