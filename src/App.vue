<template>
  <div id="app">
    <sf-header></sf-header>
    <sf-sub-header :pageTitle="$route.name"></sf-sub-header>
    <sf-sidebar></sf-sidebar>
    <main id="pageBody">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import SfHeader from './components/SFHeader'
import SfSidebar from './components/SFSidebar'
import SfSubHeader from './components/SFSubHeader'
export default {
  components: {
    SfSubHeader,
    SfSidebar,
    SfHeader},
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template:
            'sub-header'
            'body';
  grid-template-rows: 10vh 95vh;

  @include for-tablet-portrait-up {
    grid-template:
            'header header'
            'sidebar sub-header'
            'sidebar body';
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 10vh 7.6vh min(82.4vh);
  }
  @include for-tablet-landscape-up {
    grid-template:
            'header header header header'
            '. sidebar sub-header .'
            '. sidebar body .';
    grid-template-columns: 1fr 3fr 6fr 1fr;
    grid-template-rows: 10vh 7.6vh min(82.4vh);
  }
  @include for-desktop-up {
    grid-template:
            'header header header header'
            '. sidebar sub-header .'
            '. sidebar body .';
    grid-template-columns: 1fr 2fr 4fr 1fr;
    grid-template-rows: 10vh 7.6vh min(82.4vh);
  }
}

#pageBody {
  grid-area: body;
  z-index: 1;
}
.fullPageCont {
  margin: 5px;
  padding: 5px;
  @include for-tablet-landscape-up {
    margin: 10px;
    padding: 10px;
  }
}
body {
  background-color: $background-gray;
  margin: 0;
  position: relative;
}
a {
  text-decoration: none;
}
</style>
