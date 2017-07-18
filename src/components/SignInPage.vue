<template>
  <div class="signInPage">
    <form class="fullPageCont" v-on:submit.prevent="signIn">
      <label for="signInEmail">Email</label>
      <input type="text" id="signInEmail">
      <label for="signInPassword">Password</label>
      <input id="signInPassword" type="password">
      <input type="button" value="Sign In">
      <span class="signInLinkCont"><router-link to="/join">Don't have an account?<br>Get one here</router-link></span>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signInPage',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  .signInPage > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > * {
      margin-bottom: 5px;
    }
    .signInLinkCont {
      width: 100%;
      font-size: .75em;
      text-align: left;
    }
  }
</style>
