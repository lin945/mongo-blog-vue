<template>
  <div id="app" v-bind:class="{'dark-theme' :this.$store.state.nightState}" v-on:night="night">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data(){
   return {
     isActive:false
   }
  },
  methods:{
    night(){
      console.log("aaaa")
      this.isActive=!this.isActive
    }
  }
}
</script>

<style>
:root{
  --blue: #6f9fc7;
  --light-blue: #9fcff7;
  --border: #ddd;
  --dark-border: #ccc;
  --light-border: #eee;
  --light-background: #fff;
  --radius: .25em;
  --red: #ea644a;
  --yellow: #ffb03a;
  --green: #27a17e;
  --gray: #ccc;
  --light-gray: #ddd;
  --lighter-gray: #eee;
  --primary: var(--blue);
  --secondly: var(--yellow);
}
#app {

}
body{
  color: #555;
  font-weight: 300;
  background: #fafafa;
  transition: margin .3s, background .3s;
}
.dark-theme {
  color: #aaa;
  background: #333;
  --blue: #6e8aad;
  --light-blue: #6f9fc7;
  --border: #555;
  --dark-border: #666;
  --light-border: #555;
  --light-background: #444;
}
h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
}
a {
  color: var(--primary);
  text-decoration: none;
}

</style>
