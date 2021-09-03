$(function(){
  //#back内のaタグがクリックされた時の処理
  $("#back a").on('click', function(event){
    //body,htmlを変化
    $('body, html').animate({
      //最上部に移動
      scrollTop:0
      //アニメーションの動作時間(800ミリ秒)
    }, 1200);
    //aタグの遷移機能を無効化
    event.preventDefault();
  });
});