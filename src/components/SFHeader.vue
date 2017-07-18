<template>
  <header>
    <div id="headerContent">
      <img src="./../assets/hblogo.small.png" width="100" height="67.5">
      <span id="headerName">CF Contacts</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'sfHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header {
    background-color: rgba($sf-dark-blue, .5);
    grid-area: header;
    display: inline-grid;
    grid-template: 'header-content';

    @include for-tablet-landscape-up {
      grid-template:
              '. header-content .';
      grid-template-columns: 1fr 9fr 1fr;
    }

    @include for-desktop-up {
      grid-template:
              '. header-content .';
      grid-template-columns: 1fr 5fr 1fr;
    }

    #headerContent {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      grid-area: header-content;
    }

    @include for-phone-only {
      display: none;
    }
  }
  img {
    margin-right: 10px;
  }
  #headerName {
    font-size: 2em;
  }
</style>
