<template>
  <div id="slider">
    <a v-show="i===index" v-for="(item, i) in sliders" :key="i" :href="item.url">
      <img :src="item.img">
    </a>
    <ul class="dots">
      <li v-for="(item, i) in sliders" :class="{active: i===index}"></li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'slider',
    mounted() {
      setInterval(() => {
        ++this.index;
        if (this.index > this.sliders.length - 1) {
          this.index = 0
        } 
      }, 3000)
    },
    data() {
      return {
        index:0,
        sliders: [
          {
            url: 'https://music.163.com/song?id=1449782659',
            img: '../../static/images/1.jpg'
          },
          {
            url: 'https://music.163.com/song?id=1449794966',
            img: '../../static/images/2.jpg'
          },
          {
            url: 'https://music.163.com/song?id=1425626819',
            img: '../../static/images/3.jpg'
          },
          {
            url: 'https://music.163.com/song?id=1449567035',
            img: '../../static/images/4.jpg'
          },
          {
            url: 'https://music.163.com/song?id=1449990724',
            img: '../../static/images/5.jpg'
          }
        ],
      }
    },
  }
</script>

<style lang="">
 *{
   list-style: none;
 }
  #slider{
    margin: 0 auto;
    background-color: #f85854;
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  #slider img{
    width: 600px;
    margin: 10px 0;
  }
  .dots{
    display: flex;
    position: absolute;
    bottom: 10px;
  }
  .dots li{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: white;
    margin: 0 5px;
  }
  .dots li.active{
    background: #f85854;
  }
</style>