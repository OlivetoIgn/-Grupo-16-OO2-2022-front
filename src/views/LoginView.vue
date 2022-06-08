<template>
  <div class="login">
    <h1 class="title">Sistema Aulas</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#email">Email:</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      />
      <label class="form-label" for="#password">Password:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Password"
      />
      <p v-if="error" class="error">
        Has introducido mal el email o la contraseña.
      </p>
      <input class="form-submit" type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import LoginService from "@/services/LoginService";
export default {
  data: () => ({
    email: "",
    password: "",
    error: false,
  }),
  methods: {
    async login() {
      try {
        await LoginService.login(this.email, this.password);
        this.$router.push("/home");
      } catch {
        this.error = true;
      }
    },
  },
};
</script>
<style></style>
