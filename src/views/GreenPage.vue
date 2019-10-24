<template>
  <traffic-light seconds="15" active="green" blinking="green"/>
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
    mounted(){
      this.setTimeout = setTimeout(() => {
        this.$router.push('/yellow')
      }, 15000)
    },
    beforeDestroy(){
      if (this.setTimeout){
        clearTimeout(this.setTimeout);
      }
    }
  }
</script>