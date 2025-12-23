<template>
  <div class="project-container" ref="projectContainer">
    <div class="project-item" v-for="item in data" :key="item.id">
      <a
        :href="item.url ? item.url : `javascript:alert('无法访问')`"
        :target="item.url ? '_blank' : '_self'"
      >
        <img class="thumb" alt="" v-lazy="item.thumb" />
      </a>
      <div class="info">
        <h2>{{ item.name }}</h2>
        <a class="github" v-if="item.github" :href="item.github">github</a>
        <p v-for="desc in item.description" :key="desc">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import mainScroll from "@/mixins/mainScroll"

export default {
  mixins: [mainScroll("projectContainer")],
  computed: {
    ...mapState("project", ["data"]),
  },
  created() {
    this.$store.dispatch("project/fetchProject")
  },
}
</script>

<style lang="less" scoped>
@import "@/styles/variables.less";

.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  overflow-y: auto;
  scroll-behavior: smooth;

  .project-item {
    transition: 0.5s;
    padding: 20px;
    display: flex;
    margin-bottom: 20px;

    &:hover {
      box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);
      transform: scale(1.01) translate(3px, -3px);
      color: inherit;
    }

    .thumb {
      width: 250px;
      min-height: 150px;
      flex: 0 0 auto;
      object-fit: cover;
      border-radius: 5px;
      margin-right: 15px;
    }

    .info {
      line-height: 1.7;
      flex: 1 1 auto;

      h2 {
        margin: 0;
      }
    }

    .github {
      font-size: 14px;
      color: @primary;
    }
  }
}
</style>
