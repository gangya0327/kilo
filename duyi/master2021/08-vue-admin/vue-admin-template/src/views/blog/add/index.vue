<template>
  <div class="app-container">
    <div class="block">文章标题</div>
    <div style="margin-top: 15px">
      <el-input v-model="form.title" placeholder="请输入标题" />
    </div>

    <div class="block">文章编辑</div>
    <editor ref="toastEditor" :initial-value="form.content" height="400px" />

    <div class="block">文章描述</div>
    <div style="margin-top: 15px">
      <el-input v-model="form.description" type="textarea" placeholder="请输入描述" rows="3" />
    </div>

    <div class="block">缩略图</div>
    <upload v-model="form.thumb" />

    <div class="block">文章分类</div>
    <el-select v-model="form.categoryId">
      <el-option v-for="item in blogtype" :key="item.name" :label="item.name" :value="item.id" />
    </el-select>

    <div class="block">
      <el-button type="primary" @click="handleSubmit"> 提交</el-button>
    </div>
  </div>
</template>

<script>
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/vue-editor'
import Upload from '@/components/upload'
import { getBlogType } from '@/api/blogType'
import { addBlog, editBlog, getBlogInfo } from '@/api/blog'

export default {
  components: { Editor, Upload },
  data() {
    return {
      form: {
        title: '',
        content: '123',
        description: '',
        thumb: '',
        categoryId: '',
      },
      blogtype: [],
    }
  },
  created() {
    getBlogType().then(res => {
      this.blogtype = res.data
    })
    console.log(this.$route.params)

    const blogId = this.$route.params.id
    if (blogId) {
      this.getInfo()
    }
  },
  methods: {
    handleSubmit() {
      const htmlContent = this.$refs.toastEditor.invoke('getHTML')
      const markdown = this.$refs.toastEditor.invoke('getMarkdown')

      const obj = {
        ...this.form,
        createDate: new Date().getTime(),
        htmlContent,
        markdown,
        toc: [],
      }
      if (this.$route.params.id) {
        editBlog(obj).then(res => {
          this.$message.success('编辑成功')
          this.$router.push('/blog/list')
        })
      } else {
        addBlog(obj).then(res => {
          this.$message.success('添加成功')
          this.$router.push('/blog/list')
        })
      }
    },
    getInfo() {
      getBlogInfo(this.$route.params.id).then(res => {
        this.form = res.data
        this.form.categoryId = res.data.category.id
        this.$refs.toastEditor.invoke('setHTML', res.data.htmlContent)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.block {
  margin: 15px 0;
  color: #666;
}
</style>
