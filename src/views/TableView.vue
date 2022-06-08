<Suspense>
<template>
  <router-view />

  <body>
    <main class="crypto_bg">
      <div id="MenuComponent">
        <MenuComponent />

        <div class="container text-center mt-5 mb-5">
          <div class="table-responsive my-5">
            <!-- The table component -->
            <Table :fields="fields" :studentData="studentData"></Table>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>
</Suspense>
<script>
// Importing the table component
import Table from "@/components/TableComponent.vue";
import MenuComponent from "@/components/MenuComponent.vue";

//importing bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import axios from "axios";

export default {
  name: "TableView",
  components: {
    MenuComponent,
    Table,
  },
  async setup() {
    let config = {
      headers: {
        Authorization: Cookies.get("authorization"),
      },
    };
    //An array of values for the data
    console.log("Estoy Aca");
    let studentData = [];

    const fields = [
      "number",
      "quantityOfChairs",
      "typeSolicitude",
      "blackboard",
      "quantityOfPC",
      "building",
    ];

    let data = "";
    await axios
      .get("http://localhost:8080/classroom", config)
      .then((response) => {
        data = response;
      });

    studentData = data;

    return { studentData, fields };
  },
};
</script>
<style scoped>
.container {
  background: #b5b5b7;
}

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
