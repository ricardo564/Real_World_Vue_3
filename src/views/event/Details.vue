<template>
  <p>{{ event.title }}</p>

  <span>{{ event.time }} </span>
  <span>on {{ event.date }} </span>
  <span> @ {{ event.location }} </span>
</template>

<script>
export default {
  props: ['event'],
}
</script>
