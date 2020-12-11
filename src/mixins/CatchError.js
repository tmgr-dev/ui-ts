export default {
  methods: {
    catchError (response) {
      if (response instanceof Object && Object.prototype.hasOwnProperty.call(response, 'data')
          && Object.prototype.hasOwnProperty.call(response.data, 'errors')) {
        const { message } = response.data
        this.errors = response.data.errors
        this.$message.error(message)
      } else if (response instanceof Object && Object.prototype.hasOwnProperty.call(response, 'status')) {
        this.$message.error(`Status code ${response.status}`);
      } else {
        this.$message.error('Oops, sorry... Something went wrong');
      }
    }
  }
}