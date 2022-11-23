import Swal from 'sweetalert2'
import { UpdateTask } from './../services/Service';

export function UpdateToDo(data) {
    return Swal.fire({
        title: 'Change Status',
        input: 'select',
        inputOptions: { New: 'New', Completed: 'Completed', Progress: 'Progress', Canceled: 'Canceled' },
        inputValue: data.status,
    }).then((result) => {
        if (result.isConfirmed) {

            let params = {
                _id: data._id,
                status: result.value
            }

            return UpdateTask(params).then((result) => {
                return result
            })
        }
    })
}