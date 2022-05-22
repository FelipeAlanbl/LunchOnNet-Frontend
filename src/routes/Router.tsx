import {BrowserRouter, Routes, Route, Navigate, useLocation} from 'react-router-dom';

import Layout from '../components/DashboardLayout';
import AuthLayout from '../components/AuthLayout'
import { useAuthContext } from '../context/AuthContext';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/User';
import Establishment from '../pages/Establishment';
import Product from '../pages/Product';
import Order from '../pages/Order';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import DefinePassword from '../pages/DefinePassword';
import Financial from '../pages/Financial';
import { useEffect } from 'react';


function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth' element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                    <Route path="/auth/forgot-password" element={<ForgotPassword />} />
                    <Route path="/auth/define-password" element={<DefinePassword />} />
                </Route>
                <Route path="/" element={<Layout />}>
                    <Route index element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>} />
                    <Route path='/users' element={
                        <ProtectedRoute type="admin">
                            <Users />
                        </ProtectedRoute>} />

                    <Route path='/financial' element={
                        <ProtectedRoute type={['admin', 'owner']}>
                            <Financial />
                        </ProtectedRoute>} />

                    <Route path='/establishments' element={
                        <ProtectedRoute type="owner">
                            <Establishment />
                        </ProtectedRoute>} />

                    <Route path='/products' element={
                        <ProtectedRoute type="owner">
                            <Product />
                        </ProtectedRoute>} />

                    <Route path='/orders' element={
                        <ProtectedRoute type="client">
                            <Order />
                        </ProtectedRoute>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}





function ProtectedRoute({ children, type } : {children: JSX.Element, type?: string | string[]}){
    const {state} = useAuthContext();
    const location = useLocation();

    useEffect(() => {

    }, [state.isAuth])

    return (!state.isAuth) 
        ? <Navigate to="/auth" state={{from: location}} replace /> 
        : (state.user.type === type || type === undefined || type.indexOf(state.user.type) !== -1)
        ? children : <h1>Acesso não permitido</h1>


    //return <Navigate to="/auth" state={{from: location}} replace /> 
}

export default Router;
