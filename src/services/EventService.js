import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/ricardo564/FakeOnlineRest',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents(params) {
    return apiClient.get(
      '/events?_limit=' + params.params.perPage + '&_page=' + params.params.page
    )
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
