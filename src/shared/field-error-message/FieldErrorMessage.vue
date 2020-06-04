<template>
  <div class="field-error-message">
    <v-expand-transition>
      <div
        class="message"
        v-if="messages.length"
      >
        {{ messages.join() }}
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  name: 'FieldErrorMessage',
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/variables.scss';

.field-error-message {
  min-height: 34px;
}

.message {
  color: $color-invalid !important;
  padding: 8px 12px;
  line-height: normal;
}

</style>
