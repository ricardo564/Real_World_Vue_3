<template>
  <div>
    <PrimeButton>
      <slot />
    </PrimeButton>
  </div>
</template>

<script>
import PrimeButton from 'primevue/button'

export default {
  name: 'Button',
  components: {
    PrimeButton,
  },
}
</script>

<style></style>
