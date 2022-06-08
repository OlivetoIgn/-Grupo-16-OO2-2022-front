<template>
  <div class="container">
    <h1 class="text-center">Class room list</h1>

    <table id="tableComponent" class="table table-bordered table-striped">
      <thead>
        <th>classRoom id</th>
        <th>Tipo</th>
      </thead>
      <tbody>
        <tr v-for="classRoom in classRooms" v-bind:key="classRoom.id">
          <td>{{ classRoom.id }}</td>
          <td>{{ classRoom.typeSolicitude }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import ClassRoomService from "@/services/ClassRoomService";
export default {
  name: "ClassRoomComponent",
  data() {
    return {
      classRooms: [],
    };
  },
  methods: {
    getClassRoom() {
      ClassRoomService.getClassRoom().then((response) => {
        this.classRooms = response.data;
      });
    },
  },
  created() {
    this.getClassRoom();
  },
};
</script>
