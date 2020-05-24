<template>
  <div id="header">
    <router-link :to="'/user'">
      <i class="iconfont iconListmenuoptions"></i>
    </router-link>
    <span>NetEase Cloud Music</span>
    <router-link :to="'/search'">
      <i class="iconfont iconsearch"></i>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #header{
    background-color: #f85854;
    color:white;
    font-size:20px;
    height: 40px;
  }
  .iconfont{
    position: absolute;
  }
  .iconListmenuoptions{
    left: 20px;
  }
  .iconsearch{
    right: 20px;
  }
  #header a{
    text-decoration: none;
    color: white;
  }
</style>
