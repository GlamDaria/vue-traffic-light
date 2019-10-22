<template>
  <div id="counter">
    <slot></slot>
  </div>
</template>
<script>

</script>
<style scoped>
  #counter{
    position: absolute;
    top: 20px;
    right: 20px;
    border: 2px solid #d84315;
    background-color: #ffccbc;
    padding: 5px;
    font-size: 3rem;
    width: 150px;
    text-align: center;
  }
</style>