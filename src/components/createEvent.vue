<template>
  <div v-if="!displayDialog" class="grid justify-content-center">
    <Avatar :image="userImage" shape="circle" size="large" />

    <input
      class="border-round border-0"
      type="text"
      @click="displayDialog = true"
    />
  </div>
  <div>
    <Dialog
      class="border-solid border-1 border-round border-primary surface-50"
      v-model:visible="displayDialog"
      :modal="true"
    >
      <template #header>
        <h3>Criar Evento</h3>
      </template>
      <form @submit.prevent="onSubmit">
        <div class="w-20rem h-auto justify-content-center m-auto">
          <div class="grid text-center p-1">
            <div class="col-12 p-0 m-0"></div>
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
            <div class="col-12 border-1 border-round border-primary m-1">
              <div class="flex text-black-alpha-90">
                <p>Adicionar ao evento</p>
              </div>
              <div class="grid">
                <i
                  v-tooltip="'Nome do vento'"
                  class="col pi pi-pencil cursor-pointer"
                ></i
                ><input
                  type="text"
                  v-model="event.title"
                  placeholder="Nome do Evento"
                />

                <i
                  v-tooltip="'Dia do evento'"
                  class="col pi pi-calendar cursor-pointer"
                ></i>
                <input
                  type="text"
                  v-model="event.date"
                  placeholder="Dia do evento"
                />

                <i
                  v-tooltip="'Hora do evento'"
                  class="col pi pi-clock cursor-pointer"
                ></i>
                <input
                  type="text"
                  v-model="event.time"
                  placeholder="Hora do evento"
                />

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
                <FileUpload
                  name="demo[]"
                  url="./upload"
                  :multiple="true"
                  :fileLimit="1"
                />
              </div>
            </div>
            <Button
              type="submit"
              label="Publicar"
              class="col-12 text-center p-button-successes p-button-raised"
            />
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
import FileUpload from 'primevue/fileupload'

export default {
  name: 'CreateEvent',
  props: {
    userName: String,
  },
  data() {
    return {
      displayDialog: false,
      userImage:
        'https://pm1.narvii.com/6043/c50a9419f068068cc458986b81be78ead4b31f6e_128.jpg',
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
    FileUpload,
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
        .catch((error) => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error },
          })
        })
    },
  },
  computed: {
    ...mapState(['user']),
  },
}
</script>
