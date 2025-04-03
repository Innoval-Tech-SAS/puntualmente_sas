import Swal from "sweetalert2";

const showResponse = (
  title: string,
  message: string,
  error: boolean = false
) => {
  if (!error) {
    Swal.fire({
      title: title,
      text: message,
      icon: "success",
      confirmButtonText: "Cerrar",
      confirmButtonColor: "#c62828",
    });
  }
    else {
        Swal.fire({
        title: title,
        text: message,
        icon: "error",
        confirmButtonText: "Cerrar",
        confirmButtonColor: "#c62828",
        });
    }
};

export default showResponse;
