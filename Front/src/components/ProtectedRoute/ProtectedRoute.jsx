import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProtectedRoute(props) {
    if(localStorage.getItem("userInfo") !== null){
        return props.children
    }else{
        toast.warn("Please logIn first")
       return <Navigate to={'/login'} />
    }
}

export default ProtectedRoute