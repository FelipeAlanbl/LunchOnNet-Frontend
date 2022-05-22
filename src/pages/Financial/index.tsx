import Content from "../../components/Content";

import Table from "../../components/Table";

function Financial() {
  const fields: string[] = ['Estabelecimento', 'Proprietário', 'Status', 'Cadastrado em', 'Valor a pagar', 'Data do Vencimento' ,'Status Pagamento', 'Emitir Boleto fiscal']
  return (
    <Content>
      <>
        <h2>Financeiro</h2>
        <div>
          <input type="date" name="" id="" />
          <input type="date" name="" id="" />
        </div>
        <Table fields={fields}>
          <tbody>
            <tr>
              <td>Padaria Trigo Dourado</td>
              <td>Ademir Gomes Lima</td>
              <td>Ademir Gomes Lima</td>
              <td>22/05/2022</td>
              <td>R$ 536,72</td>
              <td>10/06/2022</td>
              <td>Aguardando Pagamento</td>
              <td><button></button></td>
            </tr>
          </tbody>
        </Table>
      </>
    </Content>
  )
}

export default Financial