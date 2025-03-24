class FieldValidator {
  constructor(txtId, validatorFn) {
    this.input = $('#' + txtId);
    this.p = this.input.nextElementSibling;

    this.validatorFn = validatorFn;

    this.input.onblur = () => {
      this.validate();
    };
  }

  async validate() {
    const err = await this.validatorFn(this.input.value);
    if (err) {
      this.p.innerText = err;
      return false;
    } else {
      this.p.innerText = '';
      return true;
    }
  }

  static async validateAll(...validators) {
    const proms = validators.map((v) => v.validate());
    const results = await Promise.all(proms);
    return results.every((r) => r);
  }
}

const loginIdValidator = new FieldValidator('txtLoginId', async function (val) {
  if (!val) {
    return '请填写账号';
  }
});

const loginPwdValidator = new FieldValidator('txtLoginPwd', async function (val) {
  if (!val) {
    return '请填写密码';
  }
});

const form = $('.user-form');

form.onsubmit = async (e) => {
  e.preventDefault();

  const result = await FieldValidator.validateAll(loginIdValidator, loginPwdValidator);
  if (!result) return;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const res = await API.login(data);
  if (res.code === 0) {
    alert('登录成功');
    location.href = './index.html';
  } else {
    loginIdValidator.p.innerText = '账号密码错误';
    loginPwdValidator.input.value = '';
  }
};
