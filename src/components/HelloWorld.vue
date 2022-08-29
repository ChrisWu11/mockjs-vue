<template>
  <div class="musicWrapper">
    <audio src="@/static/mp3/薛之谦 - 演员.mp3" controls></audio>
    <div class="musicItem" v-for="item in songs" :key="item.id">
      <div class="img">
<!--        <img src="@/assets/pic.jpg">-->
        <img :src="item.pic">
      </div>
      <div class="music-content">
        <div>{{ item.name }}</div>
        <div>{{ item.singer }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {

    }
  },
  mounted() {
    this.$store.dispatch('getSongs')
  },
  computed:{
    ...mapState({
      songs: state => state.songs
    })
  }

}
</script>


<style scoped>
  .musicWrapper{
    width: 350px;
  }
  .musicItem{
    height: 90px;
    width: 100%;
    display: flex;
    background-color: antiquewhite;
    border: 1px solid black;
  }
  .img{
    width: 90px;
    height: 100%;
    overflow: hidden;
  }
  .img img{
    width: 100%;
    height: 100%;
  }
  .music-content{
    padding-top: 20px;
    flex: 1;
    /*display: flex;*/
    /*align-content: space-between;*/
  }
  .music-content div:nth-child(1){
    font-size: 20px;
    margin-bottom: 5px;
    margin-left: 80px;
  }
  .music-content div:nth-child(2){
    font-size: 14px;
    margin-left: 80px;
  }
</style>
