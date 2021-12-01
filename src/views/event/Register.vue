<template>
  <p>Register for the event here.</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['id'],
  methods: {
    register() {
      // Call to API //
      // If registered then redirect to details //
      this.$router.push({
        name: 'EventDetails',
        // params: { id: this.event.id }, //
      })
    },
  },
}
</script>
