<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
function directional() {
  if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      window.location.href='http://localhost:8080/#/mobile/index';
  } else {
      window.location.href='http://localhost:8080/#/pc/index';
  }
}
window.onload = directional();
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img, div,input,p,a,span,em { 
  margin:0; 
  padding:0; 
  /*font-size: 13px;*/
  box-sizing: border-box;
}

fieldset, img { border:none; }

img{vertical-align: top;}

em,i,strong,b{ font-style:normal; font-weight:normal; }

ul, ol { list-style:none; } 

a {text-decoration:none; color: black; }

.ind{text-indent: 2em;}

.noborder{border: none;}

.nobg{background:none;}
</style>
