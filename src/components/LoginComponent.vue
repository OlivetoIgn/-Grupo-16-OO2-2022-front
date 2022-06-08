<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Usuario</label>
      <input
        type="text"
        v-model="userName"
        name="userName"
        placeholder="Ingrese su email"
      />
    </div>
    <div class="form-control">
      <label>Contraseña</label>
      <input
        type="text"
        v-model="password"
        name="password"
        placeholder="Ingrese Su Contraseña"
      />
    </div>
    <input type="submit" value="Ingresar" class="btn btn-block" />
  </form>
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
