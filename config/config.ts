import { defineConfig } from "umi";

export default defineConfig({
  // 最终值在插件中设置，所以这里不用写
  //   title: "Hello Umi",
  plugins: [
    require.resolve("@umijs/plugins/dist/model"),
    require.resolve("@umijs/plugins/dist/antd"),
    require.resolve("@alita/plugins/dist/request"),
    require.resolve("@umijs/max-plugin-openapi/dist/openapi"),
    require.resolve("@alita/plugins/dist/dva")
  ],
  model: {},
  request: {},
  antd: {},
  openAPI: {
    // 这里使用服务端提供的url
    schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json",
    mock: true,
  },
  dva:{
    enableModelsReExport:{}
    // 配置就是 alita 中的 Dva 插件特有的，会将 module 文件中的 State 类型导出，这有个要求，每个 module 必须写明 State 的类型，不然程序就会报错。通过约定，我们可以很方便的解决问题。
  }
});
