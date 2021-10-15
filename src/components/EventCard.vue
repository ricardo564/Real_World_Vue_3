<template>
  <div class="col-4 m-1 grid">
    <div class="col-9">
      <router-link
      :to="{ name: 'EventDetails', params: { id: event.id } }">
        <Card>
          <template #title>{{ event.title }}</template>
          <template #content>
            <span>@{{ event.time }} on {{ event.date }}</span>
          </template>
        </Card>
      </router-link>
    </div>
    <div class="col-2 m-1 ">
      <EventPromo :id="event.id" :organizer="event.organizer" />
    </div> 
  </div>
</template>

<script>
import Card from "primevue/card";
import EventPromo from '@/components/EventPromo.vue'
export default {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
