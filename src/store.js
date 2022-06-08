import { reactive } from "vue";
// save our state (isPanel open or not)

export const store = reactive({
  isNavOpen: false,
  switch() {
    this.isNavOpen = !this.isNavOpen;
  },
});
