<template>
  <div class="row">
    <div class="left"></div>
    <div class="right">
      <div class="desc"></div>
      <div class="desc"></div>
      <div class="desc"></div>
      <div class="desc"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RowSkeleton',
    data () {
      return {}
    }
  }
</script>

<style scoped lang="less">
  @import '../../assets/css/theme';

  .row {
    display: flex;
    padding: 4vw 3vw;
    .left {
      width: 20vw;
      height: 20vw;
      background: @skeletion-background;
    }
    .right {
      width: 70vw;
      .desc {
        height: 2.5vw;
        background: linear-gradient(90deg, #f3f3f3 8%, #eee 18%, #f3f3f3 33%);
        margin: 2vw;
        animation: progress 2s linear infinite;
      }
      .desc:nth-child(1) {
        width: 100%;
      }
      .desc:nth-child(2) {
        width: 90%;
      }
      .desc:nth-child(3) {
        width: 80%;
      }
      .desc:nth-child(4) {
        width: 90%;
      }
    }
  }

  @keyframes progress {
    from {
      background-position: -400px 0;
    }
    to {
      background-position: 400px 0;
    }
  }

</style>
