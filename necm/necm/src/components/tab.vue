<template>
  <div id="tab">
    <router-link :to="'/recommend'">推荐</router-link>
    <router-link :to="'/rank'">排行</router-link>
    <router-link :to="'/singer'">歌手</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="">
  #tab{
    background-color: #f85854;
    font-size: 12px;
  }  
  #tab a{
    text-decoration: none;
    color: white;
    margin-right: 40px;
  }
</style>
