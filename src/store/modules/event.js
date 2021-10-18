import EventService from '@/services/EventService.js'

export default {
    namespaced: true,
    state: {
        events: [],
        currentEvent: {},
    },
    mutations: {
        ADD_EVENT(state, event) {
            state.events.push(event)
        },
        SET_EVENT(state, event) {
            state.currentEvent = event
        },
        SET_EVENTS(state, events) {
            state.events = events
        },
        VOTE_EVENT(state, event) {
            event.popularity += 1
        }
    },
    actions: {
        voteEvent({commit,  state}, id){
            const eVote = state.events.find(event => event.id == id)
            commit('VOTE_EVENT', eVote)
            console.log(eVote)
            return EventService.putEvent(id, eVote)
        },
        createEvent({ commit }, event) {
            return EventService.postEvent(event)
            .then(() => {
                commit('ADD_EVENT', event)
            })
            .catch(error => {
                throw(error)
            })
        },
        fetchEvents({ commit }) {
            return EventService.getEvents()
            .then(response => {
                commit('SET_EVENTS', response.data)
            })
            .catch(error => {
                throw(error)
            })
        },
        fetchEvent({ commit, state }, id) {  
            const existingEvent = state.events.find(event => event.id === id)
            if (existingEvent) {
                    commit('SET_EVENT', existingEvent)
                } else {
                    return EventService.getEvent(id)
                        .then(response => {
                            commit('SET_EVENT', response.data)
                        })
                        .catch(error => {
                            throw(error)
                        })
                }
        }
    }
}

