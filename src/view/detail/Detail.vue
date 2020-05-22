<template>
  <div id="detail" class="detail-nav">
  <detail-nab-bar/>
    <scroll  class="content">
    <detail-swiper :top-images="topImages"/>
    <detail-base-info  :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-param-info :param-info="paramInfo"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    </scroll>
  </div>
</template>

<script>
  import DetailNabBar from "./childCompos/DetailNabBar"
  import DetailSwiper from "./childCompos/DetailSwiper";
  import DetailBaseInfo from "../home/childCompus/DetailBaseInfo";
  import DetailShopInfo from "../home/childCompus/DetailShopInfo";
  import Scroll from "../../components/common/scroll/Scroll";
  import DetailGoodsInfo from "../home/childCompus/DetailGoodsInfo";
  import DetailParamInfo from "../home/childCompus/DetailParamInfo";
  import DetailCommentInfo from "../home/childCompus/DetailCommentInfo";


  import {getDetail,Goods,Shop,GoodsParam} from "../../network/detail";

  export default {
    name: "Detail",
      components:{
        DetailNabBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParamInfo,
        //commonInfo,
        DetailCommentInfo
      },
    data() {
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        itemParams:{},
       // GoodsParam:{},
        paramInfo:{},
        commentInfo: {}

      }
    },
    created() {
      //1.保存取到的数据iid
      this.iid = this.$route.params.iid
      //2.对数据进行展示
      getDetail(this.iid).then(res => {
        //console.log(res);
        const data=res.result;
        //获取顶部的轮播数据
        this.topImages=data.itemInfo.topImages
        //获取商品信息
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //获取店铺信息
        this.shop=new Shop(data.shopInfo)
        //保存商品的详情数据
        this.detailInfo=data.detailInfo;
        //获取参数信息
        this.paramInfo=new GoodsParam(data.itemParams.info, data.itemParams.rule)
        //取出评论信息
        this.commentInfo= data.rate.list[0]

      })


    }
  }
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height:100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
  .content {
    height: calc(100% - 44px);

  }
</style>
