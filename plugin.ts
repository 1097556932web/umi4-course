import { IApi } from "umi";
export default (api: IApi) => {
    // 通过插件设置环境变量
    process.env.COMPRESS = "none";  //它的作用是在执行 umi build 构建的时候不压缩代码，
                                    // 这在定位线上 bug 的时候非常的有用。当然我们这里只是演示，真实的项目中，
                                    // 肯定不能让这个构建一直保持不压缩，而是应该在线上出现 bug 时，临时使用一次这个变量，编译一次项目。

    // 通过插件修改配置
    api.modifyConfig((memo: any) => {
        memo.title = "hello Umi";//我们还将用户的配置 title 修改成了 "Hello Umi"，这样我们就可以删掉本地配置文件中的 title 配置。
        return memo
    })
}