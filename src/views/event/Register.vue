<template>
  <p>Register for the event here.</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props:{
    event:{
      type: Array,
      default: () => []
    }
  },
  inject: ['GStore'],
  methods: {
    register() {
      this.GStore.flashMessage =
        'Yu are successful registered for  ' + this.event.title

      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)

      console.log('message:', this.GStore.flashMessage)

      this.$router.push({
        name: 'EventDetails',
        // params: { id: this.event.id }, //
      })
    },
  },
}
</script>
