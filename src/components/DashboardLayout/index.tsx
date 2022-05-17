import { Outlet } from 'react-router-dom';
import Menu from '../Menu'

function Layout(){
    return(
        <div>
            <h1>Layout</h1>
            <Menu />
            <Outlet />
        </div>
    )
}

export default Layout;