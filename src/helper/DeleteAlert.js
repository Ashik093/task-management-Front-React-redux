import Swal from 'sweetalert2'
import { DeleteTask } from '../services/Service'

export function DeleteToDo(data) {
    return Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            return DeleteTask(data).then((result) => {
                return result
            })
        }
    })
}