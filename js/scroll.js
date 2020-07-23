//背景制御
$(document).ready(function(){
    $(".0").on("click", function () {
      $(".0").removeClass("active");
      $(".1").removeClass("active");
      $(".2").removeClass("active");
      $(".3").removeClass("active");
      $(".4").removeClass("active");
      $(".5").removeClass("active");
      $(".6").removeClass("active");
      $(".7").removeClass("active");
      $(".8").removeClass("active");
      $(".9").removeClass("active");
      $(".10").removeClass("active");
      $(".0").addClass("active");
    });
  });
  $(document).ready(function(){
    $(".1").on("click", function () {
      $(".0").removeClass("active");
      $(".1").removeClass("active");
      $(".2").removeClass("active");
      $(".3").removeClass("active");
      $(".4").removeClass("active");
      $(".5").removeClass("active");
      $(".6").removeClass("active");
      $(".7").removeClass("active");
      $(".8").removeClass("active");
      $(".9").removeClass("active");
      $(".10").removeClass("active");
      $(".1").addClass("active");
    });
  });
  $(document).ready(function(){
    $(".2").on("click", function () {
      $(".0").removeClass("active");
      $(".1").removeClass("active");
      $(".2").removeClass("active");
      $(".3").removeClass("active");
      $(".4").removeClass("active");
      $(".5").removeClass("active");
      $(".6").removeClass("active");
      $(".7").removeClass("active");
      $(".8").removeClass("active");
      $(".9").removeClass("active");
      $(".10").removeClass("active");
      $(".2").addClass("active");
    });
  });
  $(document).ready(function(){
    $(".3").on("click", function () {
      $(".0").removeClass("active");
      $(".1").removeClass("active");
      $(".2").removeClass("active");
      $(".3").removeClass("active");
      $(".4").removeClass("active");
      $(".5").removeClass("active");
      $(".6").removeClass("active");
      $(".7").removeClass("active");
      $(".8").removeClass("active");
      $(".9").removeClass("active");
      $(".10").removeClass("active");
      $(".3").addClass("active");
    });
  });
  $(document).ready(function(){
    $(".4").on("click", function () {
      $(".0").removeClass("active");
      $(".1").removeClass("active");
      $(".2").removeClass("active");
      $(".3").removeClass("active");
      $(".4").removeClass("active");
      $(".5").removeClass("active");
      $(".6").removeClass("active");
      $(".7").removeClass("active");
      $(".8").removeClass("active");
      $(".9").removeClass("active");
      $(".10").removeClass("active");
      $(".4").addClass("active");
    });
  });
  $(document).ready(function(){
    $(".5").on("click", function () {
      $(".0").removeClass("active");
      $(".1").removeClass("active");
      $(".2").removeClass("active");
      $(".3").removeClass("active");
      $(".4").removeClass("active");
      $(".5").removeClass("active");
      $(".6").removeClass("active");
      $(".7").removeClass("active");
      $(".8").removeClass("active");
      $(".9").removeClass("active");
      $(".10").removeClass("active");
      $(".5").addClass("active");
    });
  });
  $(document).ready(function(){
    $(".6").on("click", function () {
      $(".0").removeClass("active");
      $(".1").removeClass("active");
      $(".2").removeClass("active");
      $(".3").removeClass("active");
      $(".4").removeClass("active");
      $(".5").removeClass("active");
      $(".6").removeClass("active");
      $(".7").removeClass("active");
      $(".8").removeClass("active");
      $(".9").removeClass("active");
      $(".10").removeClass("active");
      $(".6").addClass("active");
    });
  });
  $(document).ready(function(){
    $(".7").on("click", function () {
      $(".0").removeClass("active");
      $(".1").removeClass("active");
      $(".2").removeClass("active");
      $(".3").removeClass("active");
      $(".4").removeClass("active");
      $(".5").removeClass("active");
      $(".6").removeClass("active");
      $(".7").removeClass("active");
      $(".8").removeClass("active");
      $(".9").removeClass("active");
      $(".10").removeClass("active");
      $(".7").addClass("active");
    });
  });
  $(document).ready(function(){
    $(".8").on("click", function () {
      $(".0").removeClass("active");
      $(".1").removeClass("active");
      $(".2").removeClass("active");
      $(".3").removeClass("active");
      $(".4").removeClass("active");
      $(".5").removeClass("active");
      $(".6").removeClass("active");
      $(".7").removeClass("active");
      $(".8").removeClass("active");
      $(".9").removeClass("active");
      $(".10").removeClass("active");
      $(".8").addClass("active");
    });
  });
  $(document).ready(function(){
    $(".9").on("click", function () {
      $(".0").removeClass("active");
      $(".1").removeClass("active");
      $(".2").removeClass("active");
      $(".3").removeClass("active");
      $(".4").removeClass("active");
      $(".5").removeClass("active");
      $(".6").removeClass("active");
      $(".7").removeClass("active");
      $(".8").removeClass("active");
      $(".9").removeClass("active");
      $(".10").removeClass("active");
      $(".9").addClass("active");
    });
  });
  $(document).ready(function(){
    $(".10").on("click", function () {
      $(".0").removeClass("active");
      $(".1").removeClass("active");
      $(".2").removeClass("active");
      $(".3").removeClass("active");
      $(".4").removeClass("active");
      $(".5").removeClass("active");
      $(".6").removeClass("active");
      $(".7").removeClass("active");
      $(".8").removeClass("active");
      $(".9").removeClass("active");
      $(".10").removeClass("active");
      $(".10").addClass("active");
    });
  });
  //スムーススクロール
  $(function(){
    // #で始まるa要素をクリックした場合に処理
    $('a[href^=#]').click(function(){
      // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
      var adjust = 0;
      // スクロールの速度（ミリ秒）
      var speed = 100;
      // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
      var href= $(this).attr("href");
      // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
      var position = target.offset().top + adjust;
      // スムーススクロール linear（等速） or swing（変速）
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });

  document.addEventListener('DOMContentLoaded', function(){
    // タブに対してクリックイベントを適用
    const tabs = document.getElementsByClassName('tab');
    for(let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', tabSwitch);
    }

    // タブをクリックすると実行する関数
    function tabSwitch(){
      // 引数で指定したセレクターと一致する直近の祖先要素を取得
      const ancestorEle = this.closest('.tab-panel');
      // タブのclassの値を変更
      ancestorEle.getElementsByClassName('is-active')[0].classList.remove('is-active');
      this.classList.add('is-active');
      // コンテンツのclassの値を変更
      ancestorEle.getElementsByClassName('is-show')[0].classList.remove('is-show');
      const groupTabs = ancestorEle.getElementsByClassName('tab');
      const arrayTabs = Array.prototype.slice.call(groupTabs);
      const index = arrayTabs.indexOf(this);
      ancestorEle.getElementsByClassName('panel')[index].classList.add('is-show');
    };
  });