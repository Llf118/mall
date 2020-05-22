<template>
  <swiper>
    <swiper-item  v-for="item in topImages" class="details">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from '../../../components/common/swiper'
  export default {
    name: "DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .details{
    height: 300px;
    overflow: hidden;
}
</style>
