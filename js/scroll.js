//背景制御
$(document).ready(function () {
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
$(document).ready(function () {
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
$(document).ready(function () {
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
$(document).ready(function () {
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
$(document).ready(function () {
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
$(document).ready(function () {
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
$(document).ready(function () {
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
$(document).ready(function () {
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
$(document).ready(function () {
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
$(document).ready(function () {
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
$(document).ready(function () {
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
$(function () {
  $("a[href^=#]").click(function () {
    var adjust = 0;
    var speed = 100;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top + adjust;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // タブに対してクリックイベントを適用
  const tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", tabSwitch);
  }

  // タブをクリックすると実行する関数
  function tabSwitch() {
    // 引数で指定したセレクターと一致する直近の祖先要素を取得
    const ancestorEle = this.closest(".tab-panel");
    // タブのclassの値を変更
    ancestorEle
      .getElementsByClassName("is-active")[0]
      .classList.remove("is-active");
    this.classList.add("is-active");
    // コンテンツのclassの値を変更
    ancestorEle
      .getElementsByClassName("is-show")[0]
      .classList.remove("is-show");
    const groupTabs = ancestorEle.getElementsByClassName("tab");
    const arrayTabs = Array.prototype.slice.call(groupTabs);
    const index = arrayTabs.indexOf(this);
    ancestorEle.getElementsByClassName("panel")[index].classList.add("is-show");
  }
});

// ハンバーガー
$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $('#head').addClass("active");
    } else {
      $('#head').removeClass("active");
    }
  });
  $('a').click(function () {
    $(".hamburger").toggleClass("active");
    if ($(".hamburger").hasClass("active")) {
      $('#head').addClass("active");
    } else {
      $('#head').removeClass("active");
    }
  });
});