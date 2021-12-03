<template>
  <h4>Oops! There was an error:</h4>
  <p>{{ error }}</p> 
  <a href="#" @click="$router.go(-1)"> clicke here</a> to try again.
</template>

<script>
export default {
  props: ['error'],
}
</script>
