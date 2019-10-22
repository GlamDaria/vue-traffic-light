<template>
  <div>
    <light-component color="red inactive" />
    <light-component color="yellow active" />
    <light-component color="green inactive" />
    <counter-component>00:{{this.seconds}}</counter-component>
  </div>
</template>
<script>
  import lightComponent from '@/components/LightComponent';
  import counterComponent from '@/components/Counter'
  export default{
    data:()=>({
      setTimeout: null,
      counterTime: null,
      seconds: 3
    }),
    components: {
      lightComponent, counterComponent
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
      this.counterTime = setInterval(() =>{
          return this.seconds--
      }, 1000)
    },
    beforeDestroy(){
      if (this.setTimeout && this.counterTime){
        clearTimeout(this.setTimeout);
        clearInterval(this.counterTime)
      }
    }
  }
</script>