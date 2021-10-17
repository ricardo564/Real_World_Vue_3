<template>
    <div>
        <div class="m-1">
            <Button v-on:click="vote()" >
                <i class="pi pi-star mt-1"> Cool!</i> 
            </Button>
        </div>
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
        vote(){
            this.counter++
        }
    }
}
</script>