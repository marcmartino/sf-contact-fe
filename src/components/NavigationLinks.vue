<template>
  <nav>
      <router-link class="navLink"
                   v-for="link in links"
                   v-bind:to="link.href">
          {{link.name}}</router-link>
  </nav>
</template>

<script>
export default {
  name: 'navigationLinks',
  data: function () {
    return {
      links: [
        {name: 'Home', href: '/'},
        {name: 'Browse', href: '/browse'},
        // {name: ' - Starred', href: '/browse?only=starred'},
        {name: 'Create', href: '/create'},
        {name: 'Sign Out', href: '/signOut'}
      ]
    }
  },
  methods: {
    search: function (e) {
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .navLink {
      padding: 5px;
  }

</style>
