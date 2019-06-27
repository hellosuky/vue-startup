<template lang="html">
  <div>
    <p class="recommand-hot">热门推荐</p>
    <ul class="recommand-wrapper">
      <router-link tag="li"
      v-for="item in recommendList"
      :key="item.id"
      class="recommand-item"
      :to="'/detail/'+ item.id">
        <div class="img-wrapper">
          <img class="recommand-img" :src="item.imgUrl" />
        </div>
        <div class="info">
          <div class="info-title">{{item.title}}</div>
          <div class="info-desc">{{item.desc}}</div>
          <div class="info-button">查看更多</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeRecommand',
  props:{
    recommendList:Array
  }
}
</script>

<style lang="stylus" scoped>
.recommand-hot
  padding-left:10px
  background-color:#eee
  padding-top:5px
  padding-bottom:5px
.recommand-wrapper
  .recommand-item
    border-bottom:1px solid #eee
    display:flex
    padding:10px
    .recommand-img
      width:65px
      padding-right:10px
    .info-title
      font-weight:700
      font-size:16px
      padding-bottom:5px
    .info-desc
      color:#999
      padding-bottom:5px
    .info-button
      background-color:#f43e06
      color:#fff
      width:70px
      height:18px
      line-height:18px
      border-radius:3px
      text-align:center
</style>
