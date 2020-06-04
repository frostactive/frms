import { validationMixin } from 'vuelidate'
export default {
  name: 'formFieldMixin',
  mixins: [validationMixin],
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: null
    },
    hint: {
      type: String,
      default: null
    },
    errorMessages: {
      type: Array,
      default: () => []
    },
    value: {
      type: null,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    requiredIf: {
      type: Boolean,
      default: false
    }
  }
}
