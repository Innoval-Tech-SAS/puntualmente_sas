import Swal from "sweetalert2"

const showResponse = (title: string, message: string) => {
    Swal.fire({
        title: title,
        text: message,
        icon: "success",
        confirmButtonText: "Cerrar",
        confirmButtonColor: "#c62828",
    });
}

export default showResponse;