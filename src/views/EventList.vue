<template>
  <div>
    <div class="grid">
      <!--<div class="grid col-12 md:col-12">
        <h1 class="m-auto">Events for {{ user.userInfo.name }}</h1>
      </div>-->
      <div class="col-12">
        <CreateEvent />
      </div>
      <div class="m-auto">
        <router-link
          class="no-underline"
          :to="{ name: 'EventDetails', params: { id: event.id } }"
          v-for="event in orderedEvents"
          :key="event.id"
        >
          <EventCard :event="event"> </EventCard>
        </router-link>
      </div>
      <div class="col-12 grid justify-content-center mx-auto">
        <div class="mx-auto">
          <router-link
            class="col"
            :to="{ name: 'EventList', query: { page: page - 1 } }"
            rel="prev"
            v-if="page != 1"
          >
            &#60; Prev Page
          </router-link>
          <router-link
            class="col"
            :to="{ name: 'EventList', query: { page: page + 1 } }"
            rel="next"
            v-if="hasNextPage"
          >
            Next Page &#62;
          </router-link>
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

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard,
    CreateEvent,
  },
  created() {
    watchEffect(() => {
      this.events = null
      const params = {
        perPage: 2,
        page: this.page,
      }
      this.fetchEvents(params)
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
