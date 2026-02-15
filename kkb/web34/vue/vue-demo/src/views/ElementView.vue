<template>
  <div>
    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username" placeholder="请输入用户名"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input v-model="model.password" placeholder="请输入密码"></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="onLogin">登录</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KInput from '@/components/form/KInput.vue'
import KFormItem from '@/components/form/KFormItem.vue'
import KForm from '@/components/form/KForm.vue'

export default {
  components: { KInput, KFormItem, KForm },
  data() {
    return {
      model: {
        username: 'peter',
        password: '123456',
      },
      rules: {
        username: [{ required: true, message: '用户名不能为空' }],
        password: [{ required: true, message: '密码不能为空' }],
      },
    }
  },
  methods: {
    onLogin() {
      this.$refs.loginForm.validate((isValid) => {
        if (isValid) {
          console.log('submit success')
        } else {
          console.log('submit fail')
          this.$notice({
            title: '提示',
            message: '登录失败',
          })
        }
      })
    },
  },
}
</script>
