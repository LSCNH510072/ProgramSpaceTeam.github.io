fetch('https://ProgramSpaceTeam.github.io/versions.json')
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
        var x = data['chatun']
        if (x > version) {
            alert("您不是最新版本，请刷新缓存以更新到最新版本！")
        } else if (x <= version) {
            // None
        } else {
            alert("我们无法获取版本信息，请检查浏览器或网络后重试！")
        }
    })
    .catch(function(error) {
    console.log(error);
    });
