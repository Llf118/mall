<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"  class="tab-control-item"
         :class="{active:index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
      default(){
        return []
      }
    }
  },
    //当我们选中某个状态时，需要其显示颜色和下划线，我们通过currentIndex来记录当前谁被选中
  data(){
    return {
      currentIndex:0
    }
  },
    //当我们选中某个选项时，某个选项对应的颜色改变，添加一个点击事件
    methods: {
      itemClick(index){
        this.currentIndex=index;
        this.$emit('tabClick',index)
      }
    },
  }
</script>

<style scoped>
.tab-control{
  display:flex;
  text-align: center;
  height:40px;
  line-height:40px;
  font-size: 15px;
  background-color: #ffffff;

}
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item{
    flex:1;
  }
  .active{
    color: var(--color-high-text);

  }
  .tab-control-item span{
    padding: 5px;
  }
  .active span{
    border-bottom: 3px solid var(--color-high-text);
  }

</style>
