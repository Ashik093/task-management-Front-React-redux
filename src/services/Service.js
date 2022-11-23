const axios = require('axios')
import { errorToast, successToast } from "../helper/FormHelper";
import { getToken, getUserDetails, removeToken, removeUserDetails, setToken, setUserDetails } from "../helper/SessionHelper";
import { hide, show } from "../redux/slice/SettingSlice";
import { setSummury } from "../redux/slice/SummurySlice";
import { setTask } from "../redux/slice/TaskSlice";
import { hide, show } from "../redux/slice/SettingSlice";
const BASE_URL = "http://localhost:5000/api/v1/"
const options = {
    headers: {
        token: getToken()
    }

}


export const UserRegistrationRequest = (params) => {
    store.dispatch(show())
    let url = BASE_URL + '/Registration'
    return axios.post(url, params)
        .then(function(response) {
            store.dispatch(hide())
            if (response.status === 200) {
                successToast('Registration Success')
                return true
            } else {
                errorToast('Something went wrong')
                return false
            }
        })
        .catch(function(error) {
            store.dispatch(hide())
            errorToast("Something went wrong")

            return false
        });
}

export const UserLoginRequest = (params) => {
    store.dispatch(show())
    let url = BASE_URL + '/Login'
    return axios.post(url, params)
        .then(function(response) {
            store.dispatch(hide())
            if (response.status === 200) {
                if (getToken()) {
                    removeToken()
                }
                if (getUserDetails()) {
                    removeUserDetails()
                }
                setToken(response.data.content.token)
                setUserDetails(response.data.content)
                successToast('Login Success')
                return true
            } else {
                errorToast('Something went wrong')
                return false
            }
        })
        .catch(function(error) {
            store.dispatch(hide())
            errorToast(error.message)

            return false
        });
}

export const CreateTask = (params) => {
    store.dispatch(show())
    let url = BASE_URL + '/CreateTask'
    return axios.post(url, params, options)
        .then(function(response) {
            store.dispatch(hide())
            if (response.status === 200) {

                successToast('Title Created')
                return true
            } else {
                errorToast('Something went wrong')
                return false
            }
        })
        .catch(function(error) {
            store.dispatch(hide())
            errorToast(error.message)

            return false
        });
}
export const GetTaskByStatus = (params) => {
    store.dispatch(show())
    let url = BASE_URL + '/GetTaskByStatus/' + params
    return axios.get(url, options)
        .then(function(response) {
            store.dispatch(hide())
            if (response.status === 200) {
                store.dispatch(setTask(response.data.data))
            } else {
                errorToast('Something went wrong')
                return false
            }
        })
        .catch(function(error) {
            store.dispatch(hide())
            errorToast(error.message)

            return false
        });
}

export const GetDashboardSummury = () => {
    store.dispatch(show())
    let url = BASE_URL + '/GetTaskCountByStatus'
    return axios.get(url, options)
        .then(function(response) {
            store.dispatch(hide())
            if (response.status === 200) {
                store.dispatch(setSummury(response.data.data))
            } else {
                errorToast('Something went wrong')
                return false
            }
        })
        .catch(function(error) {
            store.dispatch(hide())
            errorToast(error.message)

            return false
        });
}

export const DeleteTask = (params) => {
    store.dispatch(show())
    let url = BASE_URL + '/DeleteTask'
    return axios.post(url, params, options)
        .then(function(response) {
            store.dispatch(hide())
            if (response.status === 200) {
                successToast('Todo Deleted')
                return true
            } else {
                errorToast('Something went wrong')
                return false
            }
        })
        .catch(function(error) {
            store.dispatch(hide())
            errorToast(error.message)

            return false
        });
}

export const UpdateTask = (params) => {
    store.dispatch(show())
    let url = BASE_URL + '/UpdateTaskStatus'
    return axios.post(url, params, options)
        .then(function(response) {
            store.dispatch(hide())
            if (response.status === 200) {
                successToast('Todo Updated')
                return true
            } else {
                errorToast('Something went wrong')
                return false
            }
        })
        .catch(function(error) {
            store.dispatch(hide())
            errorToast(error.message)

            return false
        });
}