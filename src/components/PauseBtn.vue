<template>
  <button @click.prevent="saveState">{{isPaused ? 'Start The Lights' : 'Pause The Lights'}}</button>
</template>
<script>
  export default{
    data:() =>({
      isPaused: false
    }),
    props: ['time'],
    methods:{
      saveState(){
        this.isPaused = !this.isPaused;
        if (!localStorage.savedTime) localStorage.savedTime = this.time;
        !this.isPaused ? this.$emit('startCounting') : this.$emit('stopCounting');
      }
    },
    mounted(){
      if (localStorage.savedTime){
        this.$emit('stopCounting');
      }
    }
  }
</script>
<style scoped>
  button{
    background-color: #ff7043;
    padding: 10px 18px;
    font-size: 1rem;
    border: none;
    border-radius: 20px;
    position: absolute;
    top: 120px;
    right: 20px;
  }
  button:hover{
    background-color: #d84315;
  }
</style>