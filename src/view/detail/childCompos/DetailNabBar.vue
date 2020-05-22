<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles"
             class="title-item"
             :class="{active: currentIndex === index}"
             @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/NavBar/NavBar";
  export default {
    name: "detailNabBar",
    components:{
      NavBar
    },
    methods:{
      titleClick(index){
        this.currentIndex=index
      },
      backClick(){
        this.$router.back();
      }
    },
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    }
  }
</script>

<style scoped>
.title {
    display:flex;
  font-size: 15px;
}
  .title-item{
    flex:1;
  }
  .active{
    color:#ff5777;
  }
  .back img{
    margin-top: 12px;
  }
</style>
