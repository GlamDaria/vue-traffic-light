<template>
  <traffic-light @startCounting="startCounter" @stopCounting="dischargeCounting" seconds="15" active="green" blinking="green" />
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
        return (localStorage.savedTime) ? localStorage.savedTime * 1000 : 15000
      }
    }
  }
</script>