<template>
  <MyHeader></MyHeader>
  <router-view></router-view>
</template>

<script>
import MyHeader from "@/common/MyHeader";

export default {
  name: "Index",
  components:{
    MyHeader
  }
}
</script>

<style scoped>

</style>
