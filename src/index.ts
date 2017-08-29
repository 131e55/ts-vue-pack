
import Vue from "vue";
import HelloComponent from "./Hello.vue";

let v = new Vue({
  el: "#app",
  template: `
  <div>
    Name: <input v-model="name" type="text">
    <hello-component :name="name" :multiplier="2" />
  </div>
  `,
  data: { name: "World" },
  components: {
    HelloComponent
  }
});
