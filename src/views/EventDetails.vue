<template>
    <childCard>
        <template #title>
            <h1>{{ event.currentEvent.title }}</h1>
        </template>
        
        <template #content>
            <p>{{event.currentEvent.description }}</p>
        </template>
        <template #footer>
            <div>
                <span>{{ event.currentEvent.time }} </span>
                <span>on {{ event.currentEvent.date }} </span>
                <span>
                    @ {{ event.currentEvent.location }}
                </span>
            </div>
        </template>
    </childCard>
</template>


<script>
import { mapState, mapActions } from 'vuex'
import childCard from '@/components/childCard.vue'

export default {
    components:{
        childCard,
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
