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

    <k-table :data="tableData">
      <k-table-column sortable prop="date" label="日期"></k-table-column>
      <k-table-column sortable prop="name" label="姓名"></k-table-column>
      <k-table-column prop="address" label="地址"></k-table-column>
      <k-table-column label="操作">
        <template v-slot:default="scope">
          <button @click="() => console.log(scope.$index, scope.row)">编辑</button>
          <button @click="() => console.log(scope.$index, scope.row)">删除</button>
        </template>
      </k-table-column>
    </k-table>
  </div>
</template>

<script>
// import KInput from '@/components/form/KInput.vue'
import KInput from '$c/form/KInput.vue'
// import KFormItem from '@/components/form/KFormItem.vue'
import KFormItem from '$c/form/KFormItem.vue'
// import KForm from '@/components/form/KForm.vue'
import KForm from '$c/form/KForm.vue'

import KTable from '$c/table/KTable.vue'
import KTableColumn from '$c/table/KTableColumn.vue'

export default {
  components: { KInput, KFormItem, KForm, KTable, KTableColumn },
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
      tableData: [
        {
          date: '2026-01-07',
          name: '孙虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2026-01-03',
          name: '张伟',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2026-01-08',
          name: '李明',
          address: '上海市普陀区金沙江路 1520 弄',
        },
        {
          date: '2026-01-05',
          name: '王伟',
          address: '上海市普陀区金沙江路 1521 弄',
        },
      ],
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
