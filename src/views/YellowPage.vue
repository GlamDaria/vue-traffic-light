<template>
  <traffic-light seconds="3" active="yellow" blinking="yellow" />
</template>
<script>
  import trafficLight from '@/components/TrafficLight'
  export default{
    data:()=>({
      setTimeout: null
    }),
    components: {
      trafficLight
    },
    beforeRouteEnter(to, from, next) {
      next(el => {
        el.prevRoute = from
      })
    },
    mounted(){
      this.setTimeout = setTimeout(() => {
        if(this.prevRoute.path === '/green'){
          this.$router.push('/red')
        }
        else{
          this.$router.push('/green')
        }
      }, 3000)
    },
    beforeDestroy(){
      if (this.setTimeout){
        clearTimeout(this.setTimeout);
      }
    }
  }
</script>