import { defineConfig } from "umi";
export default defineConfig({
    // 最终值在插件中设置，所以这里不用写
    //   title: "Hello Umi",

    // 增加配置 config/config.ts，
    plugins: [
        // 使用 model 插件，并且配置 model 来开启插件功能。
        require.resolve("@umijs/plugins/dist/model"),
        // 使用 umi antd 插件
        require.resolve("@umijs/plugins/dist/antd"),
        // 使用 umi 引入请求
        require.resolve("@alita/plugins/dist/request"),
    ],
    model: {},
    antd: {},
    request: {}
})