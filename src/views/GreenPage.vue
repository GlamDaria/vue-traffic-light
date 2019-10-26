<template>
  <traffic-light @startCounting="startCounter" @stopCounting="dischargeCounting" seconds="15" active="green" blinking="green "/>
</template>
<script>
  import trafficLight from '@/components/TrafficLight'
  export default{
    data:()=>({
      setTimeout: null
    }),
    methods:{
      dischargeCounting(){
        clearTimeout(this.setTimeout)
      },
      calcTime(){
        return (localStorage.savedTime) ? localStorage.savedTime * 1000 : 15000
      },
      startCounter(){
        this.setTimeout = setTimeout(() =>{
          if (localStorage.savedTime) localStorage.removeItem('savedTime');
          this.$router.push('yellow')
        }, this.calcTime())
      }
    },
    components: {
      trafficLight
    },
    mounted(){
      this.startCounter()
    },
    beforeDestroy(){
      if (this.setTimeout){
        clearTimeout(this.setTimeout);
      }
    }
  }
</script>