<template>
  <div v-if="!displayDialog" class="grid justify-content-center">
    <InputText
      class="border-round text-center h-2rem"
      type="text"
      placeholder="Crie um novomento clicando aqui."
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
        <h3 class="mx-auto">Criar Evento</h3>
      </template>
      <form @submit.prevent="onSubmit">
        <div class="">
          <div class="">
            <div class="">
              <div class="">
                <Avatar :image="userImage" shape="circle" size="large" />
              </div>
              <div class="">
                <span>{{ this.$store.state.user.userInfo.name }}</span>
              </div>
            </div>
            <div class="">
              <Textarea
                v-model="event.description"
                class=""
                :autoResize="true"
                rows="3"
                placeholder="Descricação do evento"
                autofocus
              ></Textarea>
            </div>
            <div class="">
              <div>
                <div class="">
                  <p class="mx-auto">Adicionar ao evento</p>
                </div>
                <div class="">
                  <div class="">
                    <i
                      v-tooltip="'Nome do vento'"
                      class="col pi pi-pencil cursor-pointer"
                    ></i>
                    <BaseInput
                      type="text"
                      v-model="event.title"
                      label="Nome do Evento"
                    />
                  </div>
                  <div class="col-12">
                    <i
                      v-tooltip="'Dia do evento'"
                      class="col pi pi-calendar cursor-pointer"
                    ></i>
                    <BaseInput
                      type="text"
                      v-model="event.date"
                      label="Dia do evento"
                    />
                  </div>

                  <div class="">
                    <i
                      v-tooltip="'Hora do evento'"
                      class="col pi pi-clock cursor-pointer"
                    ></i>
                    <BaseInput
                      type="text"
                      v-model="event.time"
                      label="Hora do evento"
                    />
                  </div>
                  <div class="">
                    <i
                      v-tooltip="'Categoria do evento'"
                      class="col pi pi-list cursor-pointer"
                    ></i>
                    <BaseSelect
                      :options="categories"
                      v-model="event.category"
                      label="Select a category"
                    />
                  </div>
                </div>
              </div>
              <Button type="submit" label="Publicar" class="" />
            </div>
          </div>
        </div>
      </form>
    </Dialog>
  </div>

  <Divider />
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { mapState, mapActions } from 'vuex'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Dialog from 'primevue/dialog'
import Tooltip from 'primevue/tooltip'
import InputText from '@/components/InputText'
import BaseInput from '@/components/BaseInput'
import BaseSelect from '@/components/BaseSelect'

import 'primeicons/primeicons.css'

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
    Textarea,
    Button,
    Divider,
    Dialog,
    InputText,
    BaseInput,
    BaseSelect,
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
