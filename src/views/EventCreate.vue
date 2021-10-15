<template>
  <h1>Create an event</h1>
  <div class="card formgrid grid text-align-start justify-content-center">
    <form @submit.prevent="onSubmit">
      <div class="field col-12">
        <label>Select a categoy: </label>
        <select class="inputfield w-full" v-model="event.category">
          <option
            v-for="option in categories"
            :value="option"
            :key="option"
            :selected="option === event.category"
          >
            {{ option }}
          </option>
        </select>
      </div>

      <div class="field col-12">
        <h3>Name & describe your event</h3>
        <label>Title</label>
        <input
          class="inputfield w-full"
          v-model="event.title"
          type="text"
          placeholder="Title"
        />
      </div>

      <div class="field col-12">
        <label>Description</label>
        <textarea
          class="inputfield w-full"
          v-model="event.description"
          type="text"
          placeholder="Description"
          rows="4"
        />
      </div>

      <div class="field col-12">
        <h3>Where is your event?</h3>

        <label>Location</label>
        <input
          class="inputfield w-full"
          v-model="event.location"
          type="text"
          placeholder="Location"
        />
      </div>

      <div class="field col-12">
        <label>Date</label>
        <input class="inputfield w-full" v-model="event.date" type="text" />
      </div>

      <div class="field col-12">
        <label>Time</label>
        <input
          class="inputfield w-full"
          v-model="event.time"
          type="text"
          placeholder="Time"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community',
      ],
      event: {
        id: '',
        category: '',
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        organizer: this.$store.state.user,
        popularity: null,
      },
    }
  },
  methods: {
    ...mapActions('event', ['createEvent']),
    onSubmit() {
      const event = {
        ...this.event,
        id: uuidv4(),
        organizer: this.user.userInfo.name
      }
      this.createEvent(event)
        .then(() => {
          this.$router.push({
            name: 'EventDetails',
            params: { id: event.id },
          })
        })
        .catch( error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error}
          })
        })
    },
  },
  computed: {
    ...mapState(['user'])
  },
}
</script>