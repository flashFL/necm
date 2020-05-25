<template>
  <div id="songList">
    <h3>推荐歌单</h3>
    <ul>
      <li v-for="(item, index) in songs" :key="index">
        <a :href="item.url">
          <img :src="item.img">
        </a>
        <div class='listen'>
          <i class='iconfont iconlisten'>
            <span class='countListen'>{{ item.countListen}}</span>
          </i>
        </div>
        <p>
          <a :href='item.url'>{{item.message}}</a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'song-list',
  data() {
    return{
      songs: [
        {
          url: 'https://music.163.com/playlist?id=4994999501',
          img: 'http://p3.music.126.net/wrQSH_BFUN54ZhYMXucoXQ==/109951164968826396.jpg?param=200y200',
          countListen: '70w',
          message: '宝丽金跳舞街，复古旋律抖腿不停歇！'
        },
        {
          url: 'https://music.163.com/playlist?id=2272777766',
          img: 'http://p4.music.126.net/GiO2H3uS_bcykssMwp52_Q==/19080924789027825.jpg?param=200y200',
          countListen: '10w',
          message: '『英伦男嗓』那些迷人声线的英国歌手'
        },
        {
          url: 'https://music.163.com/playlist?id=4912281713',
          img: 'http://p3.music.126.net/wa-GG-RPjir5_7UQnzcdNg==/109951164811144690.jpg?param=200y200',
          countListen: '20w',
          message: '致初恋：遇见你是青春最美的邂逅'
        },
        {
          url: 'https://music.163.com/dj?id=2067274091',
          img: 'http://p1.music.126.net/EMgiI9vpxTR4WqbsGIRPqw==/109951165006226416.jpg?param=140y140',
          countListen: '170w',
          message: '每个遇见都是有意义的'
        },
        {
          url: 'https://music.163.com/playlist?id=806235166',
          img: 'http://p3.music.126.net/lqNnbukDa4YRWvPWYRW3pg==/109951164958565308.jpg?param=200y200',
          countListen: '5w',
          message: '精选维吾尔语歌曲Tallanma Nahxilar'
        },
        {
          url: 'https://music.163.com/dj?id=2067264184',
          img: 'http://p2.music.126.net/taX10g-tJ7NAqR3mHldGhw==/109951164006548445.jpg?param=140y140',
          countListen: '8121',
          message: ' 别让爱你的人失望了'
        }
      ]
    }
  }
}
</script>

<style lang="">
  *{
    list-style: none;
  }
  #songList{
    width: 600px;
    margin: 0 auto;
  }
  h3{
    text-align: left;
  }
 ul{
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
  }
 #songList li{
    width: 30%;
    position: relative;
    padding-right: 3.3%;
  }

 img{
    width: 96%;
    border-radius: 10px;
  }
  p{
    position: relative;
    text-align: left;
    top: -10px;
  }
 .listen{
    position: absolute;
    top: 5px;
    right: 38%;
    color: white;
  }
 span{
    font-size: 12px;
  }
  a{
    text-decoration: none;
    color: black;
    font-size: 12px;
  }
  a:hover{
    text-decoration: underline;
  }
</style>
