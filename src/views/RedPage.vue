<template>
  <traffic-light seconds="10" active="red" blinking="red" />
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
      }, 10000)
    },
    beforeDestroy(){
      if (this.setTimeout){
        clearTimeout(this.setTimeout);
      }
    }
  }
</script>