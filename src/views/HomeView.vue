<template>
  <div class="home">
    <MainHeader></MainHeader>
    <router-view></router-view>
    <div>footer</div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "@/components/MainHeader";

export default {
  name: 'HomeView',
  components: {
    MainHeader
  },
  methods:{

  }
}
</script>
