// //配置别名
// const  path = require('path');
// module.exports = {
//  configureWebpack:{
//    // resolve: {
//    //   //configure.resolve.alias
//    //   .set('@', path.join(__dirname, 'src'))
//    //     .set('components', path.join(__dirname, 'src/components'))
//    //     .set('common', path.join(__dirname, 'src/common'))
//    //     .set('network', path.join(__dirname, 'src/network'))
//    //     .set('view', path.join(__dirname, 'src/view'))
//
//      alias:{
//        '@':'src',
//        'assets':'@/assets',
//        'common':'@/common',
//        'components':'@/components',
//        'network':'@/network',
//        'view':'@/view',
//    }
//   }
// }
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
      .set('components', path.join(__dirname, 'src/components'))
      .set('common', path.join(__dirname, 'src/common'))
      .set('network', path.join(__dirname, 'src/network'))
      .set('view', path.join(__dirname, 'src/view'))
    // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))

  }
}

