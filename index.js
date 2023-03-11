$(function(){
  $(window).scroll(function(){
    $(".flex__box__img").each(function(){
      active(this);
    })
    $(".flex__title").each(function(){
      active(this);
    })
  })
})

function active(className){
  //imgの位置を取得
  const position = $(className).offset().top;
  //スクロールの量を取得
  const scroll = $(window).scrollTop();
  //windowの高さを取得
  const windowHeight = $(window).height();
  if(scroll > position - windowHeight + 300 && scroll > position - windowHeight + 500){
    $(className).addClass("active");
  }else{
    $(className).removeClass("active");
  }
}