<template>
  <traffic-light @startCounting="startCounter" @stopCounting="dischargeCounting" seconds="10" active="red" blinking="red" />
</template>
<script>
  import PageMixins from '@/mixins/PageMixins.js'
  export default{
    data:()=>({
      setTimeout: null
    }),
    mixins:[PageMixins],
    methods:{
      calcTime(){
        return (localStorage.savedTime) ? localStorage.savedTime * 1000 : 10000
      }
    }
  }
</script>