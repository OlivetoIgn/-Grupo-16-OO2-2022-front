<template>
  <div id="app">
    <SidebarComponent>
      <ul class="sidebar-panel-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#users">Users</a></li>
        <li><a href="#table">Aula</a></li>
      </ul>
    </SidebarComponent>
    <div>
      <nav class="main-nav">
        <BurguerComponent></BurguerComponent>
      </nav>
    </div>
  </div>
</template>
<script>
import BurguerComponent from "@/components/BurguerComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";

export default {
  name: "MenuComponent",
  components: {
    BurguerComponent,
    SidebarComponent,
  },
};
</script>
<style scoped>
html {
  height: 100%;
  overflow: hidden;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 2.5rem;
  display: block;
  padding-bottom: 0.5em;
}
</style>
