import { useState } from 'react'
import React from 'react'
import OptionsSide from '../components/painelADM/OptionsSide'
import "./ControlsPainelADM.css"
import { PainelProduct } from './PainelProduct'

const ControlsPainelADM = () => {

  const [actionPainel,setActionPainel]=useState("relatorio")

  const paineis={
    relatorio:(<>

    <div className='configPainel'>
      <h1>Tela Relatorio</h1>
    </div>

    </>),

    produto:(<>

   <div className='configPainel'>
      <h1 className='tittlePage'>Produto</h1>
      <PainelProduct/>
   </div>

    </>),

    usuario:(<>

    <div className='configPainel'>
      <h1>Tela usuario</h1>
    </div>

    </>),
    

  }



  return (


    <div className='painel_adm'>
        <OptionsSide setActionPainel={setActionPainel}/>
        <div className='painel_container'>
              {paineis[actionPainel]||paineis.relatorio}
        </div>
    </div>
  )
}

export default ControlsPainelADM