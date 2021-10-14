<template>
  <div id="app">
    <router-link :to="{ name: 'EventList'}">
      Events
    </router-link> |
    <router-link :to="{ name: 'About'}">
      About
    </router-link> |
    <router-link :to="{ name: 'EventCreate'}">
      Event Create
    </router-link>
  </div>

  <router-view />
</template>

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
