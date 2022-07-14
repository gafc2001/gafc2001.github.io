import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const Alert = (icon, title, text) => {
    MySwal.fire({
        "icon": icon,
        "title": title,
        "text": text
    })
}
export default Alert;
