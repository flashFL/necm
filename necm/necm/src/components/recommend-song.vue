<template>
  <div id="songList">
    <h3>推荐歌曲</h3>
    <ul>
      <li v-for="(item, index) in songs" :key="index">
        <a :href="item.url">
          <img :src="item.img">
        </a>
        <p>
          <a :href='item.url'>{{item.song}}</a>
        </p>
        <p class="author">by {{item.author}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'song',
  data() {
    return{
      songs: [
        {
          url: 'https://music.163.com/playlist?id=3102354580',
          img: 'http://p3.music.126.net/BasrVhHTQ1uJdHmxWfOI1g==/109951165013427822.jpg?param=200y200',
          song: '在爱面前，没有人是座孤岛',
          author: '夏天种花秋天晒太阳'
        },
        {
          url: 'https://music.163.com/playlist?id=5003765400',
          img: 'http://p4.music.126.net/vfmzH3Rd43klg18XrO_FPw==/109951164973647238.jpg?param=200y200',
          song: '与你相拥在温柔梦境',
          author: 'Spectual'
        },
        {
          url: 'https://music.163.com/playlist?id=5014825684',
          img: 'http://p4.music.126.net/9doBYPodcNIO0PdInOxQ0Q==/109951164985868152.jpg?param=200y200',
          song: '你是梅子味的夏天☀',
          author: 'Spyromun_'
        },
        {
          url: 'https://music.163.com/playlist?id=2900343697',
          img: 'http://p3.music.126.net/rStWnnrmzVkp7tDqIvoH9Q==/109951165005437184.jpg?param=200y200',
          song: '刘宇宁深情演绎"要替我幸福"',
          author: '网易云音乐'
        },
        {
          url: 'https://music.163.com/playlist?id=2821115454',
          img: 'http://p3.music.126.net/P1YQTdws7RtaTtTv8-UC4g==/109951165014190235.jpg?param=200y200',
          song: 'ine乐团送你一抹夏天的颜色',
          author: '原创君'
        },
        {
          url: 'https://music.163.com/playlist?id=4908686291',
          img: 'http://p3.music.126.net/lnCckE1kuPhBkXcyR2Omxg==/109951165007073545.jpg?param=200y200',
          song: '我的快乐死掉了',
          author: '爱打篮球的亮亮'
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
  .author{
    font-size: 12px;
    color: #aeaeae;
    margin-top: -12px;
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
