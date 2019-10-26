<template>
  <traffic-light @startCounting="startCounter" @stopCounting="dischargeCounting" seconds="3" active="yellow" blinking="yellow" />
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
        return (localStorage.savedTime) ? localStorage.savedTime * 1000 : 3000
      },
      startCounter(){
        this.setTimeout = setTimeout(() =>{
          if(this.prevRoute.path === '/green'){
            if (localStorage.savedTime) localStorage.removeItem('savedTime');
            this.$router.push('/red')
          }
          else{
            if (localStorage.savedTime) localStorage.removeItem('savedTime');
            this.$router.push('/green')
          }
        }, this.calcTime());
      }
    },
    components: {
      trafficLight
    },
    beforeRouteEnter(to, from, next) {
      next(el => {
        el.prevRoute = from
      })
    },
    mounted(){
      this.startCounter();
    },
    beforeDestroy(){
      if (this.setTimeout){
        clearTimeout(this.setTimeout);
      }
    }
  }
</script>