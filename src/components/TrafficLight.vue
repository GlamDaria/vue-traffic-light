<template>
  <div id="traffic-light">
    <light-component color="red" :isActive="active==='red'" :blinking="this.seconds<=3 && blinking==='red'" />
    <light-component color="yellow" :isActive="active==='yellow'" :blinking="this.seconds<=3 && blinking==='yellow'" />
    <light-component color="green" :isActive="active==='green'" :blinking="this.seconds<=3 && blinking==='green'" />
    <counter-component>00:{{this.seconds}}</counter-component>
    <pause-btn @stopCounting="dischargeCounting" @startCounting="restart" :time="this.seconds" />
  </div>
</template>
<script>
  import lightComponent from '@/components/LightComponent'
  import counterComponent from '@/components/Counter'
  import pauseBtn from '@/components/PauseBtn'
  export default{
    props:['seconds', 'active', 'blinking'],
    data:() => ({
      counterTime: null
    }),
    methods:{
      dischargeCounting(){
        clearInterval(this.counterTime);
        this.$emit('stopCounting');
      },
      restart(){
        this.counterTime = setInterval(() => {
          return this.seconds--
        }, 1000)
        this.$emit('startCounting');
      }
    },
    components:{
      lightComponent, counterComponent, pauseBtn
    },
    mounted(){
      if (localStorage.savedTime){
        this.seconds = localStorage.savedTime
      }
      this.counterTime = setInterval(() =>{
          return this.seconds--
      }, 1000)
    },
    beforeDestroy(){
      if (this.counterTime){
        clearInterval(this.counterTime)
      }
    }
  }
</script>
<style scoped>
  #traffic-light{
    width: max-content;
    padding: 1rem;
    background-color: #212121;
    border-radius: 15px;
  }
</style>