import React from 'react'
import "./MenuBar.css"
import { TbTax,TbPackages  } from "react-icons/tb"
import { LuPackagePlus } from "react-icons/lu";
import { FaTruckLoading,FaFileInvoiceDollar} from "react-icons/fa";
import { GoPackageDependents,GoPackageDependencies } from "react-icons/go";

export const MenuBar = ({setActionPainelProduct}) => {

  return (
 
        <div className='menuBar'>

             <ul>

                <li onClick={()=>setActionPainelProduct("classificacaoFiscal")}> <TbTax/>Fiscal</li>
                <li onClick={()=>setActionPainelProduct("addProdutos")}> <LuPackagePlus/>Add Produto</li>
                <li onClick={()=>setActionPainelProduct("fornecedores")}> <FaTruckLoading/>Fornecedor</li>
                <li onClick={()=>setActionPainelProduct("notaFiscal")}> <FaFileInvoiceDollar/>Nota Fiscal</li>
                <li onClick={()=>setActionPainelProduct("entrada")}> <GoPackageDependents />Entrada</li>
                <li onClick={()=>setActionPainelProduct("saida")}> <GoPackageDependencies />Saida</li>
                <li onClick={()=>setActionPainelProduct("estoque")}> <TbPackages />Estoque</li>
                  
                </ul>

            </div>



  )
}
