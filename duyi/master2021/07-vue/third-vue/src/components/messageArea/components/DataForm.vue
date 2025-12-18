<template>
  <form
    id="data-form-container"
    ref="form"
    class="data-form-container"
    @submit.prevent="handleSubmit"
  >
    <div class="form-item">
      <div class="input-area">
        <input
          type="text"
          v-model="formData.nickname"
          placeholder="用户名"
          maxlength="10"
        />
        <span class="tip">{{ formData.nickname.length }}/10</span>
      </div>
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="form-item">
      <div class="input-area">
        <textarea
          type="text"
          v-model="formData.content"
          placeholder="用户名"
          maxlength="300"
        />
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button :disabled="isSubmitting">
          {{ isSubmitting ? "提交中..." : "提交" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      error: {
        nickname: "",
        content: "",
      },
      isSubmitting: false,
    }
  },
  methods: {
    handleSubmit() {
      this.error.nickname = this.formData.nickname ? "" : "用户名不能为空"
      this.error.content = this.formData.content ? "" : "内容不能为空"
      if (this.error.nickname || this.error.content) {
        return
      }
      this.isSubmitting = true
      this.$emit("submit", this.formData, (message) => {
        this.$showMessage({
          content: message,
          type: "success",
          duration: 3000,
          container: this.$refs.form,
          callback: () => {
            this.isSubmitting = false
            this.formData = {
              nickname: "",
              content: "",
            }
          },
        })
      })
    },
  },
}
</script>

<style lang="less" scoped>
@import "@/styles/variables.less";

.data-form-container {
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;

  .form-item {
    margin-bottom: 8px;

    .input-area {
      position: relative;

      .text {
        position: relative;
      }
      .tip {
        position: absolute;
        right: 5px;
        bottom: 5px;
        color: #b4b8bc;
        font-size: 12px;
      }

      input,
      textarea {
        display: block;
        width: 100%;
        box-sizing: border-box;
        border: 1px dashed @gray;
        outline: none;
        color: @info;
        font-size: 14px;
        border-radius: 4px;

        &.focus {
          border-color: @primary;
        }
      }

      input {
        width: 50%;
        padding: 0 15px;
        height: 40px;
      }

      textarea {
        resize: none;
        padding: 8px 15px;
        height: 120px;
      }
    }

    .error {
      margin-top: 6px;
      color: @danger;
      font-size: 14px;
      height: 20px;
      line-height: 20px;
    }

    button {
      position: relative;
      cursor: pointer;
      border: none;
      outline: none;
      width: 100px;
      height: 34px;
      color: #fff;
      border-radius: 4px;
      background: @primary;

      &:hover {
        background: darken(@primary, 10%);
      }
      &:disabled {
        background: lighten(@primary, 20%);
        cursor: not-allowed;
      }
    }
  }
}
</style>
