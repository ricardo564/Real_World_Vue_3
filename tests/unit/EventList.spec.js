import { mount } from '@vue/test-utils'
import EventList from '@views/EventList'
import store from '@store'
import router from '@router'

describe('EventList', () => {
  it('Should render the events', () => {
    mount(EventList, {
      global: {
        plugins: [store, router],
      },
    })
  })
})
