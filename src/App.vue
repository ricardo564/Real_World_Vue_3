<template>
  <div class=" grid justify-content-center p-tabmenu">
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
        {label: 'Event Create', icon:'pi pi-fw pi-calendar', to:'/event/create'},
      ]
    }
  },
  components: {
    TabMenu,
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app {
  padding: 30px;
}

#app a {
  font-weight: bold;
  color: #2c3e50;
}

#app a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>
