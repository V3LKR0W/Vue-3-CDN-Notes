<template>
  <h1>{{title}}</h1>
  <teleport to='.modals' v-if='showModal'>
  <Modal theme='' @close='toggleModal'>
    <template v-slot:links>
      <a href='#'>Sign up now</a>
      <a href='#'>More info</a>
    </template>
    <h1>Title</h1>
    <p>This is a paragraph</p>
  </Modal>
  </teleport>

  <teleport to='.modals' v-if='showModalTwo'>
  <Modal @close='toggleModalTwo'>
    <h1>Signup for news letter</h1>
    <p>For updates and promos</p>
  </Modal>
  </teleport>

  <button @click='toggleModal'>Open modal (One)</button>
  <button @click='toggleModalTwo'>Open modal (Two)</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data(){
    return {
      title: 'My first vue app :)',
      showModal: false,
      showModalTwo: false,
    }
  }, 
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
