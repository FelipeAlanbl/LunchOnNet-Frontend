import React,{ useState }  from 'react'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { HeaderContainer, AuthUser } from './style';
import {FaUserAlt, FaSignOutAlt} from 'react-icons/fa';

function Header() {
    const {state: { user }} = useAuthContext();

    const [showMenu, setShowMenu] = useState(false);

    const { handleLogout } = useAuthContext()
    
    return (
        <HeaderContainer>
            <div className='logo'>
                <h2>Lunch On Net</h2>
            </div>
            <div>
                <AuthUser>
                    <div className='c-avatar' onClick={e => setShowMenu(!showMenu)}>{user?.name}</div>
                    <div className={`c-menu-user ${showMenu ? 'show' : ''}`}>
                        <ul>
                            <li>
                                <Link to="/profile">
                                    <FaUserAlt /> Perfil
                                </Link>
                            </li>
                            <li>
                                <span onClick={handleLogout}>
                                    <FaSignOutAlt/> Sair
                                </span>
                            </li>
                        </ul>
                    </div>
                </AuthUser>
                {/* <p>Bem vindo, { user.name }, você é um usuário tipo: { user.type }</p>
                <button onClick={handleLogout}>
                    Logout
                </button> */}
            </div>
        </HeaderContainer>
    )
}

export default Header