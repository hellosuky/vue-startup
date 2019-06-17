<template lang="html">
  <div>
    <p class="weekended-title">周末去哪儿</p>
    <ul>
      <li class="weekended-li" v-for="item in weekendList" :key="item.id">
        <img class="weekended-img" :src="item.imgUrl"/>
        <div class="info">
          <p class="info-title">{{item.title}}</p>
          <p class="info-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeWeekended',
  props:{
    weekendList:Array
  }
}
</script>

<style lang="stylus" scoped>
  .weekended-title
    padding:10px
    background-color:#eee
    font-weight:600
  .weekended-li
    margin-bottom:5px
    .weekended-img
      width:100%
      border-radius:3px
    .info-title
      padding:10px
      font-weight:600
      font-size:15px
    .info-desc
      padding:0 10px
      padding-bottom:10px
      color:#999
</style>
