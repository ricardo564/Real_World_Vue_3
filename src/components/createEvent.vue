<template>
  <form>
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
                <span>{{ userName }}</span>
                <!--<select class="w-full inputfield">
                <option>Publico</option>
                <option>Apenas amigos</option>
                <option>Privado</option>
              </select>-->
              </div>
            </div>
            <div class="col-12">
              <Textarea
                class="w-12 border-none"
                :autoResize="true"
                rows="3"
                placeholder="Descricação do evento"
              />
            </div>
            <div class="col-12 border-1 border-round border-primary m-1">
              <div class="flex text-black-alpha-90">
                <p>Adicionar ao evento</p>
              </div>
              <div class="grid">
                <i
                  @click="toggle"
                  v-tooltip="'Nome do vento'"
                  class="col pi pi-pencil"
                ></i>
                <OverlayPanel ref="op">
                  <img
                    src="demo/images/nature/nature1.jpg"
                    alt="Nature Image"
                  />
                </OverlayPanel>
                <i v-tooltip="'Dia do evento'" class="col pi pi-calendar"></i>
                <i v-tooltip="'Hora do evento'" class="col pi pi-clock"></i>
                <i v-tooltip="'Categoria do evento'" class="col pi pi-list"></i>
              </div>
            </div>
            <Button
              label="Publicar"
              class="col-12 text-center p-button-successes p-button-raised"
            />
          </div>
        </div>
      </Dialog>
    </div>
  </form>
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
import OverlayPanel from 'primevue/overlaypanel'

export default {
  name: 'CreateEvent',
  props: {
    userName: String,
  },
  data() {
    return {
      displayDialog: false,
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
    OverlayPanel,
  },
  action: {
    toggle(event) {
      this.$refs.op.toggle(event)
    },
  },
}
</script>
