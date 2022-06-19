<template>
  <h1>HOME</h1>
</template>

<script setup lang='ts'>
import { getLoginInfo } from '@/api/common'
getLoginInfo()

</script>

<style lang="scss">
@import '@/styles/variables.scss';

h1 {
  color: $color;
}

</style>
