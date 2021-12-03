<template>
  <childCard>
    <template #title>
      <h1>{{ event.title }}</h1>
      <div id="nav">
        <router-link :to="{ name: 'EventDetails' }">Details</router-link>
        |
        <router-link :event="event" :to="{ name: 'EventRegister' }">
          Register
        </router-link>
        |
        <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
      </div>
    </template>

    <template #content>
      <router-view :event="event" />
    </template>
  </childCard>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import childCard from '@/components/childCard.vue'

export default {
  components: {
    childCard,
  },
  props: ['id'],
  created() {
    this.fetchEvent(this.id).catch((error) => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error },
      })
    })
  },
  computed: {
    ...mapState('event', ['events', 'event']),
  },
  methods: {
    ...mapActions('event', ['fetchEvent']),
  },
}
</script>
