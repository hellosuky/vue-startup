<template lang="html">
  <div>
    <swiper :options="swiperOption" class="icons-wrapper">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div v-for="item in page" :key="item.id" class="icon">
          <img :src="item.imgUrl" class="icon-img"/>
          <p class="icon-span">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props:{
    iconList:Array
  },
  data () {
    return {
      swiperOption: {
        loop: false,
        autoplay: false
      }
    }
  },
  computed: {
    pages: function () {
      var pages = []
      this.iconList.forEach((item, index) => {
        var page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
.icons-wrapper
  width: 100%
  display: flex
  flex-wrap: wrap
  margin:0.2rem 0
  .icon
    width: 25%
    display: inline-block
    font-size: 0
    text-align:center
    .icon-img
      width: 60%
    .icon-span
      font-size:14px
      margin: 0.3rem 0
</style>
