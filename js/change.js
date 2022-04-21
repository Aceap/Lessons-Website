function changeBackground() {
    //轮播图片
    index++;
    let a = document.getElementsByClassName("img-inside");
    if (index >= a.length) index = 0;
    for (let i = 0; i < 3; i++) {
        a[i].style.display = 'none';
    }
    a[index].style.display = 'block';
}