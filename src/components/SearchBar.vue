<template>
  <form class="searchBar" v-on:submit="search">
    <input type="text" placeholder="Search Contacts">
    <button type="submit" class="searchSubmit">
        <icon scale="1.25" name="search"></icon></button>
  </form>
</template>

<script>
export default {
  name: 'searchBar',
  methods: {
    search: function (e) {
      console.log(e)
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
      padding: 5px;
      flex-grow: 1;
      // font-size: 1.25em;

      @include for-tablet-portrait-up {
        padding: 15px;
      }
    }
  }

</style>
