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

const chbtn = document.getElementById("chbtn")
const chdiv = document.getElementById("chdiv")


chbtn.addEventListener('click', () => {
  chbtn.classList.toggle('toggle')
})

const radioLabels = document.querySelectorAll('.choose-div label');
const buttonSpan = document.querySelector('.choose-button span');
/** @type {HTMLInputElement[]} */
const radioOptions = document.querySelectorAll('.engine-option');
/** @type {HTMLInputElement} */
const input = document.querySelector('#input');

let engine = 'BAIDU';

for (let radioOption of radioOptions) {
  radioOption.addEventListener('change', () => {
    if (radioOption.checked) {
      engine = radioOption.dataset['type'];
    }
  });
}

/** @type {HTMLFormElement} */
const form = document.querySelector('#sousf');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  searchContent = input.value;
  let url = '';
  switch (engine) {
    case 'BAIDU':
      url = `https://www.baidu.com/s?wd=${searchContent}`;
      break;
    
    case 'BING':
      url = `https://cn.bing.com/search?q=${searchContent}`;
      break;
    
    case 'SO':
      url = `https://so.com/s?q=${searchContent}`;
      break;

    case 'GOOGLE':
      url = `https://google.com/search?q=${searchContent}`
      break;

    case 'DUCKDUCKGO':
      url = `https://duckduckgo.com/?q=${searchContent}`
      break;
    case 'BILIBILI':
      url = `https://search.bilibili.com/all?keyword=${searchContent}`
      break;
    case 'GITHUB':
      url = `https://github.com/search?q=${searchContent}`
      break;
  }
  window.open(url);
});

radioLabels.forEach(label => {
  label.addEventListener('click', () => {
    const labelText = label.querySelector('span').textContent;
    buttonSpan.textContent = labelText;
  });
});