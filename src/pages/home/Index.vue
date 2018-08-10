<template>
  <div>
    <EntranceSkeleton/>
    <RowSkeleton/>
    <RowSkeleton/>
    <RowSkeleton/>
    <RowSkeleton/>
  </div>
</template>

<script>
  import EntranceSkeleton from '../../components/skeleton/EntranceSkeleton'
  import RowSkeleton from '../../components/skeleton/RowSkeleton'

  export default {
    name: 'Index',
    components: {RowSkeleton, EntranceSkeleton},
    data () {
      return {}
    }
  }
</script>

<style scoped>

</style>
