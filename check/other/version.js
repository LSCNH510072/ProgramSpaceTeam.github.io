fetch('https://ProgramSpaceTeam.github.io/versions.json')
    .then(function(response) {
    return response.text();
    })
    .then(function(data) {
        if (data["check"] < version) {
            alert("您不是最新版本，请刷新缓存以更新到最新版本！")
        } else {
            alert("您已是最新版本。")
        }
    })
    .catch(function(error) {
    console.log(error);
    });
