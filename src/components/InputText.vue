<template>
  <div>
    <PrimeText>
      <slot />
    </PrimeText>
  </div>
</template>

<script>
import PrimeText from 'primevue/inputtext'

export default {
  name: 'InputText',
  components: {
    PrimeText,
  },
}
</script>

<style></style>
