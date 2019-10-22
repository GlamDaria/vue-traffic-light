<template>
  <div id="light" :class="[color, {inactive: !isActive}]">
  </div>
</template>
<script>
  export default{
    props:['color', 'isActive']
  }
</script>
<style scoped>
  #light{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .red{
    background-color: #d50000;
  }
  .green{
    background-color: #61d004;
  }
  .yellow{
    background-color: #eeff41;
  }
  .inactive{
    opacity: 0.3;
  }
  .active{
    opacity: 1;
  }
</style>