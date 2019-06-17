<template>
    <div>
      <home-header></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icons :iconList="iconList"></home-icons>
      <home-recommand :recommendList="recommendList"></home-recommand>
      <home-weekended :weekendList="weekendList"></home-weekended>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommand from './components/Recommand'
import HomeWeekended from './components/Weekended'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  data(){
    return {
      lastCity:'',
      iconList:[],
      recommendList:[],
      swiperList:[],
      weekendList:[]
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json')
      .then(res => this.getHomeInfoSuccess(res))
    },
    getHomeInfoSuccess(data){
      var data = data.data
      if(data.ret){
        this.iconList = data.data.iconList
        this.swiperList = data.data.swiperList
        this.weekendList =  data.data.weekendList
        this.recommendList = data.data.recommendList
      }
    }
  },
  computed:{
    ...mapState(['city'])
  },
  mounted(){
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated(){
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  components: { HomeHeader, HomeSwiper, HomeIcons , HomeRecommand , HomeWeekended }
}
</script>

<style></style>
