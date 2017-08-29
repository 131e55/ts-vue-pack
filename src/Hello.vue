
<template>
  <div>
    <h1>Hello {{name}}❗</h1>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <div>
      <span v-for="nyan in nyans" class="nyan">{{nyan}}</span>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    name: String,
    multiplier: Number
  }
})

export default class Hello extends Vue {

  // data

  name: string
  multiplier: number
  count: number = 0

  // computed

  get nyans(): string[] {
    const all: string[] = ['🐱', '😺', '🙀', '😸', '😻', '😽', '😹', '😼', '😾']
    var nyans: string[] = []
    for (var i = 0; i < this.count * Number(this.multiplier); i ++) {
      const rand = Math.floor(Math.random() * all.length)
      nyans.push(all[rand])
    }
    return nyans
  }

  // methods

  increment() {
    this.count += 1
  }

  decrement() {
    if (this.count > 1) {
        this.count -= 1
    }
  }
}
</script>

<style>
button {
  font-size: 32px;
}

.nyan {
  font-size: 64px;
}
</style>
