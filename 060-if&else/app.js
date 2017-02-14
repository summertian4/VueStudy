var watchExampleVM = new Vue({
    el: '#example',
    data: {
        type: "A",
        loginType: "username"
    },
    methods: {
        // _.debounce 是一个通过 lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
        // ajax请求直到用户输入完毕才会发出
        // 学习更多关于 _.debounce function (and its cousin
        // _.throttle), 参考: https://lodash.com/docs#debounce
        clicked: (
            function () {
                if (watchExampleVM.loginType === "username") {
                    watchExampleVM.loginType = "email"
                } else {
                    watchExampleVM.loginType = "username"
                }
            }
        )
    }

})