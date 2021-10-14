<template>
    <h1>Create an event</h1>
    <div>
        <form class="card formgrid grid text-align-start justify-content-center" @submit.prevent="onSubmit">
            <div>
                <div class="field col-12">
                    <label>Select a categoy: </label>
                    <select 
                        class="inputfield w-full"
                        v-model="event.category"
                    >
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
                
                <div class="field col-12 ">
                    <h3>Name & describe your event</h3>
                    <label>Title</label>
                    <input
                        class="inputfield w-full"
                        v-model="event.title"
                        type="text"
                        placeholder="Title"
                    >
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
                    <input
                        class="inputfield w-full"
                        v-model="event.date"
                        type="text"
                    />
                </div>

                <div class="field  col-12">
                    <label>Time</label>
                    <input
                        class="inputfield w-full"
                        v-model="event.time"
                        type="text"
                        placeholder="Time"
                    />
                </div>


                <button class="button" type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return { 
            categories: [
                'sustainability',
                'nature',
                'animal welfare',
                'housing',
                'education',
                'food',
                'community'
            ],
            event: {
                id: '',
                category: '',
                title: '',
                description: '',
                location: '',
                date: '',
                time: '',
                organizer: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log("Event:", this.event)
        }
    }
}
</script>