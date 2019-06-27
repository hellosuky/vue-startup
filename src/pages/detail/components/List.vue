<template lang="html">
  <div class="list">
    <div v-for="(item,index) in list" :key="index">
      <div class="list-item"><span class="icon"></span>{{item.title}}</div>
      <div v-if="item.children" class="list-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailList',
  props:{
    list:Array
  }
}
</script>

<style lang="css" scoped>
.list-item{
  line-height: 0.84rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.icon{
  display: inline-block;
  width: .36rem;
  height: .36rem;
  background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat;
  margin-right: .1rem;
  background-size: .4rem 3rem;
  margin-left: 0.2rem;
}
.list-children{
  padding: 0 0 0 0.2rem;
}
</style>
