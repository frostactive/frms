<template >
  <base-field
    :id="id"
    :label="label"
    :hint="hint"
    :error-messages="errorMessages"
  >
    <multiselect
      :id="id"
      :name="id"
      :class="[{'invalid' : errorMessages.length}, id]"
      :options="items"
      :label="itemLabelKey"
      :track-by="itemValueKey"
      :show-labels="false"
      :multiple="multiple"
      :disabled="disabled"
      v-bind="$attrs"
      :value="value"
      v-on="$listeners"
    >
    </multiselect>
    <field-error-message :messages="errorMessages" />
  </base-field>
</template>

<script>
import Multiselect from 'vue-multiselect'
import BaseField from '../base-field/BaseField'
import FieldErrorMessage from '../field-error-message/FieldErrorMessage'
import formFieldMixin from '../../mixins/formFieldMixin'

export default {
  name: 'SelectField',
  mixins: [formFieldMixin],
  components: {
    BaseField,
    FieldErrorMessage,
    Multiselect
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    itemLabelKey: {
      type: String,
      default: null
    },
    itemValueKey: {
      type: String,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Object, String, Number, Array],
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables.scss';

::v-deep {
  .multiselect {
    margin-top: 10px;

    .multiselect__single, .multiselect__input, .multiselect__placeholder {
      padding-top: 10px;
    }
  }

  .multiselect .multiselect__tags, .multiselect__select {
    height: 50px;
  }

  .multiselect__tags-wrap {
    display: inline-block;
    margin-top: 10px;
  }

  .multi-select-errors {
    margin-bottom: $gutter;
    padding: 0 12px;
    transition: height 0.3s cubic-bezier(.25, .8, .25, 1);

    &:not(.expanded) {
      height: 0px;
    }

    &.expanded {
      height: $half-gutter;
    }
  }

  .multiselect.invalid .multiselect__tags {
    border: solid 2px $color-invalid;
  }
}
</style>
