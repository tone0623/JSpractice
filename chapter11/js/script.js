//tab1以外を隠す
$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click',function(event){
  //tabのコンテンツを全て隠す
  $("#tab-contents .tab").hide();
  //activeクラスを外す
  $("#tab-menu .active").removeClass("active");
  //クリックしたクラスにactiveを追加
  $(this).addClass("active");
  //hrefで受け取ったクラスを表示
  $($(this).attr("href")).show();
  event.preventDefault();
});