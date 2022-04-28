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
        if (username.length < 2 || username.length > 20) {
            alert("用户名长度必须为2~20个字符！");
            Name.style.color = "red";
            return;
        }

        //内容校验
        let MsgValue = Msg.value;
        if (MsgValue == null || MsgValue == '') {
            alert("内容不能为空！");
            return;
        }

        //添加留言
        let Li = document.createElement("li");
        Li.innerHTML = username + ':' + MsgValue + " &nbsp;&nbsp;&nbsp;<button>删除</button><br>！";
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
                Ul.removeChild(this.parentNode); //获取父节点并删除
            })
        }
    }
}

function enterKeyDown(e) {
    e = e || window.event;
    if (e.keyCode == 13) {
        document.getElementById("btn").click();
    }
}