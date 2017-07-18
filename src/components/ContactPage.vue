<template>
  <div class="contactPage">
    <contact-tile :contactObj="contact"></contact-tile>
  </div>
</template>

<script>
import ContactTile from './ContactTile'
import axios from 'axios'
export default {
  components: {ContactTile},
  name: 'contactPage',
  data () {
    return {
      contact: {},
      isLoading: false
    }
  },
  methods: {
    fetchContact: function () {
      return axios.get('//sf-contacts-api.now.sh/' + `contacts/${this.$route.params.id}`)
        .then(((self) => (resp) => {
          self.contact = resp.data
        })(this))
        .catch((resp) => console.log(resp))
    }
  },
  watch: {
    '$route': function () {
      var self = this
      self.isLoading = true
      self.fetchContact().then(function () {
        self.isLoading = false
      })
    }
  },
  created: function () {
    this.fetchContact()
  }
}
</script>

<style scoped>

</style>
