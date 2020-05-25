<template>
  <div>
    <m-slider></m-slider>
    <m-recommendSongList></m-recommendSongList>
    <m-recommendSong></m-recommendSong>
  </div>
</template>
<script>
import slider from './slider'
import recommendSongList from './recommend-song-list'
import recommendSong from './recommend-song'
export default {
  components:{
    'm-slider': slider,
    'm-recommendSongList': recommendSongList,
    'm-recommendSong': recommendSong
  }
}
</script>

<style lang="">
  
</style>
