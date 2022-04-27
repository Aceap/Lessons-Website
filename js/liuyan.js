window.onload = function () {
    let Btn = document.getElementById("btn");
    Btn.onclick = function () {
        let Name = document.getElementById("name");
        Name.addEventListener("click", function () {
            Name.style.color = "black";
        })
        let Msg = document.getElementById("msg");
        let Ul = document.getElementById("msgInputted");

        //用户名校验
        let username = Name.value;
        let ch = username.charAt(0);
        if (ch >= "0" && ch <= "9") {
            alert("用户名首字母不能是数字！");
            Name.style.color = "red";
            return;
        }
        if (username.length < 3 || username.length > 20) {
            alert("用户名长度必须为3~20个字符！");
            Name.style.color = "red";
            return;
        }

        //添加留言
        let MsgValue = Msg.value;
        let Li = document.createElement("li");
        Li.innerHTML = username + ':' + MsgValue + " &nbsp;&nbsp;&nbsp;<button>删除</button><br>系统回复：感谢您的留言！";
        let arrayLi = Ul.getElementsByTagName("li");
        if (arrayLi.length > 0) { //判断是否已有留言
            Ul.insertBefore(Li, arrayLi[0]);
        } else {
            Ul.appendChild(Li);
        }
        Msg.value = ''; //置空消息文本框

        //删除留言
        let del_btn = document.getElementsByTagName("button");
        for (let i = 0; i < del_btn.length; i++) {
            del_btn[i].addEventListener("click", function () {
                Ul.removeChild(this.parentNode);
            })
        }
    }
}