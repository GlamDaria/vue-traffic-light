<template>
  <div id="light" :class="[color, {inactive: !isActive}, {blink: blinking}]">
  </div>
</template>
<script>
  export default{
    props:['color', 'isActive', 'blinking']
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
  .blink{
    animation: 3s anim infinite;
  }
  @keyframes anim{
    0%{opacity: 0}
    10%{opacity: .1}
    20%{opacity: 1}
    30%{opacity: .1}
    40%{opacity: 1}
    50%{opacity: .1}
    60%{opacity: 1}
    70%{opacity: .1}
    80%{opacity: 1}
    90%{opacity: .1}
    100%{opacity: 1}
}
</style>