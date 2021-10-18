<template>
  <div class="
        md:col-7 
        lg:col-3
        m-1 grid 
        grid-nogutter 
        "
        @mouseover="hover = true" 
        @mouseleave="hover = false"
        :class="{ 'bg-primary' : hover }"
  >
    <div class="col-9 md:col-10 lg:col-9">
      <router-link class="no-underline"
      :to="{ name: 'EventDetails', params: { id: event.id } }">
        <Card>
          <template #title>{{ event.title }}</template>
          <template #content>
            <span>@{{ event.time }} on {{ event.date }}</span>
          </template>
          <template #footer class="p-card-footer">
            <p>Popularidade: {{ $store.popularity }}</p>
          </template>
        </Card>
      </router-link>
    </div>
    <div class="col-1 col-1 m-1 lg:col-2">
      <EventPromo :popularity="event.popularity" :organizer="event.organizer" />
    </div> 
  </div>
</template>

<script>
import Card from "primevue/card";
import EventPromo from '@/components/EventPromo.vue'
export default {
  data(){
    return {
      hover: false,
    }
  },
  methods:{
    
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

