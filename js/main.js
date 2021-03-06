//chart.js
//myChart0 インターネット普及率
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart0").getContext("2d");
ctx.canvas.height = 280;
var myChart0 = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["平成28年", "平成29年", "平成30年", "令和元年", "令和2年"],
    datasets: [
      {
        data: [83.5, 80.9, 79.8, 89.8, 97.2],
        backgroundColor: [
          "#ADD9C3",
          "#43BACC",
          "#0086BF",
          "#4051B3",
          "#111766",
        ],
        borderColor: [
          "#ADD9C3",
          "#43BACC",
          "#0086BF",
          "#4051B3",
          "#111766",
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return (
            data.labels[tooltipItem.index] +
            ": " +
            data.datasets[0].data[tooltipItem.index] +
            " %"
          );
        },
      },
    },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10,
      },
    },
    legend: {
      display: false,
      position: "bottom",
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: "#000",
        padding: 10,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 13,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0.05)",
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 12,
          },
          gridLines: {
            display: false,
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
      ],
    },
    animation: {
      duration: 2000,
    },
  },
});

//myChart1 年齢層別インターネット普及率
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart1").getContext("2d");
ctx.canvas.height = 280;
var myChart1 = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "全体",
      "6~12歳",
      "13~19",
      "20~29",
      "30~39",
      "40~49",
      "50~59",
      "60~69",
      "70~79",
      "80歳以上",
    ],
    datasets: [
      {
        label: "平成28年",
        data: [83.5, 82.6, 98.4, 99.2, 97.5, 96.7, 93.0, 75.7, 53.6, 23.4],
        backgroundColor: [
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
        ],
        borderColor: [
          "#ADD9C3"
        ],
        borderWidth: 2,
      },
      {
        label: "平成29年",
        data: [80.9, 73.6, 96.9, 98.7, 97.8, 96.8, 92.4, 73.9, 46.7, 20.1],
        backgroundColor: [
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
        ],
        borderColor: [
          "#43BACC"
        ],
        borderWidth: 2,
      },
      {
        label: "平成30年",
        data: [79.8, 67.1, 96.6, 98.7, 97.9, 96.7, 93.0, 76.6, 51.0, 21.5],
        backgroundColor: [
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
        ],
        borderColor: [
          "#0086BF"
        ],
        borderWidth: 2,
      },
      {
        label: "令和元年",
        data: [89.8, 80.2, 98.4, 99.1, 99.0, 98.3, 97.7, 90.5, 74.2, 57.5],
        backgroundColor: [
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
        ],
        borderColor: [
          "#4051B3"
        ],
        borderWidth: 2,
      },
      {
        label: "令和2年",
        data: [85.5, 85.6, 98.4, 99.2, 99.5, 98.7, 98.0, 93.7, 76.6, 63.4],
        backgroundColor: [
          "#111766",
          "#111766",
          "#111766",
          "#111766",
          "#111766",
          "#111766",
          "#111766",
          "#111766",
          "#111766",
          "#111766",
        ],
        borderColor: [
          "#111766"
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10,
      },
    },
    legend: {
      position: "bottom",
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: "#000",
        padding: 10,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 13,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0.05)",
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 11,
          },
          gridLines: {
            display: false,
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
      ],
    },
    animation: {
      duration: 2000,
    },
  },
});

//chart.js
//myChart2　所得層別インターネット普及率
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart2").getContext("2d");
ctx.canvas.height = 280;
var myChart2 = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "~200万円",
      "200~400",
      "400~600",
      "600~800",
      "800~1000",
      "1000万円~",
    ],
    datasets: [
      {
        label: "平成28年",
        data: [52.2, 70.1, 81.5, 87.1, 89.5, 90.9],
        backgroundColor: [
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
        ],
        borderColor: [
          "#ADD9C3"
        ],
        borderWidth: 2,
      },
      {
        label: "平成29年",
        data: [54.2, 74.1, 85.5, 89.1, 90.5, 91.9],
        backgroundColor: [
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
        ],
        borderColor: [
          "#43BACC"
        ],
        borderWidth: 2,
      },
      {
        label: "平成30年",
        data: [54.4, 70.6, 83.9, 87.8, 89.7, 90.3],
        backgroundColor: [
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
        ],
        borderColor: [
          "#0086BF"
        ],
        borderWidth: 2,
      },
      {
        label: "令和元年",
        data: [80.7, 86.5, 90.8, 92.7, 93.4, 94.5],
        backgroundColor: [
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
        ],
        borderColor: [
          "#4051B3"
        ],
        borderWidth: 2,
      },
      {
        label: "令和2年",
        data: [85.7, 89.5, 95.8, 95.7, 95.4, 96.5],
        backgroundColor: [
          "#111766",
          "#111766",
          "#111766",
          "#111766",
          "#111766",
          "#111766",
          "#111766",
          "#111766",
          "#111766",
          "#111766",
        ],
        borderColor: [
          "#111766"
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10,
      },
    },
    legend: {
      position: "bottom",
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 11,
        fontColor: "#000",
        padding: 10,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 13,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0.05)",
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 11,
          },
          gridLines: {
            display: false,
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
      ],
    },
    animation: {
      duration: 2000,
    },
  },
});

//chart.js
//myChart3
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart3").getContext("2d");
ctx.canvas.height = 280;
var myChart3 = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: ["スマートフォン", "パソコン", "タブレット型端末", "携帯電話・PHS"],
    datasets: [
      {
        label: "平成28年",
        data: [57.9, 58.6, 23.6, 13.3],
        backgroundColor: ["#ADD9C3", "#ADD9C3", "#ADD9C3", "#ADD9C3"],
        borderColor: ["#ADD9C3"],
        borderWidth: 2,
      },
      {
        label: "平成29年",
        data: [59.7, 52.5, 20.9, 9.9],
        backgroundColor: ["#43BACC", "#43BACC", "#43BACC", "#43BACC"],
        borderColor: ["#43BACC"],
        borderWidth: 2,
      },
      {
        label: "平成30年",
        data: [59.5, 48.2, 20.8, 8.8],
        backgroundColor: ["#0086BF", "#0086BF", "#0086BF", "#0086BF"],
        borderColor: ["#0086BF"],
        borderWidth: 2,
      },
      {
        label: "令和元年",
        data: [63.3, 50.4, 23.2, 10.5],
        backgroundColor: ["#4051B3", "#4051B3", "#4051B3", "#4051B3"],
        borderColor: ["#4051B3"],
        borderWidth: 2,
      },
      {
        label: "令和2年",
        data: [70.3, 60.4, 33.2, 15.5],
        backgroundColor: ["#111766", "#111766", "#111766", "#111766"],
        borderColor: ["#111766"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 30,
      },
    },
    legend: {
      position: "bottom",
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 11,
        fontColor: "#000",
        padding: 5,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 10,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0.05)",
            display: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 13,
            min: 0,
            max: 100,
          },
          gridLines: {
            display: true,
            borderDash: [6, 4],
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
      ],
    },
    animation: {
      duration: 2000,
    },
  },
});

//chart.js
//myChart4 通信機器の世帯保有状況
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart4").getContext("2d");
ctx.canvas.height = 280;
var myChart4 = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "平成23年",
      "24年",
      "25年",
      "26年",
      "27年",
      "28年",
      "29年",
      "30年",
      "令和元年",
      "2年",
    ],
    datasets: [
      {
        label: "固定電話",
        data: [83.8, 79.3, 79.1, 75.7, 75.6, 72.2, 70.6, 64.5, 69.0, 71.5],
        backgroundColor: [
          "#DEA832",
          "#DEA832",
          "#DEA832",
          "#DEA832",
          "#DEA832",
          "#DEA832",
          "#DEA832",
          "#DEA832",
          "#DEA832",
          "#DEA832",
        ],
        borderColor: ["#DEA832"],
        borderWidth: 2,
      },
      {
        label: "パソコン",
        data: [77.4, 75.8, 81.7, 78.0, 76.8, 73.0, 72.5, 74.0, 69.1, 79.3],
        backgroundColor: [
          "#C8D947",
          "#C8D947",
          "#C8D947",
          "#C8D947",
          "#C8D947",
          "#C8D947",
          "#C8D947",
          "#C8D947",
          "#C8D947",
          "#C8D947",
        ],
        borderColor: ["#C8D947"],
        borderWidth: 2,
      },
      {
        label: "スマートフォン",
        data: [29.3, 49.5, 62.6, 64.2, 72.0, 71.8, 75.1, 79.2, 83.4, 86.1],
        backgroundColor: [
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
        ],
        borderColor: ["#ADD9C3"],
        borderWidth: 2,
      },
      {
        label: "モバイル端末",
        data: [94.5, 94.5, 94.8, 94.6, 95.8, 94.7, 94.8, 95.7, 96.1, 97.7],
        backgroundColor: [
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
        ],
        borderColor: ["#43BACC"],
        borderWidth: 2,
      },
      {
        label: "タブレット端末",
        data: [8.5, 8.5, 21.9, 26.3, 33.3, 34.4, 36.4, 40.1, 37.4, 41.2],
        backgroundColor: [
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
        ],
        borderColor: ["#0086BF"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    elements: {
      line: {
        tension: 0, // ベジェ曲線を無効にする
        fill: false,
        stack: 1,
        // "fill": "-1"
      },
    },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10,
      },
    },
    legend: {
      position: "bottom",
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 11,
        fontColor: "#000",
        padding: 10,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 13,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0.05)",
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 11,
          },
          gridLines: {
            display: false,
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
      ],
    },
    animation: {
      duration: 2000,
    },
  },
});

//chart.js
//myChart5
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart5").getContext("2d");
ctx.canvas.height = 280;
var myChart5 = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: [
      "ブロードバンド回線",
      "光回線",
      "携帯電話回線",
      "ケーブルテレビ回線",
      "DSL回線",
      "固定電話回線",
    ],
    datasets: [
      {
        label: "平成28年",
        data: [97.4, 60.0, 51.0, 17.0, 9.6, 1.4],
        backgroundColor: [
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
        ],
        borderColor: [
          "#ADD9C3"
        ],
        borderWidth: 2,
      },
      {
        label: "平成29年",
        data: [96.9, 61.1, 49.2, 16.9, 6.0, 1.5],
        backgroundColor: [
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
        ],
        borderColor: [
          "#43BACC"
        ],
        borderWidth: 2,
      },
      {
        label: "平成30年",
        data: [97.4, 63.4, 51.3, 17.3, 4.6, 1.7],
        backgroundColor: [
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
          "#0086BF",
        ],
        borderColor: [
          "#0086BF"
        ],
        borderWidth: 2,
      },
      {
        label: "令和元年",
        data: [89.0, 54.5, 50.8, 16.4, 3.2, 1.9],
        backgroundColor: [
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
          "#4051B3",
        ],
        borderColor: [
          "#4051B3"
        ],
        borderWidth: 2,
      },
      {
        label: "令和2年",
        data: [88.0, 58.5, 53.8, 14.4, 2.5, 1.3],
        backgroundColor: [
          "#111766",
          "#111766",
          "#111766",
          "#111766",
          "#111766",
          "#111766",
        ],
        borderColor: [
          "#111766"
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    elements: {
      line: {
        tension: 0, // ベジェ曲線を無効にする
        fill: false,
      },
    },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 30,
      },
    },
    legend: {
      position: "bottom",
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 11,
        fontColor: "#000",
        padding: 10,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: "rgba(0, 0, 0, 0.05)",
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 13,
            min: 0,
            max: 100,
          },
          gridLines: {
            borderDash: [6, 4],
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
      ],
    },
    animation: {
      duration: 2000,
    },
  },
});

//chart.js
//myChart6 マーケット
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart6").getContext("2d");
ctx.canvas.height = 280;
var myChart6 = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "2019年11月",
      "12月",
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "2020年6月",
    ],
    datasets: [
      {
        label: "楽天",
        data: [
          1620000,
          1530000,
          1640000,
          1520000,
          1540000,
          1570000,
          1800000,
          2760000,
        ],
        backgroundColor: [
          "#DEA832",
          "#DEA832",
          "#DEA832",
          "#DEA832",
          "#DEA832",
          "#DEA832",
          "#DEA832",
          "#DEA832",
        ],
        borderColor: ["#DEA832"],
        borderWidth: 2,
      },
      {
        label: "イオン",
        data: [
          810000,
          800000,
          850000,
          830000,
          840000,
          970000,
          1300000,
          1980000,
        ],
        backgroundColor: [
          "#C8D947",
          "#C8D947",
          "#C8D947",
          "#C8D947",
          "#C8D947",
          "#C8D947",
          "#C8D947",
          "#C8D947",
        ],
        borderColor: ["#C8D947"],
        borderWidth: 2,
      },
      {
        label: "イトーヨーカ堂",
        data: [770000, 760000, 850000, 880000, 890000, 900000, 740000, 1440000],
        backgroundColor: [
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
        ],
        borderColor: ["#ADD9C3"],
        borderWidth: 2,
      },
      {
        label: "コストコ",
        data: [
          1000000,
          2600000,
          1200000,
          1400000,
          1500000,
          2100000,
          2400000,
          3020000,
        ],
        backgroundColor: [
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
          "#43BACC",
        ],
        borderColor: ["#43BACC"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    elements: {
      line: {
        tension: 0, // ベジェ曲線を無効にする
        fill: false,
        stack: 1,
        // "fill": "-1"
      },
    },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10,
      },
    },
    legend: {
      position: "bottom",
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: "#000",
        padding: 10,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 10,
            min: 500000,
            max: 3500000,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0.05)",
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 11,
          },
          gridLines: {
            display: false,
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
      ],
    },
    animation: {
      duration: 2000,
    },
  },
});

//chart.js
//myChart7 ECサイト
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart7").getContext("2d");
ctx.canvas.height = 280;
var myChart7 = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["2020年1月", "2020年2月", "2020年3月", "2020年4月"],
    datasets: [
      {
        label: "Amazon",
        data: [77800000, 76300000, 79700000, 80900000],
        backgroundColor: [
          "#DEA832",
          "#DEA832",
          "#DEA832",
          "#DEA832",
          "#DEA832",
          "#DEA832",
        ],
        borderColor: ["#DEA832"],
        borderWidth: 2,
      },
      {
        label: "楽天市場",
        data: [73700000, 70800000, 75000000, 78200000],
        backgroundColor: [
          "#C8D947",
          "#C8D947",
          "#C8D947",
          "#C8D947",
          "#C8D947",
          "#C8D947",
        ],
        borderColor: ["#C8D947"],
        borderWidth: 2,
      },
      {
        label: "Yahoo!ショッピング",
        data: [36900000, 37500000, 40200000, 42800000],
        backgroundColor: [
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
          "#ADD9C3",
        ],
        borderColor: ["#ADD9C3"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    elements: {
      line: {
        tension: 0, // ベジェ曲線を無効にする
        fill: false,
        stack: 1,
      },
    },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10,
      },
    },
    legend: {
      position: "bottom",
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 11,
        fontColor: "#000",
        padding: 10,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 10,
            min: 35000000,
            max: 85000000,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0.05)",
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 11,
          },
          gridLines: {
            display: false,
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
      ],
    },
    animation: {
      duration: 2000,
    },
  },
});

//myChart9 テレワーク実施状況
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart9").getContext("2d");
ctx.canvas.height = 280;
var myChart9 = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["平成28年", "平成29年", "平成30年", "令和元年", "令和2年"],
    datasets: [
      {
        data: [11.3, 13.9, 19.1, 20.2, 43.3],
        backgroundColor: [
          "#ADD9C3",
          "#43BACC",
          "#0086BF",
          "#4051B3",
          "#111766",
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return (
            data.labels[tooltipItem.index] +
            ": " +
            data.datasets[0].data[tooltipItem.index] +
            " %"
          );
        },
      },
    },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10,
      },
    },
    legend: {
      display: false,
      position: "bottom",
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: "#000",
        padding: 10,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 13,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0.05)",
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 11,
          },
          gridLines: {
            display: false,
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
      ],
    },
    animation: {
      duration: 2000,
    },
  },
});

//myChart10 業種別テレワーク
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart10").getContext("2d");
ctx.canvas.height = 280;
var myChart10 = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["平成29年", "平成30年", "令和元年", "令和2年"],
    datasets: [
      {
        label: "建設業",
        data: [12.2, 18.8, 22.5, 37.9],
        backgroundColor: ["#DEA832", "#DEA832", "#DEA832", "#DEA832"],
        borderColor: ["#DEA832"],
        borderWidth: 2,
      },
      {
        label: "製造業",
        data: [13.0, 20.8, 21.1, 44.0],
        backgroundColor: ["#C8D947", "#C8D947", "#C8D947", "#C8D947"],
        borderColor: ["#C8D947"],
        borderWidth: 2,
      },
      {
        label: "運輸・郵便業",
        data: [7.7, 8.7, 11.7, 20.3],
        backgroundColor: ["#ADD9C3", "#ADD9C3", "#ADD9C3", "#ADD9C3"],
        borderColor: ["#ADD9C3"],
        borderWidth: 2,
      },
      {
        label: "卸売・小売業",
        data: [13.3, 13.4, 20.1, 20.1, 32.5],
        backgroundColor: ["#43BACC", "#43BACC", "#43BACC", "#43BACC"],
        borderColor: ["#43BACC"],
        borderWidth: 2,
      },
      {
        label: "金融・保険業",
        data: [29.8, 37.9, 40.7, 51.3],
        backgroundColor: ["#0086BF", "#0086BF", "#0086BF", "#0086BF"],
        borderColor: ["#0086BF"],
        borderWidth: 2,
      },
      {
        label: "不動産業",
        data: [9.6, 16.9, 25.4, 51.7],
        backgroundColor: ["#4051B3", "#4051B3", "#4051B3", "#4051B3"],
        borderColor: ["#4051B3"],
        borderWidth: 2,
      },
      {
        label: "情報通信業",
        data: [31.1, 39.9, 46.5, 73.5],
        backgroundColor: ["#111766", "#111766", "#111766", "#111766"],
        borderColor: ["#111766"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    elements: {
      line: {
        tension: 0, // ベジェ曲線を無効にする
        fill: false,
        stack: 1,
      },
    },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10,
      },
    },
    legend: {
      position: "bottom",
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 11,
        fontColor: "#000",
        padding: 10,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 13,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0.05)",
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000",
            fontSize: 11,
          },
          gridLines: {
            display: false,
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
      ],
    },
    animation: {
      duration: 2000,
    },
  },
});
