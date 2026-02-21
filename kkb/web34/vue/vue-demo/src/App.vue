<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <svg-icon className="test" iconClass="home"></svg-icon>
        Home
      </router-link>
      |
      <router-link to="/about">
        <svg-icon iconClass="about"></svg-icon>
        About
      </router-link>
      |
      <router-link to="/element">
        <svg-icon iconClass="element"></svg-icon>
        Element
      </router-link>
    </nav>

    <!-- <p @click="$store.commit('add')">{{ $store.state.count }}</p>
    <p @click="$store.dispatch('add')">async {{ $store.state.count }}</p> -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
