$(function(){
    //メイン画像カルーセル
 $('.carousel').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    fade: true,
    pauseOnHover: false
  });
  
  // リンクのホバー時に不透明度をアニメーションで変更する
  $('a, .item img').hover(
    function () {
      $(this).animate({ 'opacity': 0.6 }, 300);
    },
    function () {
      $(this).animate({ 'opacity': 1.0 }, 300);
    }
  );

  // 100pxを境にTOPに戻るボタンの表示・非表示を切り替える  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#top-button').fadeIn();   //#top-button
    } else {
      $('#top-button').fadeOut();   //#top-button
    }
  });

  // ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    return false;
  });

  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('.works img').click(function () {
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');
    $('.modal-img').attr({   // .modal-img
      src: imgSrc,
      alt: imgAlt,
    });
    $('.modal').fadeIn();
  });

  // 閉じるボタンをクリックしたときにモーダルを閉じる
  $('.close').click(function () {  // .close
    $('.modal').fadeOut();
  });
});
