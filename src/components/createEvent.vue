<template>
  <form>
    <div class="w-22rem h-auto justify-content-center m-auto">
      <div
        class="
          grid
          text-center
          border-solid border-1 border-round border-primary
          p-1
          surface-50
        "
      >
        <div class="col-12 p-0 m-0">
          <h2 class="p-0 m-0 text-primary">Criar Evento</h2>
          <Divider class="p-0 m-0" type="solid" />
        </div>
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
            <select class="w-full inputfield">
              <option>Publico</option>
              <option>Apenas amigos</option>
              <option>Privado</option>
            </select>
          </div>
        </div>
        <div class="col-12">
          <Textarea
            class="w-12 border-none surface-50"
            v-model="value"
            :autoResize="true"
            rows="5"
            placeholder="Descreva seu evento"
          />
        </div>
        <div class="col-12">
          <div>
            <div>
              <p>Adicionar a seu Evento</p>
            </div>
          </div>
        </div>
        <Button
          label="Publicar"
          class="col-12 text-center p-button-successes p-button-raised"
        />
      </div>
    </div>
  </form>
</template>

<script>
import Avatar from 'primevue/avatar'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

export default {
  name: 'CreateEvent',
  props: {
    userName: String,
  },
  components: {
    Avatar,
    Textarea,
    Button,
    Divider,
  },
}
</script>
