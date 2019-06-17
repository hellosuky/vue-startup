<template lang="html">
      <ul class="list"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd">
        <li class="item" v-for="item in letters" :key="item"
        v-on:click="handleClick"
        :ref="item"
        >{{item}}</li>
      </ul>
</template>

<script>
export default {
  name:'CityAlphabet',
  props:{
    cities:Object
  },
  computed:{
    letters:function(){
      let letters = []
      for(let i in this.cities){
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus:false,
      top:0,
      timer:null
    }
  },
  methods:{
    handleClick(e){
      //发送事件
      this.$emit('change',e.target.innerText)
    },
    handleTouchStart(e){
      this.touchStatus = true
    },
    updated () {
      this.top = this.$refs['A'][0].offsetTop
    },
    handleTouchMove(e){
      if(this.touchStatus){
        //节流
        if(this.timer){
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(()=>{
          //now position
          let current = e.touches[0].clientY - 84
          let index = Math.floor((current - this.top) / 20)
          if(index >= 0 && index < this.letters.length){
            this.$emit('change',this.letters[index])
          }
        },16)
      }
    },
    handleTouchEnd(){
      this.touchStatus = false
    }
  }
}
</script>

<style lang="css" scoped>
  .list{
    position: absolute;
    right: 0;
    width: 0.7rem;
    top:1.84rem;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .item{
    line-height: 0.4rem;
    text-align: center;
    color: #00bcd4;
    font-size: 0.35rem;
  }
</style>
