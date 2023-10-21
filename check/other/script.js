//另一种:
//实现函数如下所示
function getBrowser(n) {
    var ua = navigator.userAgent.toLowerCase(),
        s,
        name = '',
        ver = 0;
    //探测浏览器
    (s = ua.match(/msie ([\d.]+)/)) ? _set("IE ", _toFixedVersion(s[1])):
    (s = ua.match(/firefox\/([\d.]+)/)) ? _set("Firefox ", _toFixedVersion(s[1])) :
    (s = ua.match(/chrome\/([\d.]+)/)) ? _set("Chromium ", _toFixedVersion(s[1])) :
    (s = ua.match(/opera.([\d.]+)/)) ? _set("Opera ", _toFixedVersion(s[1])) :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? _set("Safari ", _toFixedVersion(s[1])) : 0;
  
    function _toFixedVersion(ver, floatLength) {
      ver = ('' + ver).replace(/_/g, '.');
      floatLength = floatLength || 1;
      ver = String(ver).split('.');
      ver = ver[0] + '.' + (ver[1] || '0');
      ver = Number(ver).toFixed(floatLength);
      return ver;
    }
    function _set(bname, bver) {
      name = bname;
      ver = bver;
    }
    return (n == 'n' ? name : (n == 'v' ? ver : name + ver));
  };
  
//    调用时，var neihe = getBrowser("n");  所获得的就是浏览器所用内核。
//    调用时  var banben = getBrowser("v"); 所获得的就是浏览器的版本号。
var browser = getBrowser(); // 所获得的就是浏览器内核加版本号。
var nbrowser = getBrowser('n')
var vbrowser = getBrowser('v')

document.getElementById('nbrowsers').innerText = '浏览器内核类型：' + nbrowser
document.getElementById('vbrowsers').innerText = '浏览器内核版本：' + vbrowser
document.getElementById('browsers').innerText = '浏览器内核信息：' + browser
document.getElementById('user-dlzfc').innerText = '用户代理字符串：' + navigator.userAgent
document.getElementById('browser-l').innerText = '浏览器语言信息：' + navigator.languages

document.getElementById('ui-mbl').innerText = '毛玻璃效果（高斯模糊）：'
document.getElementById('ui-cssx').innerText = 'CSS嵌套语法：'
function jrmbl() {
    if (nbrowser == 'Chromium ') {
        if (vbrowser >= 76) {
            return '兼容'
        } else {
            return '不兼容'
        }
    } 
    else if (nbrowser == 'Safari ') {
        if (vbrowser >= 9) {
            return '兼容'
        } else {
            return '不兼容'
        }
    }
    else {
        return '未知'
    }
}

function jrcssx() {
    if (nbrowser == 'Chromium ') {
        if (vbrowser >= 118) {
            return '兼容'
        } else {
            return '不兼容'
        }
    } else {
        return '内核无效'
    }
}

var jrmbls = jrmbl()
var jrcssxs = jrcssx()

document.getElementById('mbljrx').innerText = '该样式兼容性：' + jrmbls
document.getElementById('cssxjrx').innerText = '该样式兼容性：' + jrcssxs

var nhbb = '过低'
var jrxnh = '较差'
var wzjr = '低'

if (nbrowser == 'Chromium ') {
    if (vbrowser >= 95 && vbrowser <=117) {
        nhbb = '较新'
        jrxnh = '优秀'
        wzjr = '较高'
    } else if (vbrowser >= 118) {
        nhbb = '最新'
        jrxnh = '完美'
        wzjr = '高'
    }
} else if (nbrowser == 'Safari ') {
    if (vbrowser >= 9 && vbrowser <= 12) {
        nhbb = '较新'
        jrxnh = '一般'
        wzjr = '中等'
    } else if (vbrowser >= 13) {
        nhbb = '最新'
        jrxnh = '良好'
        wzjr = '较高'
    }
} else {
    nhbb = '不支持'
    jrxnh = '不支持'
}

document.getElementById('zlts').innerText = '您的浏览器内核版本' + nhbb + '，兼容性' + jrxnh + '。内核信息为 ' + browser + '。'
document.getElementById('nhjr').innerText = '内核兼容性：' + jrxnh
document.getElementById('nhbb').innerText = '内核版本：' + nhbb
document.getElementById('jrwz').innerText = '网站兼容性：' + wzjr
