<template>
    <div>
        <Button v-on:click="counter++">
            {{counter}}<i class="pi pi-star"> Cool!</i> 
        </Button>
    </div>
</template>

<script>
import Button from 'primevue/button';

export default {
    name:'EventPromo',
    props:{
        id: {
            type: String,
            required: true
        },
        organizer:{
            type: String,
            required: true
        },
        popularity:{
            type: Number,
        }
    },
    components: {
        Button
    },
    data(){
        return {
            counter: 0
        }
    },
    methods: {

    }
}
</script>