<template>
  <div class="container">
    <form class="pt-3" @submit.prevent="onsubmit">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email"
               id="email"
               class="form-control"
               :class="{'is-invalid': $v.email.$error}"
               v-model="email"
               @blur="$v.email.$touch()">
        <div class="invalid-feedback" v-if="!$v.email.required"> Email field is
          required
        </div>
        <div class="invalid-feedback" v-if="!$v.email.email"> This field should be an
          email
        </div>
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail"> This e-mail is used
        </div>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password"
               id="password"
               class="form-control"
               :class="{'is-invalid': $v.password.$error}"
               v-model="password"
               @blur="$v.password.$touch()">
        <div class="invalid-feedback" v-if="!$v.password.minLength"> Min Length of
          password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}
        </div>


        <div class="form-group">
          <label for="confirm">Confirm password</label>
          <input type="password"
                 id="confirm"
                 class="form-control"
                 :class="{'is-invalid': $v.confirmPassword.$error}"
                 v-model="confirmPassword"
                 @blur="$v.confirmPassword.$touch()">
          <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
            Passwords should match
          </div>
        </div>
      </div>
  <button class="btn btn-success" type="submit" :disabled="$v.$invalid">Submit</button>
    </form>
  </div>
</template>


<script>
  import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      onSubmit() {
        console.log('Email', this.email)
        console.log('Password', this.password)
      }
    },
    validations: {
      email: {
        required,
        email,
        uniqEmail: function (newEmail) {
          if (newEmail === '') return true
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(value)
              const value = newEmail !== 'test@mail.ru'
            }, 1000)
          })
        }
      },
      password: {
        minLength: minLength(6)
      },
      confirmPassword: {
        sameAs: sameAs('password')
      }
   }
  }
</script>
