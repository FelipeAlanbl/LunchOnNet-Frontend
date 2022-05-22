import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { MenuContainer } from './style';
import { FaHome, FaUsers, FaChartBar, FaStore, FaConciergeBell, FaShoppingCart } from 'react-icons/fa';

function Menu(){

    const {state: { user }} = useAuthContext();

    return(
        <MenuContainer>
            <ul>
                <li><Link to="/"><FaHome /> Home</Link></li>
                {user.type==='admin'&&<li><Link to="/users"><FaUsers /> Gestão Usuários</Link></li>}
                {(user.type==='admin' || user.type==='owner' )&&<li><Link to="/financial"><FaChartBar /> Financeiro</Link></li>}
                {user.type==='owner'&&<li><Link to="/establishments"><FaStore /> Meus Estabelecimentos</Link></li>}
                {user.type==='owner'&&<li><Link to="/products"><FaShoppingCart /> Gerenciar Produtos</Link></li>}
                {user.type==='client'&&<li><Link to="/orders"><FaConciergeBell /> Pedidos</Link></li>}
            </ul>
        </MenuContainer>
    )
}

export default Menu;