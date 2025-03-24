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
  const res = await API.exists(val);
  if (res.data) {
    return '账号已存在';
  }
});

const nicknameValidator = new FieldValidator('txtNickname', async function (val) {
  if (!val) {
    return '请填写昵称';
  }
});

const loginPwdValidator = new FieldValidator('txtLoginPwd', async function (val) {
  if (!val) {
    return '请填写密码';
  }
});

const loginPwdConfirmValidator = new FieldValidator('txtLoginPwdConfirm', async function (val) {
  if (!val) {
    return '请填写确认密码';
  }
  if (val !== loginPwdValidator.input.value) {
    return '两次密码不一致';
  }
});

// function test() {
//   FieldValidator.validateAll(loginIdValidator, nicknameValidator).then((res) => {
//     console.log('res :>> ', res);
//   });
// }

const form = $('.user-form');

form.onsubmit = async (e) => {
  e.preventDefault();

  const result = await FieldValidator.validateAll(
    loginIdValidator,
    nicknameValidator,
    loginPwdValidator,
    loginPwdConfirmValidator
  );
  if (!result) return;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  // const data = {
  //   loginId: loginIdValidator.input.value,
  //   nickname: nicknameValidator.input.value,
  //   loginPwd: loginPwdValidator.input.value,
  // };
  const res = await API.register(data);
  if (res.code === 0) {
    alert('注册成功');
    location.href = './login.html';
  }
};
