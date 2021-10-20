<template>
    <div v-if="event.currentEvent">
        <Card>
            <template #title>
                <slot name="eventTitle"></slot>
            </template>
            <template #content>
                <slot name="eventTime"></slot>
            </template>
            <template #footer>
                <slot name="titleDescription"></slot>
            </template>
        </Card>
    </div>

    <base-layout-details>
        <template v-slot:Title>
            <h1>{{ event.currentEvent.title }}</h1>
        </template>

        <template v-slot:eventTime>
            <p> {{ event.currentEvent.time }} on {{ event.currentEvent.date }} 
        @ {{ event.currentEvent.location }}</p>
        </template>

        <template v-slot:titleDescription>
            <p>{{event.currentEvent.description }}</p>
        </template>
    </base-layout-details>
</template>



<script>
import { mapState, mapActions } from 'vuex'
import Card from 'primevue/card';

export default {
    components:{
        Card,
    },
    props: ['id'],
    created() {
        this.fetchEvent(this.id)
            .catch(error => {
                this.$router.push({
                    name: 'ErrorDisplay',
                    params: { error: error }
                })
            })
    },
    computed: {
        ...mapState(['event'])
    },
    methods: {
        ...mapActions('event', ['fetchEvent'])
    }
}
</script>
