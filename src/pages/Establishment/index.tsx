import { useEffect, useState } from 'react';
import Content from "../../components/Content";
import Table from "../../components/Table";
import { FaStoreSlash, FaEdit } from 'react-icons/fa'
import useModal from "../../hooks/useModal";
import Modal from "../../components/Modal";
import { FormWrapper, FormInputWrapper } from '../Login/style';
import IEstablishment from '../../interfaces/IEstablishment'

import api from "../../api/api";
import { useAuthContext } from '../../context/AuthContext';

function Esbalhisment() {
  const fields: string[] = ['Estabelecimento', 'Endereço', 'Status', ''];

  const { state: { user } } = useAuthContext()

  const [establishments, setEstablishments] = useState<IEstablishment[]>([]);

  useEffect(() => {
    fetchEstablishments(user.Owner?.id)
  })

  async function fetchEstablishments(id: number | undefined) {
    try {
      const response = await api.get(`establishment/owner/${user.Owner?.id}`);

      setEstablishments(response.data);
    } catch (err) {
      console.log(err)
    }

  }

  function renderEstablhisments() {
    return establishments.map(establishment => (
      <tr key={establishment.id}>
        <td>{establishment.nome}</td>
        <td></td>
        <td>{establishment.status ? 'Ativo' : 'Inativo'}</td>
        <td>
          <button>
            <FaEdit />
          </button>
          <button>
            <FaStoreSlash />
          </button>
        </td>
      </tr>
    ))
  }

  const { modalOpened, setModalOpened, onClose } = useModal();
  return (
    <Content>
      <>
        <h2>Meu Estabelecimento</h2>
        <button className="c-content__new-item" onClick={() => setModalOpened(!modalOpened)}>Adicionar</button>
        <div>
          <Table fields={fields}>
            <tbody>
              {renderEstablhisments()}
            </tbody>
          </Table>
        </div>
        <Modal open={modalOpened} onClose={onClose} title="Novo Estabelecimento">
          <>
            <div className="modal-body">
              <FormWrapper>
                <FormInputWrapper>
                  <label htmlFor="">Nome do Estabelecimento</label>
                  <input type="text" />
                </FormInputWrapper>
                <FormInputWrapper>
                  <label htmlFor="">Endereço</label>
                  <input type="text" />
                </FormInputWrapper>
                <FormInputWrapper>
                  <label htmlFor="">Número</label>
                  <input type="text" />
                </FormInputWrapper>
                <FormInputWrapper>
                  <label htmlFor="">Bairro</label>
                  <input type="text" />
                </FormInputWrapper>
              </FormWrapper>
            </div>
            <div className="modal-footer">
              <button className="c-modal__buton-cancel" onClick={onClose}>Cancelar</button>
              <button className="c-modal__buton-confirm">Salvar</button>
            </div>
          </>
        </Modal>
      </>
    </Content>
  )
}

export default Esbalhisment;
