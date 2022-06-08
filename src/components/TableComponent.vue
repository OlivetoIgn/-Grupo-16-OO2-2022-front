<template>
  <div class="about">
    <h1>Aulas</h1>
  </div>

  <div class="input-group">
    <input
      type="search"
      class="form-control"
      v-model="searchQuery"
      placeholder="Filtrar por tipo de Aula"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
    />
    <input
      type="search"
      class="form-control"
      v-model="searchQueryCourse"
      placeholder="Filtrar por cantidad de sillas"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
    />
  </div>
  <table id="tableComponent" class="table table-bordered table-hover">
    <caption>
      Seleccione el aula sobre la que quiere ver detalles
    </caption>
    <thead>
      <tr>
        <!-- loop through each value of the fields to get the table header -->
        <th v-for="field in fields" :key="field" @click="sortTable(field)">
          {{ field }}
          <i class="bi bi-sort-alpha-down" aria-label="Sort Icon"></i>
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- Loop through the list get the each student data -->
      <tr v-for="item in filteredList" :key="item" @click="select(item)">
        <td v-for="field in fields" :key="field">{{ item[field] }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { computed, ref } from "vue";
// Importing  the lodash library
import { sortBy } from "lodash";
import router from "@/router/index";

export default {
  name: "TableComponent",
  props: {
    studentData: {
      type: Array,
    },
    fields: {
      type: Array,
    },
    methods: {},
  },

  setup(props) {
    let sort = ref(false);
    let updatedList = ref([]);
    let searchQuery = ref("");
    let searchQueryCourse = ref("");
    // a function to sort the table
    const sortTable = (col) => {
      sort.value = true;
      // Use of _.sortBy() method
      updatedList.value = sortBy(props.studentData, col);
    };

    const sortedList = computed(() => {
      if (sort.value) {
        return updatedList.value;
      } else {
        return props.studentData;
      }
    });

    // Filter Search
    const filteredList = computed(() => {
      return sortedList.value
        .filter((product) => {
          return (
            product.typeSolicitude
              .toLowerCase()
              .indexOf(searchQuery.value.toLowerCase()) != -1
          );
        })
        .filter((product) => {
          return (
            product.quantityOfChairs
              .toString()
              .toLowerCase()
              .indexOf(searchQueryCourse.value.toLowerCase()) != -1
          );
        });
    });
    return {
      sortedList,
      sortTable,
      searchQuery,
      filteredList,
      searchQueryCourse,
      select,
    };
  },
};

function select(item) {
  router.push("/home");
  return console.log(item);
}
</script>

<style>
.table {
  background: #f9248f;
}
</style>
