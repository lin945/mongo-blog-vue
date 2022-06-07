
class Storage {
    saveToken(token) {
        localStorage.setItem('token', `Bearer ${token}`)
    }
    setData(key, data) {
        localStorage.setItem(key,data)
    }
    getToken() {
        return localStorage.getItem("token")
    }
}
export default new Storage()