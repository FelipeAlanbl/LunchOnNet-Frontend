import { useEffect, useState } from "react";
import Content from "../../components/Content";
import { CardWrapper } from './style';
import { FaChartArea, FaStore, FaUser, FaShippingFast } from 'react-icons/fa';

import api from "../../api/api";
import { useAuthContext } from "../../context/AuthContext";

function Dashboad() {

  const {state: {user}} = useAuthContext();

  const [totalOrders, setTotalOrders] = useState(0);
  const [totalUsers, setTotalUSers] = useState(0);
  const [totalEstablishments, setTotalEstablishments] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(()=>{
    fetchTotalUsers();
  }, []);

  async function fetchTotalUsers(){
    try{
      const response = await api.get('/user/total');

      console.log(response)

      setTotalUSers(response.data)
      
    } catch(err){
      console.log(err)
    }
  }

  return (
    <Content>
      <>
        <h2>Dashboard</h2>
        <CardWrapper>
          <div style={{background: '#4DB2CC'}}>
            <p className="card-title">Pedidos</p>
            <p className="card-content">{totalOrders}</p>
            <FaShippingFast />
          </div>

          {user.Admin && <div style={{background: '#EE443C'}}>
            <p className="card-title">Usuários</p>
            <p className="card-content">{totalUsers}</p>
            <FaUser />
          </div>}

          <div style={{background: '#F1AC52'}}>
            <p className="card-title">Estabelecimentos</p>
            <p className="card-content">{totalEstablishments}</p>
            <FaStore />
          </div>

          <div style={{background: '#5BB95B'}}>
            <p className="card-title">Faturamento</p>
            <p className="card-content">R$ {totalIncome.toFixed(2)}</p>
            <FaChartArea />
          </div>
        </CardWrapper>
      </>
    </Content>
  )
}

export default Dashboad