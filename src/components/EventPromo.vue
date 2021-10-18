<template>
  <div>
    <div class="m-1">
      <Button @click="$store.commit('VOTE_EVENT')">
        {{ popularity }} <i class="pi pi-star mt-1"> Cool!</i>
      </Button>
      <div>
        votos: {{ $store.popularity}} .
      </div>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'

export default {
  name: 'EventPromo',
  props:{
      popularity:{
          type:null,
          required: true
      },
      organizer:{
          type: null,
          required: true
      }
  },
  components: {
    Button,
  },
}
</script>