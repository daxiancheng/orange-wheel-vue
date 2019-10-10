module.exports = {
    base:'/orange-wheel-vue/',
    title: 'Orange UI',
    description: '简单、易用',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '交流', link: '/xxx' },
            { text: '源码', link: 'https://github.com/daxiancheng/orange-wheel-vue' },
            
        ],
        sidebar: [
            {
                title: '安装',   // 必要的
                // path: '/foo/',      // 可选的, 应该是一个绝对路径
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/install/',
                    '/use/'
                ]
            },
            {
                title: '组件',
                children: [ '/Obutton/','/Oinput/','/Ogrid/','/Olayout/','/Omessage/','/Otabs/','/Opopover/','/Ocollapse/']
            }
        ]
    }
}