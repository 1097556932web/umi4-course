# umi4-course
umi4-course
问题：
1、我在使用会报：终端写指令写创建文件及写代码(例：echo 'export default () => <div>Index Page</div>;' > src/pages/index.js)时"SyntaxError: Unexpected character '�'.这个错
2、在package.json中设置build的属性为cross-env（兼容设备平台） ANALYZE=1（访问打包资源路径） umi build，  可以在Webpack Bundle Analyzer is started at http://127.0.0.1:8888，可以访问项目打包出来的资源
3、如果要使用umi的hook数据流要下载 @umijs/plugins插件并且要去配置config文件还要创建models文件夹导出自定义的hooks