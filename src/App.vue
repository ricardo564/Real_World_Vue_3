<template>
  <div>
    <TabMenu class="m-auto w-min p-2" :model="items" />
  </div>
  <router-view />
</template>

<script>
import TabMenu from 'primevue/tabmenu'
// import primevue themes';
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

export default {
  data() {
    return {
      items: [
        { label: 'Events', icon: 'pi pi-fw pi-home', to: '/' },
        { label: 'About', icon: 'pi pi-fw pi-file', to: '/about' },
        { label: 'Create', icon: 'pi pi-fw pi-calendar', to: '/event/create' },
      ],
    }
  },
  components: {
    TabMenu,
  },
}
</script>
