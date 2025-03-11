    <template>
      <div>
        <!-- <div>编号：{{ route.query.id }}</div>
        <h3>标题：{{ route.query.name }}</h3>
        <div>内容：{{ route.query.content }}</div> -->
        <!-- <div>编号：{{ route.params.id }}</div>
        <h3>标题：{{ route.params.name }}</h3>
        <div>内容：{{ route.params.content }}</div> -->
        <div>编号：{{ id }}</div>
        <h3>标题：{{ name }}</h3>
        <div>内容：{{ content }}</div>
      </div>
    </template>

<script setup lang="ts">
// import { useRoute } from 'vue-router';
// const route = useRoute()

// console.log('route :>> ', route);
defineProps(['id', 'name', 'content'])
</script>
