<template>
    <footer>
        <img src="./../assets/hblogo.small.png" alt="" class="logo">
        <div>Hand crafted in Las Vegas, NV</div>
        <a href="mailto:mrmarcmartino@gmail.com">
          mrmarcmartino@gmail.com
        </a>
        <a href="http://github.com/marcmartino">
          <icon name="github"></icon> marcmartino
        </a>
        <div>&copy; 2017 Marc Martino</div>
    </footer>
</template>

<script>
export default {
  name: 'sfFooter',
  methods: {
    search: function (e) {
      this.$route.router.go('/contacts')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .searchBar {
    background-color: rgba($sf-pink, .5);
    display: flex;
    flex-direction: row;
    justify-items: center;

    input {
      padding: 10px;

      @include for-tablet-portrait-up {
        padding: 15px;
      }
    }
  }

</style>
