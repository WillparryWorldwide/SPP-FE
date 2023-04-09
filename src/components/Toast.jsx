import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const Toastr = {
    success(message, title = '') {
        toastr.success(message, title);
    },
    error(message, title = '') {
        toastr.error(message, title);
    },
    warning(message, title = '') {
        toastr.warning(message, title);
    },
    info(message, title = '') {
        toastr.info(message, title);
    }
};

export default Toastr;
