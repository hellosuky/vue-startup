<template lang="html">
  <div class="list" ref="wrapper">
    <div>
      <div class="current">
        <p class="cur-title">当前城市</p>
        <div class="btn-wrapper">
          <div class="btn">{{this.$store.state.city}}</div>
        </div>
      </div>
      <div class="current">
        <p class="cur-title">热门城市</p>
        <div class="btn-wrapper">
          <div class="btn" v-for="item in hotCities" :key="item.id"
          @click="handleCityClick(item.name)">{{item.name}}</div>
        </div>
      </div>
      <div class="current" v-for="(cur,index) in cities" :key="index"
      :ref="index"
      >
          <p class="cur-title">{{index}}</p>
          <div class="place-wrapper">
            <div class="place-btn" v-for="place in cur" :key="place.id"
            @click="handleCityClick(place.name)">{{place.name}}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'CityList',
  props:{
    hotCities:Array,
    cities:Object,
    letter:''
  },
  methods:{
    handleCityClick(city){
      this.$store.dispatch('CHANGE_CITY',city)
      this.$router.push('/')
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true
    })
  },
  watch:{
    letter:function(letter){
      let element = this.$refs[letter][0]
      this.scroll.scrollToElement(element)
    }
  }
}
</script>

<style lang="css" scoped>
  .list{
    position: absolute;
    overflow: hidden;
    top:1.84rem;
    left:0;
    bottom: 0;
    right: 0;
  }
  .cur-title{
    background: #eee;
    line-height: 0.5rem;
    padding-left: 0.2rem;
  }
  .btn-wrapper{
    margin: 0.3rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .btn{
    margin: 0.1rem;
    border: 1px solid #999;
    width: 1.9rem;
    text-align: center;
    line-height: 0.5rem;
    border-radius: 0.05rem;
  }
  .place-btn{
    border-bottom: 1px solid #ebebeb;
    line-height: 0.65rem;
    padding-left: 0.2rem;
  }
</style>
