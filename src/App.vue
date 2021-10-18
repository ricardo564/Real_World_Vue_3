<template>
  <div class="grid justify-content-center">
      <TabMenu :model="items"/>
  </div>
  <router-view />
</template>

<script>
  import TabMenu from 'primevue/tabmenu';

export default {
  data() {
    return {
      items: [
        {label: 'Events', icon:'pi pi-fw pi-home', to:'/'},
        {label: 'About', icon:'pi pi-fw pi-file', to:'/about'},
        {label: 'Create', icon:'pi pi-fw pi-calendar', to:'/event/create'},
      ]
    }
  },
  components: {
    TabMenu,
  }
}
</script>

