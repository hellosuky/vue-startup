<template lang="html">
  <div>
    <div class="search">
      <input class="search-input" v-model="keyword" placeholder="输入你想要搜索的城市"/>
    </div>
      <div class="search-content" v-show="keyword" ref="wrapper">
        <ul>
          <li class="item" v-for="item in list" :key="item.id"
          @click="handleCityClick(item.name)">{{item.name}}</li>
          <li class="item" v-show='hasNoData'>没有匹配的地点</li>
        </ul>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'CitySearch',
  props:{
    cities:Object
  },
  data () {
    return {
      list:[],
      keyword:''
    }
  },
  methods:{
    handleCityClick(city){
      this.$store.dispatch('CHANGE_CITY',city)
      this.$router.push('/')
    }
  },
  computed:{
    hasNoData:function(){
      return !this.list.length
    }
  },
  watch:{
    keyword:function(keyword){
      if(!keyword){
        this.list = []
        return
      }
      //list update
      let result = []
      for(let item in this.cities){
        this.cities[item].forEach((val)=>{
          if(val.spell.indexOf(keyword) > -1 || val.name.indexOf(keyword)>-1){
            result.push(val)
          }
        })
      }
      this.list = result
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="css" scoped>
  .content{
    position: absolute;
    top:1.7rem;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .search{
    background: #00bcd4;
  }
  .search-input{
    min-width: 6.8rem;
    outline: none;
    border: 1px solid #eee;
    border-radius: 3px;
    margin-bottom: 0.2rem;
    padding-left: 0.1rem;
    line-height: 0.5rem;
  }
  .search-content{
    position: fixed;
    top:1.7rem;
    bottom: 0;
    left:0;
    right:0;
    background: #ebebeb;
    color:#000;
    z-index: -1;
  }
  .item{
    background: #fff;
    border-bottom: 1px solid #eee;
  }
</style>
