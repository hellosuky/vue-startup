<template lang="html">
    <div class="header">
      <div class="header-top">
        <router-link to="/">
          <div class="iconfont back-icon">&#xe611;</div>
        </router-link>
        <div class="text">城市列表</div>
      </div>
      <city-search :cities="cities"></city-search>
    </div>
</template>

<script>
import CitySearch from './Search.vue'
export default {
  name:'CityHeader',
  components:{
    CitySearch
  },
  props:{
    cities:Object
  }
}
</script>

<style lang="css" scoped>
  .header{
    line-height: 0.84rem;
    color: #fff;
    text-align: center;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    z-index: 100;
  }
  .header-top{
    background: #00bcd4;
  }
  .back-icon{
    position: absolute;
    left: 0.2rem;
    color: #fff;
  }
</style>
