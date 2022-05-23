<template>
  <div class="container">
    <h1 class="text-center">User List</h1>

    <table class="table table-striped">
      <thead>
        <th>User id</th>
        <th>Username</th>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.userName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import UserService from "@/services/UserService";
export default {
  name: "UserComponent",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getUsers() {
      UserService.getUsers().then((response) => {
        this.users = response.data;
      });
    },
  },
  created() {
    this.getUsers();
  },
};
</script>
