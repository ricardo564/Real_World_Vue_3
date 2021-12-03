<template>
  <div v-if="!displayDialog" class="grid justify-content-center">
    <div id="onlineStatus">
      <div class="relative">
        <div class="absolute">
          <Avatar :image="userImage" shape="circle" size="xlarge" />
        </div>
        <span
          class="
            border-circle border-2 border-white
            inline-block
            h-2rem
            w-2rem
            absolute
            mt-6
          "
          :class="isOnline"
        />
      </div>
    </div>
    <div>
      <input
        class="border-round border-0"
        type="text"
        @click="displayDialog = true"
      />
    </div>
  </div>
  <div>
    <Dialog
      class="border-solid border-1 border-round border-primary surface-50"
      v-model:visible="displayDialog"
      :modal="true"
    >
      <template #header>
        <h3 class="mx-auto">Criar Evento</h3>
      </template>
      <form @submit.prevent="onSubmit">
        <div class="w-20rem h-auto justify-content-center m-auto">
          <div class="grid text-center p-1">
            <div class="col-12 flex p-0 m-0">
              <div class="col-3">
                <Avatar :image="userImage" shape="circle" size="large" />
              </div>
              <div class="col-4 p-0 m-0 grid align-content-start">
                <span>{{ this.$store.state.user.userInfo.name }}</span>
              </div>
            </div>
            <div class="col-12">
              <Textarea
                v-model="event.description"
                class="w-12 border-none"
                :autoResize="true"
                rows="3"
                placeholder="Descricação do evento"
                autofocus
              ></Textarea>
            </div>
            <div class="col-12 m-1">
              <div>
                <div class="grid grid-nogutter text-black-alpha-90">
                  <p class="mx-auto">Adicionar ao evento</p>
                </div>
                <div class="grid w-full">
                  <div class="col-12 w-max mx-auto">
                    <i
                      v-tooltip="'Nome do vento'"
                      class="col pi pi-pencil cursor-pointer"
                    ></i>
                    <input
                      type="text"
                      v-model="event.title"
                      placeholder="Nome do Evento"
                    />
                  </div>
                  <div class="col-12">
                    <i
                      v-tooltip="'Dia do evento'"
                      class="col pi pi-calendar cursor-pointer"
                    ></i>
                    <input
                      type="text"
                      v-model="event.date"
                      placeholder="Dia do evento"
                    />
                  </div>

                  <div class="col-12">
                    <i
                      v-tooltip="'Hora do evento'"
                      class="col pi pi-clock cursor-pointer"
                    ></i>
                    <input
                      type="text"
                      v-model="event.time"
                      placeholder="Hora do evento"
                    />
                  </div>
                  <div class="col-12">
                    <i
                      v-tooltip="'Categoria do evento'"
                      class="col pi pi-list cursor-pointer"
                    ></i>
                    <select v-model="event.category">
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
                </div>
              </div>
              <Button
                type="submit"
                label="Publicar"
                class="col-12 text-center p-button-successes p-button-raised"
              />
            </div>
          </div>
        </div>
      </form>
    </Dialog>
  </div>

  <Divider></Divider>
</template>

<script>
import Avatar from 'primevue/avatar'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import 'primeicons/primeicons.css'
import Dialog from 'primevue/dialog'
import Tooltip from 'primevue/tooltip'
import { v4 as uuidv4 } from 'uuid'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CreateEvent',
  data() {
    return {
      displayDialog: false,
      userImage:
        'https://pm1.narvii.com/6043/c50a9419f068068cc458986b81be78ead4b31f6e_128.jpg',
      online: true,
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
        id: null,
        category: null,
        title: null,
        description: null,
        location: null,
        date: null,
        time: null,
        organizer: this.$store.state.user.userInfo.name,
        popularity: 0,
      },
    }
  },
  directives: {
    tooltip: Tooltip,
  },
  components: {
    Avatar,
    Textarea,
    Button,
    Divider,
    Dialog,
  },
  methods: {
    ...mapActions('event', ['createEvent']),
    onSubmit() {
      const event = {
        ...this.event,
        id: uuidv4(),
        organizer: this.user.userInfo.name,
      }
      this.createEvent(event)
        .then(() => {
          this.$router.push({
            name: 'EventDetails',
            params: { id: event.id },
          })
        })
        .catch(() => {
          this.$router.push({
            name: 'NetworkError',
            /*params: { error: error },*/
          })
        })
    },
  },
  computed: {
    ...mapState(['user', ['userInfo', 'status']]),

    isOnline() {
      if (this.online) {
        return 'dot bg-green-500'
      }
      return 'dot surface-200'
    },
  },
}
</script>
<style scoped>
#onlineStatus Avatar {
  position: relative;
}
</style>
