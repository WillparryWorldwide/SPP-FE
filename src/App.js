import { AuthProvider } from "react-auth-kit";
import Router from "./Router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Toastr from './components/Toast'

window.toastr = Toastr

function App() {
  return (
    <AuthProvider authType={'cookie'}
      authName={'_sspfe'}
      refresh
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}>
      <Router />
    </AuthProvider>
  );
}

export default App;
