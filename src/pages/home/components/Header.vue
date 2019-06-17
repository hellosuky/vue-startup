<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe611;</div>
    </div>
    <div class="header-input">
      <span class="iconfont amplification-icon">&#xe62d;</span>
      输入你的城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont down-icon">&#xe62e;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  background:$bgColor
  width:100%
  display:flex
  line-height:.84rem
  color:#fff
  .header-left
    width:0.84rem
    .back-icon
      font-size:.4rem
      text-align:center
  .header-input
    flex:1
    color:#ccc
    background:#fff
    height:.64rem
    margin-top:.12rem
    line-height:.64rem
    border:none
    border-radius:.08rem
    .amplification-icon
      padding-left:.1rem
  .header-right
    min-width:1.2rem
    margin-left:.2rem
    color:#fff
    .down-icon
      font-size:.1rem
      margin-right:0.04rem;
</style>
