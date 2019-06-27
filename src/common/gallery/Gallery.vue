<template lang="html">
  <div class="wrapper-box" @click="handleClose">
    <div class="container">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="banner-pic" :src="item" alt="pic"/>
        </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name:"CommonGallery",
  data () {
    return {
      swiperOption:{
        pagination:'.swiper-pagination',
        paginationType:"fraction",
        observer:true,
        observeParents:true,
      }
    }
  },
  props:{
    imgs:Array
  },
  methods:{
    handleClose (){
      this.$emit('close')
    }
  }
}
</script>

<style lang="css" scoped>
  .wrapper-box{
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top:0;
    bottom: 0;
    left:0;
    right: 0;
    background: rgba(0, 0, 0);
  }
  .banner-pic{
    width: 100%;
  }
  .swiper-container{
    overflow: inherit;
  }
  .swiper-pagination{
    bottom: -2rem;
    z-index: 1000;
    color:#fff;
  }
</style>
