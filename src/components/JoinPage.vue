<template>
  <div class="joinPage">
    <form class="fullPageCont" v-on:submit.prevent="join">
      <label for="signInEmail">Email</label>
      <input type="text" id="signInEmail">
      <label for="signInPassword">Password</label>
      <input id="signInPassword" type="password">
      <input type="button" value="Sign In">
      <span class="joinLinkCont"><router-link to="/signIn">Sign in here</router-link></span>
    </form>
  </div>
</template>

<script>
export default {
  name: 'joinPage',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  .joinPage > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > * {
      margin-bottom: 5px;
    }
    .joinLinkCont {
      width: 100%;
      font-size: .75em;
      text-align: left;
    }
  }
</style>
