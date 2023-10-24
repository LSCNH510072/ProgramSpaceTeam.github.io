function get_yy() {
    fetch('https://v1.hitokoto.cn/?encode=text')
    .then(function(response) {
    return response.text();
    })
    .then(function(data) {
    // 将结果插入到 id 为 "quote" 的 p 标签中
    document.getElementById("quote").textContent = data;
    })
    .catch(function(error) {
    console.log(error);
    });
}

window.onload = function() {
    get_yy();
}
