<template>
  <div>
    <div>
      <Button @click='handleClick'>
        {{ ePopularity }} <i class="pi pi-star mt-1"> </i>
      </Button>
    </div>
    
  </div>
</template>

<script>
import Button from 'primevue/button'
import { mapState } from 'vuex'

export default {
  name: 'EventPromo',
  emits: [
    'click'
  ],
  props:{
      ePopularity:{
          type: null,
          required: true
      }
  },
  computed: mapState([
    'popularity'
  ]),
  watch: {
    ePopularity: 'someActions',
  },
  methods: {
    someActions() {
      console.log('someActions watch')
    },
    handleClick(){
      this.$emit('click')
    }
  },
  components: {
    Button,
  },
}
</script>