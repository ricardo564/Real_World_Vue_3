<template>
  <div class="grid justify-content-center">
    <Avatar
      image="https://scontent.fbau3-2.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/242290915_4337883762964775_7725610008623161220_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGYBkpzki1v_G_6Nmpf4wrCpVpomE1jSE2lWmiYTWNITd-MZ_lOdufOsf73JC5XsPCKUuEKMCPufC7q_qPunevI&_nc_ohc=263YlN0RuYQAX-NCE-z&_nc_ht=scontent.fbau3-2.fna&oh=51a92a061b474d68fa094a7f35687904&oe=619EFE5A"
      shape="circle"
      size="large"
    />

    <input
      class="border-round border-0"
      type="text"
      @click="displayDialog = true"
    />
  </div>
  <div>
    <Dialog
      class="border-solid border-1 border-round border-primary surface-50"
      header="Criar Evento"
      v-model:visible="displayDialog"
    >
      <form @submit.prevent="onSubmit">
        <div class="w-20rem h-auto justify-content-center m-auto">
          <div class="grid text-center p-1">
            <div class="col-12 p-0 m-0"></div>
            <div class="col-12 flex p-0 m-0">
              <div class="col-3">
                <Avatar
                  image="https://scontent.fbau3-2.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/242290915_4337883762964775_7725610008623161220_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGYBkpzki1v_G_6Nmpf4wrCpVpomE1jSE2lWmiYTWNITd-MZ_lOdufOsf73JC5XsPCKUuEKMCPufC7q_qPunevI&_nc_ohc=263YlN0RuYQAX-NCE-z&_nc_ht=scontent.fbau3-2.fna&oh=51a92a061b474d68fa094a7f35687904&oe=619EFE5A"
                  shape="circle"
                  size="large"
                />
              </div>
              <div class="col-4 p-0 m-0 grid align-content-start">
                <span>{{ this.$store.state.user.userInfo.name }}</span>
                <!--<select class="w-full inputfield">
                <option>Publico</option>
                <option>Apenas amigos</option>
                <option>Privado</option>
              </select>-->
              </div>
            </div>
            <div class="col-12">
              <Textarea
                v-model="event.description"
                class="w-12 border-none"
                :autoResize="true"
                rows="3"
                placeholder="Descricação do evento"
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

export default {
  name: 'CreateEvent',
  props: {
    userName: String,
  },
  data() {
    return {
      displayDialog: false,
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
