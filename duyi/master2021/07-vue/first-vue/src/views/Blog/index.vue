<template>
  <div>
    <h1>文章</h1>
    <div class="article">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sequi! Recusandae,
      eius. Repellat non voluptate similique itaque commodi modi cupiditate consequatur quo consequuntur blanditiis
      beatae, maxime mollitia magnam numquam veniam!</div>
    <div class="result"></div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'

export default {
  mounted() {
    const article = document.querySelector('.article')
    const result = document.querySelector('.result')
    html2canvas(article).then(canvas => {
      result.appendChild(canvas)
    })
  }
}
</script>

<style lang="less" scoped>
.article {
  margin: 10px;
  padding: 10px;
  width: 500px;
  border-radius: 10px;
  color: #333;
  font-size: 20px;
  background-color: #cec;
}
</style>