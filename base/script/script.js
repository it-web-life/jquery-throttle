$(function() {
  // トップへ戻るボタンの表示制御
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.backToTop').fadeIn();
    } else{
      $('.backToTop').fadeOut();
    }
  });

  // トップへ戻るボタンのクリック
  $('.backToTop').on('click', function() {
    $('body,html').animate({
      scrollTop:0
    },500);
    return false;
  });
});
