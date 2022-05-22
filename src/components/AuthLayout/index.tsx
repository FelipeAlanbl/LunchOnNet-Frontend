import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { AuthLayoutContainer, AuthForm } from './style';


function AuthLayout() {

  const { state } = useAuthContext();

  if(state?.isAuth) return <Navigate to="/" />

  return (
    <AuthLayoutContainer>
        <div className='c-auth-Layout__bg'>
            <h1>Lunch On Net</h1>
        </div>
        <AuthForm>
            <Outlet />
        </AuthForm>
    </AuthLayoutContainer>
  )
}

export default AuthLayout;