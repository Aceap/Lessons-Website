// function changeBackground() {
//     //轮播图片
//     index++;
//     let a = document.getElementsByClassName("img-inside");
//     if (index >= a.length) index = 0;
//     for (let i = 0; i < 3; i++) {
//         a[i].style.display = 'none';
//     }
//     a[index].style.display = 'block';
// }

let t = null;
t = setTimeout(time, 500); //开始运行
function time() {
    clearTimeout(t); //清除定时器
    let dt = new Date();
    let y = dt.getFullYear();
    let mt = dt.getMonth() + 1;
    let day = dt.getDate();
    let h = dt.getHours(); //获取时
    let m = dt.getMinutes(); //获取分
    let s = dt.getSeconds(); //获取秒
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    document.querySelector(".time").innerHTML =
        y + "/" + mt + "/" + day + "-" + h + ":" + m + ":" + s;
    t = setTimeout(time, 500); //设定定时器，循环运行
}