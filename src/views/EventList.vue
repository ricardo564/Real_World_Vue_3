<template>
    <div>
      <div class="grid col-12 justify-content-center"> 
        <p>Getter Test: {{ eGetter }} </p>
        <h1>Events for {{ user.userInfo.name }}</h1>
      </div>
      <div>
        <EventCard v-for="event in oEvent" :key="event.id" :event="event" />
      </div>
    </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  created() {
    this.fetchEvents()
      .catch(error => {
        this.$router.push({
          name: 'ErrorDisplay',
          params: { error: error}
        })
      })
  },
  computed: {
    ...mapState(['event', 'user']),
    oEvent(){
      const eOrdered = this.event.events
      return eOrdered.sort((a, b) => {
        return +(a.popularity < b.popularity) || +(a.popularity === b.popularity ) -1;
      })
    },
    eGetter() {
      console.log(this.$store)
      return this.$store.getters['user/listTodos']
    }
  },
  methods: {
    ...mapActions('event', ['fetchEvents'])
  }

}
</script>
