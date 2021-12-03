<template>
  <p>Edit the event here.</p>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      unsavedChanges: true,
    }
  },
  beforeRouteLeave() {
    if (this.unsavedChanges) {
      const answer = window.confirm(
        'Do you relly want to leave? You have unsaved changes!'
      )
      if (!answer) {
        return false
      }
    }
  },
}
</script>
