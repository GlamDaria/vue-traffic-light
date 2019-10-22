<template>
  <div id="app">
    <h1>Traffic Light</h1>
    <router-view />
  </div>
</template>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #app{
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    background-color: #e0e0e0;
    height: 100vh;
  }
</style>
