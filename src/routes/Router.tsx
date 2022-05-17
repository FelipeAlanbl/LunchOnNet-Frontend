import {useContext} from 'react';
import {BrowserRouter, Routes, Route, Navigate, useLocation} from 'react-router-dom';

import Layout from '../components/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';

import { AuthContext } from '../context/AuthContext';


function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}



function ProtectedRoute({children} : {children: JSX.Element}){
    const ctx = useContext(AuthContext);
    const location = useLocation();

    console.log(ctx)

    return !ctx.isAuth ? <Navigate to="/login" state={{from: location}} replace /> : children
}

export default Router;
