<template>
  <base-field
    :id="id"
    :label="label"
    :hint="hint"
    :error-messages="errorMessages"
  >
    <v-text-field
      :id="id"
      :name="id"
      :class="id"
      :disabled="disabled"
      outline
      single-line
      :error-messages="errorMessages"
      v-bind="$attrs"
      :value="value"
      v-on="$listeners"
    />
  </base-field>
</template>

<script>
import BaseField from '../base-field/BaseField'
import formFieldMixin from '../../mixins/formFieldMixin'

export default {
  name: 'InputField',
  mixins: [formFieldMixin],
  components: { BaseField },
  props: {
    value: {
      type: [String, Number],
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables.scss';

::v-deep {
  .v-input--selection-controls {
    margin-top: 0;
    padding-top: 0;
  }

  .v-input__control {
    margin-top: 10px;
  }

  /*.v-input.v-text-field {*/
  /*  min-height: 100px;*/
  /*}*/

  .v-textarea.v-text-field--enclosed textarea {
    margin-top: 10px;
  }

  .v-text-field--outline>.v-input__control>.v-input__slot{
    min-height: 50px;
  }

  .v-text-field--box input, .v-text-field--full-width input, .v-text-field--outline input {
    margin-top: 8px;
  }

  .v-input.v-text-field .v-input__control .v-input__slot,
  .v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state) .v-input__control .v-input__slot:hover {
    border: solid 1px $grey-300 !important;
  }

  .v-input.v-text-field.error--text .v-input__control .v-input__slot {
    border: solid 2px $color-invalid !important;
  }

  .v-text-field--outline.v-input--is-focused:not(.v-input--has-state) .v-input__control .v-input__slot{
    border: solid 2px $color-primary !important;
  }

  .v-text-field__details {
    margin-bottom: 0;
  }

  .v-text-field.v-text-field--enclosed .v-text-field__details {
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .v-input.v-text-field input {
    &::placeholder, &:-ms-input-placeholder, &::-ms-input-placeholder {
      color: $grey-300;
    }
  }
}
</style>
