<template>
  <div class="contactTile" v-on:dblclick="copyContact">
    <input class="contactToCopy" type="text" v-bind:value='clipboardContact'>
    <div class="contactImage"
         v-bind:style="{ backgroundImage: 'url(' + pictureUrl + ')' }"></div>
    <div class="textInfo">
      <span class="first">{{contactObj.first_name}}</span>
      <span class="last">{{contactObj.last_name}}</span>
      <div class="dobAndZip">
        <span class="dateOfBirth">{{contactObj.date_of_birth}}</span>
        <div class="zipcode">{{contactObj.zip_code}}</div>
      </div>
      <div class="note" v-if="contactObj.note"><span>Note: </span>{{contactObj.note}}</div>
      <div class="teleBtnContainer">
        <a v-bind:href="telephoneHref" class="callButton">
        <icon name="phone"></icon></a></div>
      <span class="starredIcon" v-if="contactObj.starred">
        <icon name="star" scale="1.5"></icon></span>
      <router-link v-bind:to="editContactPath" class="editIcon"><icon name="pencil"></icon></router-link>
    </div>
  </div>
</template>

<script>
import Noty from 'noty'
export default {
  name: 'contactTile',
  props: ['contactObj'],
  data () {
    return {
    }
  },
  methods: {
    copyContact: function () {
      document.execCommand('copy',
        false,
        this.$el.querySelector('.contactToCopy').select())
      new Noty({
        timeout: 500,
        text: 'Contact Copied!'
      }).show()
    }
  },
  computed: {
    pictureUrl: function () {
      return this.contactObj.picture_url || '/static/defaultContactFace.jpg'
    },
    telephoneHref: function () {
      return `tel:${this.contactObj.phone_number}`
    },
    editContactPath: function () {
      return `/edit/${this.contactObj.id}`
    },
    clipboardContact: function () {
      return this.contactObj.first_name + ' ' + this.contactObj.last_name +
          ' - ' + this.contactObj.phone_number
    }
  }
}
</script>

<style scoped lang="scss">
.contactTile {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  min-height: 150px;

  .contactToCopy {
    height: 0;
    width: 0;
    border: 0;
    background-color: transparent;
    position: absolute;
  }
  .contactImage {
    width: 48%;

    background-position: center;
    background-size: cover;
  }
  .textInfo {
    width: 48%;
    display: flex;
    margin: 5px 5px 0 0;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  .note {
    word-wrap: break-word;
    font-size: .9em;
    width: 100%;
  }
  .first, .last {
    width: 100%;
    font-size: 1.2em;
    line-height: 1em;
  }
  .teleBtnContainer {
    width: 100%;
    text-align: center;
    justify-self: end;

  }
  .dobAndZip {
    width: 100%;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .starredIcon {
    position: absolute;
    bottom: 5px;
    left: 5px;
    color: $sf-orange;
  }
  .editIcon {
    position: absolute;
    top: 5px;
    right: 5px;
  }
}
</style>
