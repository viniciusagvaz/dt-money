import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return(
    <div>
      <Header/>
      <Summary/>

      <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant= 'income'>
                 R$ 12.000,00
                </PriceHighlight>
                </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width='50%'>Aluguel</td>
              <td>
                <PriceHighlight variant="outcome">
                - R$ 4.000,00
                </PriceHighlight>

              </td>
              <td>Contas</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}