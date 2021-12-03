<template>
  <h1>Oops!</h1>
  <h3>The {{ resource }} you're looking for is not here.</h3>
  <router-ling :to="{ name: 'EventList' }"> Back to the home page</router-ling>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page',
    },
  },
}
</script>
