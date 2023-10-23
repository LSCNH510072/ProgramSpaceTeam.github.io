// 获取元素和初始状态
const pages = document.querySelectorAll('.page');
let currentPage = 0;
let isAnimating = false;

// 滚动事件处理函数
function handleScroll(event) {
  // 防止滚动事件连续触发
  if (isAnimating) return;
  isAnimating = true;

  // 获取滚动方向
  const deltaY = event.deltaY;

  // 判断滚动方向并更新当前页数
  if (deltaY > 0 && currentPage < pages.length - 1) {
    currentPage++;
  } else if (deltaY < 0 && currentPage > 0) {
    currentPage--;
  }

  // 切换背景颜色和页面
  changePage(currentPage);
}

// 切换页面
function changePage(pageIndex) {
  window.scrollTo({
    top: pageIndex * window.innerHeight,
    behavior: 'smooth',
  });

  // 动画结束后，设置isAnimating为false
  setTimeout(() => {
    isAnimating = false;
  }, 1000);
}

// 监听滚动事件
window.addEventListener('wheel', handleScroll);
