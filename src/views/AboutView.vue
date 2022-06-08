<template>
  <div id="MenuComponent">
    <MenuComponent />
  </div>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
// @ is an alias to /src

import MenuComponent from "@/components/MenuComponent.vue";
export default {
  name: "AboutView",
  components: {
    MenuComponent,
  },
};
</script>
