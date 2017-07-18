<template>
  <aside id="sidebar">
    <search-bar></search-bar>
    <navigation-links></navigation-links>
    <s-f-footer></s-f-footer>
  </aside>
</template>

<script>
import SearchBar from './SearchBar'
import NavigationLinks from './NavigationLinks'
import SFFooter from './SFFooter'
export default {
  name: 'sfSidebar',
  components: {
    NavigationLinks,
    SearchBar,
    SFFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
  #sidebar {
    grid-area: sidebar;
    background-color: rgba($sf-green, 1);
    display: none;
    flex-direction: column;
    position: relative;

    @include for-tablet-portrait-up {
      display: flex;
    }
    .searchBar {
      margin-bottom: 5px;
    }
    nav {
      display: flex;
      flex-direction: column;
      .navLink {
        padding: 5px;
        display: inline-block;
      }
    }

    footer {
      padding: 0 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      font-size: .8em;
      flex-grow: 1;

      & > * {
        margin: 2px 0;
      }
      .logo {
        width: 40%;
      }
    }
  }
  @include for-phone-only {
    #subHeader.sidebarOpen ~ #sidebar {
      z-index:2;
      display: flex;
      position: absolute;
      left: 0;
      top: 10vh;
      min-height: 85%;
      width: 50%;
    }
  }

</style>
