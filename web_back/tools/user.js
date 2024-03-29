//使用user.js对项目与用户操作有关
var user = {
    // 设置login方法，用来进行登录请求操作
    login: function (options) {
        $.ajax({
            type: 'POST',
            url: LOGIN, //将地址进行特殊处理
            data: {
                user_name: options.data.username,
                password: options.data.password
            },
            success: function (res) {
                //根据res.code进行成功失败检测
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        });
    },




    //设置logout的方法
    logout: function (options) {
        $.ajax({
            type: 'post',
            url: LOGOUT,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })

    }
};