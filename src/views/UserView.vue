<template>
  <body>
    <div id="MenuComponent">
      <MenuComponent />
    </div>
    <div><User /></div>
  </body>
</template>
<script>
// @ is an alias to /src

import MenuComponent from "@/components/MenuComponent.vue";
import User from "@/components/User.vue";
export default {
  name: "UserView",
  components: {
    MenuComponent,
    User,
  },
  data() {
    return {
      image: { backgroundImage: "url(https://via.placeholder.com/150)" },
    };
  },
};
</script>
<style scoped>
body {
  height: 100vh;
  background: #d5e6e9;
  z-index: 1;
  background-image: url("@/assets/Campus_Virtual_UNLa.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
