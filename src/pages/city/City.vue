<template>
  <div>
    <city-header :cities="cities"></city-header>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet
    :cities="cities"
    @change="handleChange"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet'
export default {
  name:'City',
  components:{
    CityHeader,
    CityList,
    CityAlphabet
  },
  data (){
    return {
      cities:{},
      hotCities:[],
      letter:''
    }
  },
  methods:{
    getCityInfo(){
      axios.get('/api/city.json')
      .then(res => this.saveInfo(res))
    },
    saveInfo(res){
      let data = res.data.data
      this.cities = data.cities
      this.hotCities = data.hotCities
    },
    handleChange(letter){
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="css" scoped>
</style>
