<template>
  <div>
    <light-component color="red inactive" />
    <light-component color="yellow inactive" />
    <light-component color="green active" />
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
      seconds: 15
    }),
    components: {
      lightComponent, counterComponent
    },
    mounted(){
      this.setTimeout = setTimeout(() => {
        this.$router.push('/yellow')
      }, 15000)
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