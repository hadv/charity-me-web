import api from './api'

export const userService = {
  signIn (email, password) {
    return api.post('/signin', {
      "email": email,
      "password": password
    })
  },

  signUp(user) {
    return api.put("/register", {
      "email": user.email,
      "firstname": user.firstname,
      "lastname": user.lastname,
      "password": user.password,
      "confirmPassword": user.confirmPassword
    })
  },

  signOut() {
    return api.post("/signout")
  },

  forgotPassword(email) {
    return api.post("/forgot-password", {"email": email})
  }
}
