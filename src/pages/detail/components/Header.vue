<template lang="html">
  <div class="header">
    <router-link to="/">
      <div class="iconfont back-icon">&#xe611;</div>
    </router-link>
    <div class="navbar" :style="opacity">
      <router-link to="/">
        <div class="iconfont back">&#xe611;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailHeader',
  data () {
    return {
      opacity:{
        opacity:0
      }
    }
  },
  methods:{
    handleScroll(){
      const top = document.documentElement.scrollTop
      if(top > 60){
        let opacity = top / 200 >1?1:top /200
        this.opacity = {opacity}
        return
      }else{
        this.opacity = {opacity:0}
      }
    }
  },
  activated () {
    window.addEventListener('scroll',this.handleScroll)
  },
  deactivated(){
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>

<style lang="css" scoped>
.back-icon{
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  border-radius: 50%;
  background: rgba(0,0,0,0.4);
  position: absolute;
  left:0.2rem;
  top: 0.2rem;
  color: #fff;
  z-index: 1001;
  font-size: 0.4rem;
}
.back{
  position: absolute;
  left:0.2rem;
  color: #fff;
}
.navbar{
  line-height: 0.84rem;
  position: fixed;
  left: 0;
  top:0;
  width: 100%;
  color: #fff;
  background: #00bcd4;
  text-align: center;
}
</style>
