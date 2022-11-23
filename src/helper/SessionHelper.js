class SessionHelper {
    setToken(value) {
        localStorage.setItem('token', value)
    }
    setUserDetails(value) {
        localStorage.setItem('user', JSON.stringify(value))
    }
    getToken() {
        return localStorage.getItem('token')
    }
    getUserDetails() {
        return JSON.parse(localStorage.getItem('user'))
    }
    removeToken() {
        localStorage.removeItem('token')
    }
    removeUserDetails() {
        localStorage.removeItem('user')
    }
    removeSession() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location.href = "/Login"
    }
}
export const {
    setToken,
    setUserDetails,
    getToken,
    getUserDetails,
    removeToken,
    removeUserDetails,
    removeSession
} = new SessionHelper()