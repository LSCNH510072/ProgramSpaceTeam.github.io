var quote = document.getElementById("quote");
var gpt = document.getElementById("gpt");
var link = document.getElementById("link");
var myForm = document.getElementById("myForm");
var input_s = document.getElementById("input");
var selectBox = document.getElementById("selectBox");
var fform = document.getElementById("sousf");
var tmElement = document.getElementById("tm");

function get_yy() {
  fetch("https://v1.hitokoto.cn/?encode=text")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      quote.textContent = data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

window.onload = function () {
  get_yy();
};

// 定义更新时间的函数
function updateTime() {
  if (time_jx) {
    var currentTime = new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    });
  } else {
    var currentTime = new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  }
  // 将格式化后的时间显示在h1元素中
  tmElement.textContent = currentTime;
}

setInterval(updateTime, 100);

let engineDict = {
  google: ["https://google.com/search", "q"],
  bing: ["https://bing.com/search", "q"],
  baidu: ["https://baidu.com/s", "wd"],
  a360: ["https://so.com/s", "q"],
  ddg: ["https://duckduckgo.com", "q"],
};

function updateFormAction() {
  var se = selectBox.value;
  // 判断单选框是否被选中
  if (se != "") {
    // 修改form的action属性
    fform.action = engineDict[se][0];
    input_s.name = engineDict[se][1];
    localStorage.setItem("se", se);
  }
}

selectBox.value = localStorage.getItem("se");

input_s.addEventListener("focus", function () {
  quote.style.opacity = 1;
  gpt.style.filter = "blur(10px)";
  link.style.opacity = 1;
  myForm.style.filter = "blur(10px)";
});

input_s.addEventListener("blur", function () {
  quote.style.opacity = 0;
  gpt.style.filter = "none";
  link.style.opacity = 0;
  myForm.style.filter = "none";
});
