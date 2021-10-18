<template>
  <div class="grid grid-nogutter" @mouseover="hover = true" 
        @mouseleave="hover = false"
        :class="{ 'bg-primary' : hover }"
  >
    <div class="col-9 m-1">
      <router-link class="no-underline"
      :to="{ name: 'EventDetails', params: { id: event.id } }">
        <Card>
          <template #title>{{ event.title }}</template>
          <template #content>
            <span>@{{ event.time }} on {{ event.date }}</span>
          </template>
        </Card>
      </router-link>
    </div>
    <div class="col-1">
      <EventPromo :ePopularity="event.popularity"  @click="voteEvent(event.id)"/>
    </div> 
  </div>
</template>

<script>
import Card from "primevue/card";
import EventPromo from '@/components/EventPromo.vue'
import { mapActions } from "vuex"
export default {
  data(){
    return {
      hover: false,
    }
  },
  methods:{
    ...mapActions('event', ['voteEvent'])
  },
  components: { 
    Card,
    EventPromo
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  },
}
</script>

