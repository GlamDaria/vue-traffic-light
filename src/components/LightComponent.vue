<template>
  <div id="light" :class="[color, activeOrNot]">
  </div>
</template>
<script>
  export default{
    props:['color', 'activeOrNot']
  }
</script>
<style scoped>
  #light{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .red{
    background-color: #b71c1c;
  }
  .green{
    background-color: #1b5e20;
  }
  .yellow{
    background-color: #eeff41;
  }
  .inactive{
    opacity: 0.5;
  }
  .active{
    opacity: 1;
  }
</style>