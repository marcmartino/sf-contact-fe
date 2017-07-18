<template>
  <div id="subHeader" v-bind:class="{sidebarOpen: sidebarOpen}">
    <span id="menuIcon"
          v-on:click="toggleSidebar">
      <icon scale="2" id="menuBars" name='bars'></icon>
      <icon scale="2" id="menuCloseArrow" name='caret-left'></icon>
    </span>
    <span id="headerName">{{pageTitle}}</span>
    <span id="">&nbsp;</span>
  </div>
</template>

<script>
export default {
  name: 'sfSubHeader',
  props: ['pageTitle'],
  data: function () {
    return {
      sidebarOpen: false
    }
  },
  methods: {
    toggleSidebar: function () {
      this.sidebarOpen = !this.sidebarOpen
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #subHeader {
    background-color: rgba($sf-red, .5);
    display: flex;
    flex-direction: row;
    grid-area: sub-header;
    align-items: center;
    justify-content: center;

    #headerName {
      font-size: 2em;
    }

    &.sidebarOpen {
      #menuBars {
        display: none;
      }
      #menuCloseArrow {
        display: block;
      }
    }
  }
  #menuIcon {
    justify-self: flex-start;
    display: none;
    flex-direction: column;
    justify-content: center;
    padding-left: 5px;
    flex-direction: row;
    width: 1.5em;
    text-align:center;
    &:hover {
      cursor: pointer;
    }
  }
  #menuCloseArrow {
    display: none;
  }
  @include for-phone-only {
    #subHeader {
      justify-content: space-between;

      #menuIcon {
        display: flex;
      }
    }
  }

</style>
