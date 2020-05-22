//发送网络请求
//导入request
import{request} from "./request";

//1.获取首页的多个数据
 export function getHomeMultidata() {
   return request({
     url: '/home/multidata'
   })
 }

   export function getHomeGoods(type,page) {
     return request({
       url: '/home/data',
       params: {
         type,
         page
       }
     })
}

