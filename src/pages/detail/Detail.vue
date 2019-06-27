<template lang="html">
  <div>
    <detail-banner :data="data"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="ddd"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name:'Detail',
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted(){
    axios.get('/api/detail.json',{
        params:{
          id:this.$route.params.id
        }
      }).then(this.getDetailSuccess)
  },
  methods:{
    getDetailSuccess(res){
      const data = res.data.data
      this.data = data
    }
  },
  computed:{
    list(){
      return this.data.categoryList
    }
  },
  data () {
    return {
      data:{}
    }
  }
}
</script>

<style lang="css" scoped>
.ddd{
  padding-bottom: 500px;
}
</style>
