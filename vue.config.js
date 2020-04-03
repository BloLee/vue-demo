module.exports = {
    publicPath: '/',
    outputDir: 'build',   //打包时 生成的目录
    assetsDir: '',        //静态济源目录
    css: {
        postcss: {
            plugins:[ 
                require("postcss-px-to-viewport")({
                  unitToConvert: "px",
                  viewportWidth: 375,          
                  unitPrecision: 3,          //允许REM单位增长到的十进制数字。  
                  propList: ["*"],
                  viewportUnit: "vw",       //指定需要转换成的视窗单位，默认vw
                  fontViewportUnit: "vw",   //指定需要转换成的视窗单位，建议使用vw
                  selectorBlackList: ['.hib'],    // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
                  minPixelValue: 1,         // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
                  mediaQuery: false,
                  replace: true,    //替换包含vw的规则
                  exclude: /(\/|\\)(node_modules)(\/|\\)/,   //（数组或正则表达式）忽略某些文件
                })
              ]
        }
    },
    configureWebpack: config => {
        
    }
}