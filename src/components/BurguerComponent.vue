<template>
  <div id="burger" :class="{ active: isBurgerActive }" @click.prevent="toggle">
    <slot class="slot">
      <button type="button" class="burger-button" title="Menu">
        <span class="hidden">Toggle menu</span>
        <span class="burger-bar burger-bar--1"></span>
        <span class="burger-bar burger-bar--2"></span>
        <span class="burger-bar burger-bar--3"></span>
        <div class="back"><h3 class="menu">MENU</h3></div>
      </button>
    </slot>
  </div>
</template>
<script>
import { store } from "@/store.js";

export default {
  name: "BurguerComponent",
  data() {
    return {
      store,
    };
  },

  computed: {
    isBurgerActive() {
      return store.isNavOpen;
    },
  },
  methods: {
    toggle() {
      store.switch();
    },
  },
};
</script>
<style scoped>
.hidden {
  visibility: hidden;
}

button {
  cursor: pointer;
}

/* remove blue outline */
button:focus {
  outline: 0;
}

.burger-button {
  position: absolute;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: #000000;
  position: absolute;
  top: 50%;
  right: -5px;
  left: 10px;
  height: 10px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: rgb(255, 255, 255);
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}
.menu {
  position: relative;
  top: 77px;
  left: 15px;
  transform: translateY(6px);
  z-index: 2;
}
.back {
  position: absolute;
  top: -75px;
  left: -5px;
  height: 200px;
  width: 200px;
  display: block;
  z-index: 1;
  border: 0;
  border-radius: 100;
  background-image: url("@/assets/pngegg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
