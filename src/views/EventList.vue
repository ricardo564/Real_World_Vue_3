<template>
  <div>
    <div class="grid">
      <div class="col-12">
        <CreateEvent />
      </div>
      <div class="mx-auto">
        <router-link
          class="no-underline"
          :to="{ name: 'EventLayout', params: { id: event.id } }"
          v-for="event in orderedEvents"
          :key="event.id"
        >
          <EventCard :event="event"> </EventCard>
        </router-link>
        <div class="mt-2 mx-auto flex grid-nogutter p-2">
          <div class="col-6">
            <router-link
              class="col no-underline"
              :to="{ name: 'EventList', query: { page: page - 1 } }"
              rel="prev"
              v-if="page != 1"
            >
              <Button> &#60; Prev Page </Button>
            </router-link>
          </div>
          <div class="col-6 text-right">
            <router-link
              class="col no-underline"
              :to="{ name: 'EventList', query: { page: page + 1 } }"
              rel="next"
              v-if="hasNextPage"
            >
              <Button>Next Page &#62;</Button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState, mapActions } from 'vuex'
import { watchEffect } from 'vue'
import CreateEvent from '@/components/createEvent.vue'
import Button from '@/components/Button'

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard,
    CreateEvent,
    Button,
  },
  created() {
    watchEffect(() => {
      this.events = null
      const params = {
        perPage: 2,
        page: this.page,
      }
      return this.fetchEvents(params)
    })
  },
  computed: {
    ...mapState('event', ['events', 'user', 'totalEvents']),

    orderedEvents() {
      const eOrdered = this.events
      return eOrdered.sort((a, b) => {
        return (
          +(a.popularity < b.popularity) || +(a.popularity === b.popularity) - 1
        )
      })
    },

    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / 2)

      return this.page < totalPages
    },
  },
  methods: {
    ...mapActions('event', ['fetchEvents']),
  },
}
</script>
