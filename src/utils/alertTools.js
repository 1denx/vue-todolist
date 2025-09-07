import Swal from 'sweetalert2'

export const alertModal = (state, message, customOptions = {}) => {
  return Swal.fire({
    icon: state,
    text: message,
    timer: 2000,
    timerProgressBar: true,
    ...customOptions,
  })
}

export const confirmModal = (state, message, customOptions = {}) => {
  return Swal.fire({
    icon: state,
    text: message,
    draggable: true,
    showCancelButton: true,
    confirmButtonText: '確定',
    cancelButtonText: '取消',
    ...customOptions,
  })
}
