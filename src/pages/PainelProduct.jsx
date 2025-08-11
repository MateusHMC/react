import React, { useState } from 'react'
import { MenuBar } from '../components/painelProduct/MenuBAr'
import PainelMainClassificacaoFiscal from '../components/painelProduct/PainelMainClassificacaoFiscal'

export const PainelProduct = () => {

    const [actionPainelProduct,setActionPainelProduct] = useState("classificacaoFiscal")

    const painelsProduct={
        classificacaoFiscal:(<PainelMainClassificacaoFiscal/>),
        addProdutos:(<div>
            <h1>Tela Add Produtos</h1>
        </div>),
        fornecedores:(<div>
            <h1>Tela Fornecedores</h1>
        </div>),
        notaFiscal:(<div>
            <h1>Tela Nota Fiscal</h1>
        </div>),
        entrada:(<div>
            <h1>Tela Entrada</h1>
        </div>),
        saida:(<div>
            <h1>Tela Saida</h1>
        </div>),
        estoque:(<div>
            <h1>Tela Estoque</h1>
        </div>)
    }
  return (
    <div>

        <nav className='headerMenu'> 

            <MenuBar setActionPainelProduct={setActionPainelProduct}/>

            <div>

            </div>

        </nav>

        {painelsProduct[actionPainelProduct] || painelsProduct.classificacaoFiscal}

    </div>

  )
}
