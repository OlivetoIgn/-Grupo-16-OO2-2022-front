<template>
  <div id="MenuComponent">
    <MenuComponent />
  </div>
  <div><ClassRoomComponent /></div>
</template>
<script>
import MenuComponent from "@/components/MenuComponent.vue";
import ClassRoomComponent from "@/components/ClassRoomComponent.vue";
export default {
  name: "UserView",
  components: {
    MenuComponent,
    ClassRoomComponent,
  },
};
</script>
