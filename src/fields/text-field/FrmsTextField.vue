<template>
  <input-field
    :id="id"
    :label="label"
    :hint="hint"
    :value="value"
    :disabled="disabled"
    type="input"
    v-bind="$attrs"
    v-on="$listeners"
    @blur="$v.value.$touch()"
    :error-messages="inputErrors"
  />
</template>

<script>
import formFieldMixin from '../../mixins/formFieldMixin'
import fieldValidationMixin from '../../mixins/fieldValidationMixin'
import { requiredIf } from 'vuelidate/lib/validators'
import InputField from '../../shared/input-field/InputField'

export default {
  name: 'FrmsTextField',
  mixins: [formFieldMixin, fieldValidationMixin],
  components: { InputField },
  props: {
    id: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: 'Text'
    },
    value: {
      type: String,
      default: null
    }
  },
  methods: {
    generateRequiredFieldErrors (fieldKey, errorMessagePrefix) {
      return this.$v[fieldKey].$dirty && this.$v[fieldKey].$invalid
        ? [`${errorMessagePrefix} is required`]
        : []
    }
  },
  validations: {
    value: {
      required: requiredIf(function () {
        return ('required' in this.$attrs) || this.requiredIf
      })
    }
  }
}
</script>
