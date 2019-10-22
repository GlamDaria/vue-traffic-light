<template>
  <div id="app">
    <h1>Traffic Light</h1>
    <router-view class="center" />
  </div>
</template>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #app{
    background-color: #e0e0e0;
    height: 100vh;
  }
  .center{
    margin: 0 auto;
  }
</style>
