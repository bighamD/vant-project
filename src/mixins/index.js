export default {
  created () {
    const { username } = this.$route.query;
    if (username) {
      this.formData.username = username;
    }
  }
};
