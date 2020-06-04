<template>
  <div class="ma-0 pa-0">
    <label
      v-if="label"
      :class="[{ 'form-label--error': errorMessages.length }, 'form-label']"
      :for="id"
    >
      {{ label }}
    </label>
    <label
      class="form-label-hint"
      v-if="hint"
    >
      {{ hint }}
    </label>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseField',
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables.scss';

.form-label {
  display: block;
  font-size: 17px;
  line-height: 1.22;
  letter-spacing: normal;
  color: $grey-700;
}

.form-label-hint {
  line-height: 1.14;
  letter-spacing: 0.42px;
  color: $grey-600;
  margin-bottom: 5px;
  white-space: nowrap;
}

.form-label--error {
  color: $color-invalid;
}

::v-deep {
  .error--text .v-messages__message {
    color: $color-invalid !important;
  }
}
</style>
