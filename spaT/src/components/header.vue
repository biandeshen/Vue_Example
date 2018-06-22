<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="logo">
        <a href="/home"><img src="../assets/logo.png" alt width="210"></a>
      </div>
      <ul class="nav">
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link to="/page1">page1</router-link></li>
        <li><router-link to="/page2">page2</router-link></li>
        <li><router-link to="/page3">page3</router-link></li>
      </ul> 
    </div> 
  </div>
</template>
<style>
.header{
  width:1200px;
  height:100px;
  margin:0 auto;
  color:#fff;
}
.header-wrapper{
  width:1200px;
  height:100px;
}
.logo{
  width:210px;
  height:100px;
  float:left;
}
.nav{
  width:700px;
  height:100px;
  font-size:15px;
  float:right;
}
.nav li{
  float:left;
  margin-right:30px;
  height:34px;
  line-height:34px;
  overflow:hidden;
  margin-top:34px;
}
.nav li:last-child{
  margin-right:0;
}

</style>