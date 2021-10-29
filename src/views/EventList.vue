<template>
  <div>
    <div class="grid">
      <div class="grid col-12 md:col-12">
        <h1 class="m-auto">Events for {{ user.userInfo.name }}</h1>
      </div>
      <div class="col-12">
        <CreateEvent userName="Camillus"></CreateEvent>
      </div>
      <div class="m-auto">
        <EventCard v-for="event in oEvent" :key="event.id" :event="event">
        </EventCard>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState, mapActions } from 'vuex'
import CreateEvent from '@/components/createEvent.vue'

export default {
  name: 'EventList',
  components: {
    EventCard,
    CreateEvent,
  },
  created() {
    this.fetchEvents().catch((error) => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error },
      })
    })
  },
  computed: {
    ...mapState(['event', 'user']),
    oEvent() {
      const eOrdered = this.event.events
      return eOrdered.sort((a, b) => {
        return (
          +(a.popularity < b.popularity) || +(a.popularity === b.popularity) - 1
        )
      })
    },
    eGetter() {
      console.log(this.$store)
      return this.$store.getters['user/listTodos']
    },
  },
  methods: {
    ...mapActions('event', ['fetchEvents']),
  },
}
</script>
