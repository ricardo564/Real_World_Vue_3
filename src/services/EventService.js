import axios from 'axios'

const apiClient = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/ricardo564/FakeOnlineRest/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  },
  putEvent(id, event) {
    return apiClient.put('/events/' + id, event)
  },
}
