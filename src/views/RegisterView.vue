<template>
  <div id="signUpPage" class="bg-yellow">
    <div class="conatiner signUpPage vhContainer">
      <div class="side">
        <a href="#"
          ><img
            class="logoImg"
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
            alt=""
        /></a>
        <img
          class="d-m-n"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png"
          alt="workImg"
        />
      </div>
      <div>
        <form class="formControls" action="index.html">
          <h2 class="formControls_txt">註冊帳號</h2>
          <label class="formControls_label" for="email">Email</label>
          <input
            class="formControls_input"
            type="text"
            id="email"
            name="email"
            placeholder="請輸入 email"
            required
            v-model="email"
          />
          <label class="formControls_label" for="name">您的暱稱</label>
          <input
            class="formControls_input"
            type="text"
            name="name"
            id="name"
            placeholder="請輸入您的暱稱"
            v-model="nickname"
          />
          <label class="formControls_label" for="pwd">密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請輸入密碼"
            required
            v-model="password"
          />
          <label class="formControls_label" for="pwd">再次輸入密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請再次輸入密碼"
            required
            v-model="confirmPassword"
          />
          <input
            class="formControls_btnSubmit"
            type="button"
            @click="handleRegister"
            value="註冊帳號"
          />
          <RouterLink to="/login" class="formControls_btnLink">登入</RouterLink>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { register } from '@/utils/api'
import { useRouter } from 'vue-router'
import { alertModal } from '@/utils/alertTools'
const router = useRouter()

// 表單資料
const email = ref('')
const nickname = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleRegister = async () => {
  try {
    if (!email.value || !nickname.value || !password.value || !confirmPassword.value) {
      alertModal('error', '請填寫所有欄位')
      return
    }

    if (password.value !== confirmPassword.value) {
      alertModal('error', '密碼不一致')
      return
    }

    await register(email.value, password.value, nickname.value)
    alertModal('success', '註冊成功')
    router.push('/login')
  } catch (error) {
    const message = error.response?.data?.message || error.message || '發生未知錯誤'
    alertModal('error', message || '登入失敗，請重試或是洽詢客服')
  }
}
</script>
