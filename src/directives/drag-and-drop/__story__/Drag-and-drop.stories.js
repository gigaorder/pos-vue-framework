import { withKnobs } from '@storybook/addon-knobs';
import Draggable from '../draggable';
import Droppable from '../droppable';
import { Fragment } from 'vue-fragment';
import Vue from 'vue'

export default {
  title: 'Drag and drop',
  decorators: [withKnobs]
}

export const defaultDnd = () => ({
  components: {
    Fragment
  },
  data() {
    return {
      dropData: '',
      dragData: 'This is dropped content!'
    }
  },
  directives: {
    Draggable,
    Droppable
  },
  methods: {
    dragover(data, e) {
      this.dropData = 'drag-over!'
      e.target.style.outline = '5px solid red'
    },
    drop(data, e) {
      this.dropData = data
      e.target.style.outline = 'none'
    },
    dragLeave(data, e) {
      this.dropData = 'drag-left!'
    }
  },
  template: `
    <fragment>
      <div style="width: 600px; height: 300px; margin-bottom: 50px; background-color: aqua; color: black" v-draggable.move="dragData">
        Draggable
      </div>
      <div style="width: 800px; height: 400px; background-color: #37474f; color: white" v-droppable @drag-drop="drop" @drag-over="dragover" @drag-leave="dragLeave">
        Drop zone
        <div>{{dropData}}</div>
      </div>
    </fragment>`
})

export const components = () => ({
  components: {
    simpleList
  },
  data() {
    return {
      dropData: '',
      items: [
        { text: 'Jason Oner', prepend: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { text: 'Ranee Carlson', prepend: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { text: 'Cindy Baker', prepend: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { text: 'Ali Connors', prepend: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
      ],
      items1: [{ text: 'Jason Oner', prepend: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { text: 'Ranee Carlson', prepend: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { text: 'Cindy Baker', prepend: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { text: 'Ali Connors', prepend: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },],
      items2: [],
      items3: [{ text: 'Jason Oner', prepend: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { text: 'Ranee Carlson', prepend: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { text: 'Cindy Baker', prepend: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { text: 'Ali Connors', prepend: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },],
      items4: [],
    }
  },
  directives: {
    Draggable,
    Droppable
  },
  methods: {
    dragstart(item) {
    },
    dragover(item, e) {
    },
    dragend(items) {
      return (dropItem, e) => {
        console.log(dropItem)
        items.splice(items.indexOf(dropItem), 1)
      }
    },
    drop(items) {
      return (dropItem, e) => {
        console.log(dropItem)
        items.push(dropItem)
      }
    },
    dragend1(item, e) {
      this.items1.splice(this.items1.indexOf(item), 1)
    },
    drop1(item, e) {
      this.items1.push(item)
    },
    dragend2(item, e) {
      this.items2.splice(this.items2.indexOf(item), 1)
    },
    drop2(item, e) {
      this.items2.push(item)
    },
    dragend3(item, e) {
      this.items3.splice(this.items3.indexOf(item), 1)
    },
    drop3(item, e) {
      this.items3.push(item)
    },
    dragend4(item, e) {
      this.items4.splice(this.items4.indexOf(item), 1)
    },
    drop4(item, e) {
      this.items4.push(item)
    },

  },
  template: `
    <div style="height: 500px">
      <div style="text-align: center; font-size: larger">Namespace 1</div>
      <div style="display: flex">
        <simple-list :items="items1" v-droppable:namepsace1 @drag-drop="drop1" style="margin-right: 50px">
          <template #item="{item}">
            <div v-draggable:namepsace1.move="item" @drag-end="dragend1" :key="item.text"
                 style="border: 1px solid black; margin: 2px; padding: 2px">{{item.text}}
            </div>
          </template>
        </simple-list>
        <simple-list :items="items2" v-droppable:namepsace1 @drag-drop="drop2">
          <template v-if="!items2.length">Drop items here!</template>
          <template #item="{item}">
            <div v-draggable:namepsace1.move="item" @drag-end="dragend2" :key="item.text"
                 style="border: 1px solid black; margin: 2px; padding: 2px">{{item.text}}</div>
          </template>
        </simple-list>
      </div>

      <div style="text-align: center; font-size: larger">Namespace 2</div>
      <div style="display: flex">
        <simple-list :items="items3" v-droppable:namepsace2 @drag-drop="drop3" style="margin-right: 50px">
          <template #item="{item}">
            <div v-draggable:namepsace2.move="item" @drag-end="dragend3" :key="item.text"
                 style="border: 1px solid black; margin: 2px; padding: 2px">{{item.text}}
            </div>
          </template>
        </simple-list>
        <simple-list :items="items4" v-droppable:namepsace2 @drag-drop="drop4">
          <template v-if="!items4.length">Drop items here!</template>
          <template #item="{item}">
            <div v-draggable:namepsace2.move="item" @drag-end="dragend4" :key="item.text"
                 style="border: 1px solid black; margin: 2px; padding: 2px">{{item.text}}</div>
          </template>
        </simple-list>
      </div>
    </div>`
})

export const file = () => ({
  directives: {
    Draggable,
    Droppable
  },
  methods: {
    dragover(files, e) {
      this.dropData = `${files.length} items dragged over!`
    },
    drop(files, e) {
      if (files && files.length) {
        this.dropData = `Files: [${Array.from(files).map(f => f.name).join(', ')}]`
      } else this.dropData = `No files dropped!`
    }
  },
  data() {
     return {
       dropData: ''
     }
  },
  template: `
    <div>
      <div style="width: 800px; height: 400px; background-color: #37474f; color: white" v-droppable.file @drag-drop="drop" @drag-over="dragover">
        Drop zone
        <div>{{dropData}}</div>
      </div>
    </div>`
})

const simpleList = Vue.extend({
  props: {
    items: Array
  },
  template: `
    <div style="height: 200px; width: 200px; outline: 1px solid black">
      <slot>
        <template v-for="item in items">
          <slot name="item" :item="item">
            <li>{{item.text}}</li>
          </slot>
        </template>
      </slot>
    </div>
  `
})