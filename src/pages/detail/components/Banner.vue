<template lang="html">
  <div>
    <div class="banner" @click="handleGalleryClick">
      <img class="banner-pic" :src="data.bannerImg"
      alt="pic">
      <div class="banner-info">
        <div class="banner-title">{{data.sightName}}</div>
        <div class="banner-right">
          <span class="iconfont">&#xe698;</span>
          <span>39</span>
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery
      v-show="showGallery"
      @close="handleClose"
      :imgs="data.gallaryImgs"
      ></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from '../../../common/gallery/Gallery'
import FadeAnimation from '../../../common/fade/FadeAnimation'
export default {
  name:'DetailBanner',
  components:{
    CommonGallery,
    FadeAnimation
  },
  props:{
    data:Object
  },
  data () {
    return {
      showGallery:false
    }
  },
  methods:{
    handleGalleryClick(){
      this.showGallery = true
    },
    handleClose(){
      this.showGallery = false
    }
  }
}
</script>

<style lang="css" scoped>
  .banner{
    overflow: hidden;
    padding-bottom: 55%;
    height: 0;
    position: relative;
  }
  .banner-pic{
    width: 100%;
  }
  .banner-info{
    position: absolute;
    color: #fff;
    font-size: 0.35rem;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 100%;
    line-height: 0.8rem;
    left: 0;
  }
  .banner-title{
    padding-left: 0.2rem;
    flex: 1;
  }
  .banner-right{
    background: rgba(0,0,0,0.4);
    text-align: center;
    line-height: 0.5rem;
    border-radius: 0.1rem;
    margin-right: 0.5rem;
    padding: 0 0.2rem;
  }
</style>
