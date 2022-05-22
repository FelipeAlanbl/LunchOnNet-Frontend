import Content from "../../components/Content";
import Table from "../../components/Table";
import { ProductsContainer } from './style'

function Product() {

  const fields:string[] = ['Produto', 'Preço', 'Estoque', '']

  return (
    <Content>
      <>
        <h2>Meus Produtos</h2>
        <button className="c-content__new-item">Adicionar</button>
        <ProductsContainer>
          <select className="c-product__select">
            <option value="">Padaria Trigo Dourado</option>
            <option value="">Açai mania</option>
          </select>
          <Table fields={fields}>
            <tbody>
              <tr>
                <td>Pão de Forma</td>
                <td>R$ 8,50</td>
                <td>15</td>
                <td>
                  <button>Desabilitar Produto</button>
                  <button>Editar</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </ProductsContainer>
      </>
    </Content>
  )
}

export default Product