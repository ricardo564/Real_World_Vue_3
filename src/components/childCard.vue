<template>
  <div class="grid justify-content-center">
    <div class="col-12 md:col-6">
      <PrimeCard>
        <template #header>
          <div>
            <slot name="header"></slot>
          </div>
        </template>
        <template #title>
          <div>
            <slot name="title"></slot>
          </div>
        </template>
        <template #subtitle>
          <div>
            <slot name="subtitle"></slot>
          </div>
        </template>
        <template #content>
          <div>
            <slot name="content"></slot>
          </div>
        </template>
        <template #footer>
          <div>
            <slot name="footer"></slot>
          </div>
        </template>
      </PrimeCard>
    </div>
  </div>
</template>

<script>
import PrimeCard from 'primevue/card'
export default {
  components: {
    PrimeCard,
  },
}
</script>
