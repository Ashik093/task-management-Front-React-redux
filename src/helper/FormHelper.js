import { toast } from 'react-toastify';
let emailRegx = /\S+@\S+\.\S+/;
let mobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
class FormHelper {
    isEmpty(value) {
        return value.length == 0
    }
    isEmail(value) {
        return !emailRegx.test(value)
    }
    isPhone(value) {
        return !mobileRegx.test(value)
    }
    isFitPasswordLength(value) {
        return value.length > 5 && value.length < 11 ? false : true
    }

    successToast(msg) {
        toast.success(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    errorToast(msg) {
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
}

export const {
    isEmpty,
    isEmail,
    isPhone,
    successToast,
    errorToast,
    isFitPasswordLength
} = new FormHelper()