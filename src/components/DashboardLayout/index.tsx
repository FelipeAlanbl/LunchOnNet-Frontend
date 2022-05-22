import { Outlet } from 'react-router-dom';
import Menu from '../Menu';
import Header from '../Header';
import { DashboardContainer } from './style'

function Layout(){
    return(
        <DashboardContainer>
            <Header />
            <Menu />
            <div className='content'>
                <Outlet />
            </div>
        </DashboardContainer>
    )
}

export default Layout;