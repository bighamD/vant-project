export default {
  created () {
    const { username } = this.$router.currentRoute.query;
    if (username) {
      this.formData.username = username;
    }
  }
};
