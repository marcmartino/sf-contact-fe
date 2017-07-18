<template>
  <div class="contactsPage">
    <contact-tile v-for="contact in contacts" :contactObj="contact"></contact-tile>
  </div>
</template>

<script>
import ContactTile from './ContactTile'
import axios from 'axios'
export default {
  components: {ContactTile},
  name: 'contactsPage',
  data () {
    return {
      contacts: [],
      isLoading: false
    }
  },
  methods: {
    fetchContacts: function () {
      return axios.get('//sf-contacts-api.now.sh/' + 'contacts')
        .then(((self) => (resp) => {
          self.contacts = resp.data
        })(this))
        .catch((resp) => console.log(resp))
    }
  },
  watch: {
    '$route': function () {
      var self = this
      self.isLoading = true
      self.fetchContacts().then(function () {
        self.isLoading = false
      })
    }
  },
  created: function () {
    this.fetchContacts()
  }
}
</script>

<style scoped lang="scss">
  .contactsPage {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    .contactTile {
      width: 100%;
      margin: 15px;
      background-color: rgba($sf-dark-blue, .2);
      @include for-desktop-up {
        width: 45%;
      }
    }
  }
</style>
