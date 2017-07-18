<template>
  <form class="contactCreatePage" v-on:submit.prevent="submitContact">
    <div class="createContainer">
      <div class="inputContainer">
        <label for="createFirstName">First Name</label>
        <input id="createFirstName" type="text" name="first_name" v-model="contact.first_name"></div>
      <div class="inputContainer">
        <label for="createLastName">Last Name</label>
        <input id="createLastName" name="last_name" v-model="contact.last_name" type="text"></div>
      <div class="inputContainer picture">
        <label for="createImageUrl">Picture</label>
        <input type="text" id="createImageUrl"
               placeholder="http://cf-contacts.now.sh/defaultImage.jpg"
               name="picture_url" v-model="contact.picture_url">
        <div class="img" v-bind:style="{ backgroundImage: 'url(' + contact.picture_url + ')' }"></div>
      </div>
      <div class="inputContainer starred">
        <label for="createStarred">Starred</label>
        <input id="createStarred" type="hidden"
               v-model.number="contact.starred" name="starred">
        <span v-on:click="toggleStarred">
          <icon class="starIcon" scale="2" name="star"
                v-bind:class="{active: this.contact.starred}"></icon>
        </span>
      </div>
      <div class="inputContainer">
        <label for="createPhoneNumber">Phone Number</label>
        <input id="createPhoneNumber" name="phone_number" v-model.number="contact.phone_number" type="text"></div>
      <div class="inputContainer">
        <label for="createDateOfBirth">Date Of Birth</label>
        <input id="createDateOfBirth" name="date_of_birth" v-model="contact.date_of_birth" type="text"></div>
      <div class="inputContainer">
        <label for="createZipCode">Zip Code</label>
        <input id="createZipCode" name="zip_code" v-model.number="contact.zip_code" type="text"></div>
      <div class="inputContainer">
        <label for="createNote">Note</label>
        <textarea id="createNote" name="note" v-model="contact.note" type="text"></textarea></div>
      <input type="submit" value="Submit">
    </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'contactCreatePage',
  data () {
    return {
      contact: {}
    }
  },
  methods: {
    submitContact: function () {
      var self = this
      axios[this.contact.id ? 'put' : 'post']('//sf-contacts-api.now.sh/' +
          'contacts' + (this.contact.id ? `/${this.contact.id}` : ''),
          this.contact)
        .then((response) => {
          self.$router.push(`/view/${response.data.id || this.$route.params.id}`)
        })
        .catch((error) => console.log(error))
    },
    toggleStarred: function () {
      this.$set(this.contact, 'starred', Math.abs((this.contact.starred || 0) - 1))
    },
    fetchContact: function () {
      return axios.get('//sf-contacts-api.now.sh/' +
          `contacts/${this.$route.params.id}`)
        .then((function (self) {
          return function (response) {
            self.contact = response.data
          }
        })(this))
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  computed: {
    imagePreviewUrl: function () {
      return this.contact.picture_url ? this.contact.picture_url : '/static/defaultContactFace.jpg'
    }
  },
  watch: {
    '$route': function () {
      var self = this
      if (this.route.params.id) {
        self.isLoading = true
        self.fetchContact().then(function () {
          self.isLoading = false
        })
      }
    }
  },
  created: function () {
    if (!this.$route.params.id) {
      this.contact = {}
    } else {
      this.fetchContact()
    }
  }
}
</script>

<style scoped lang="scss">
.createContainer {
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  .inputContainer {
    width: 48%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
.inputContainer {
  &.picture .img {
    height: 100px;
    width: 100%;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 5px;
  }
  .starIcon {
    &.active {
      color: $sf-orange;
    }
  }
}
</style>
