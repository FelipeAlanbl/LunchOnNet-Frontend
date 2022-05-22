import { useEffect, useState } from 'react';
import Content from '../../components/Content';
import { EditButton, RemoveButton } from './style';
import { FaEdit, FaUserTimes } from 'react-icons/fa';
import Table from '../../components/Table';

import api from '../../api/api';
import IUser from '../../interfaces/IUser'


function Users(){
    const [ users, setUsers ] = useState<IUser[]>([]);

    const tableFields = ['name', 'email', 'tipo', 'ativo', ''];


    /* Esconder Email no backend */
    useEffect(()=>{
        fetcUsers();
    }, [])

    async function fetcUsers() {
        const response = await api.get('/user')

        console.log(response)

        setUsers(response.data)
    }

    function renderUsers(){
        return users.map(user => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.type}</td>
                <td>{user.active ? 'Ativo': 'Inativo'}</td>
                <td className='actions'>
                    <EditButton>
                        <FaEdit/>
                    </EditButton>
                    <RemoveButton>
                        <FaUserTimes />
                    </RemoveButton>
                </td>
            </tr>
        ))
    }

    return(
        <Content>
            <>
                <h2>Usuários</h2>
                <Table fields={tableFields}>
                    <tbody>
                        {renderUsers()}
                    </tbody>
                </Table>
            </>
        </Content>
    )
}

export default Users;