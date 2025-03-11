slot<template>
  <div class="grandchild">
    <h3>child</h3>
    <GrandChild v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts">
import GrandChild from './GrandChild.vue';

</script>

<style scoped>
.grandchild {
  padding: 5px;
  border-radius: 5px;
  background: #ff8;
}
</style>
