import Vue from 'vue'
import VueRouter from 'vue-router'
//1.安装插件
Vue.use(VueRouter)

//2.创建router
const Home =() =>import('view/home/Home')
const Category =() =>import('view/category/Category')
const Cart=() =>import('view/cart/Cart')
const Profile =() =>import('view/profile/Profile')
const Detail =() =>import ('view/detail/Detail')


const routes =[
  {
    path:'',
    redirect:'/Home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
   path: '/detail/:iid',
    component: Detail,
}
]

const router = new VueRouter({
  routes,
  mode:'history'

})

//4.导出
export default router
