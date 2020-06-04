import { validationMixin } from 'vuelidate'

export default {
  name: 'fieldValidationMixin',
  mixins: [validationMixin],
  computed: {
    inputErrors () {
      return this.generateRequiredFieldErrors('value', this.label)
    }
  },
  watch: {
    '$v.$invalid': {
      handler () {
        /* emit form validity */
        this.$emit('invalid', { [this.id]: this.$v.$invalid })
      },
      immediate: true
    }
  }
}
