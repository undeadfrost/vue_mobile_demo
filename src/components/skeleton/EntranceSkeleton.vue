<template>
  <div class="entrance">
    <div class="item" v-for="(item, index) in entranceList" :key="index">
      <div class="circle"></div>
      <div class="desc"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EntranceSkeleton',
    data () {
      return {
        entranceList: [],
      }
    },
    created () {
      this.entranceList = Array.from({length: 10}, (value, index) => index)
    }
  }
</script>

<style scoped lang="less">
  @import '../../assets/css/theme';

  .entrance {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 20%;
      max-width: 20vw;
      margin-top: 3vw;
      .circle {
        width: 15vw;
        height: 15vw;
        border-radius: 100%;
        background: @skeletion-background;
      }
      .desc {
        margin-top: 2vw;
        width: 10vw;
        height: 2.5vw;
        background: @skeletion-background
      }
    }
  }
</style>
