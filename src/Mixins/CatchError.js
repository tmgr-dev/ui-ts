export default {
  methods: {
    catchError (response) {
      if (response instanceof Object && response.hasOwnProperty('data') && response.data.hasOwnProperty('error')) {
        const {title, description} = response.data.error.message
        const {fields} = response.data.error
        this.$message.error(`<b>${title}: </b>${description}`)

        if (fields && fields instanceof Object) {
          this.errors = fields
        }
      } else if (response instanceof Object && response.hasOwnProperty('status')) {
        this.$message.error(`Status code ${response.status}`);
      } else {
        this.$message.error('Oops, sorry... Something went wrong');
      }
    }
  }
}