const path = require('path')
export default {
  plugins: [
    'umi-plugin-dva',
  ],
  proxy: {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": {"^/api": ""}
    }
  },
  alias: {
    '~components': path.resolve(__dirname, 'src/components'),
    '~utils': path.resolve(__dirname, 'src/utils'),
    '~layouts': path.resolve(__dirname, 'src/layouts'),
    '~services': path.resolve(__dirname, 'src/services'),
    '~monitor': path.resolve(__dirname, 'src/pages/monitor'),
  },
}
