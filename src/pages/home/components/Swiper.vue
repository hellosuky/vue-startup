<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props:{
    swiperList:Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: 2000,
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper-img
    width:100%
  .wrapper >>> .swiper-pagination-bullet-active
    background: #eee !important
  .wrapper
    width:100%
    height:0
    padding-bottom:30%
    overflow:hidden
</style>
