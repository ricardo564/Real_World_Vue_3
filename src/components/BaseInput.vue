<template>
  <label>{{ label }}</label>
  <input
    :placeholder="label"
    class="field"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
  },
}
</script>

<style></style>
