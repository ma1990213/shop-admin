<template>
  <h1>首页</h1>
  <p>{{store.state.count}}</p>
  <img src="@/assets/悟饭.jpeg" alt="">
</template>

<script lang="ts" setup>
// import { useStore } from 'vuex'
import { useStore } from '@/store'

const store = useStore()
console.log(store.state.count, '123')

</script>

<style lang="scss" scoped></style>
