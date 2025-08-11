import { useState } from "react";
import "./OptionsSide.css"

const OptionsSide = ({setActionPainel}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBar = () => {
    setIsOpen(!isOpen)
  }

  function handleCLick(painel){
    setActionPainel(painel);
  }

  return (
    <div id="barra" style={{width: isOpen ? '150px' : '40px'}} onClick={toggleBar}>
    <ul>
      <li onClick={()=>handleCLick("relatorio")}><span class="material-icons ">bar_chart</span> <span class="texto">Relatório</span></li>
      <li onClick={()=>handleCLick("produto")}><span class="material-icons">inventory_2</span> <span class="texto">Produtos</span></li>
      <li onClick={()=>handleCLick("usuario")}><span class="material-icons ">account_circle</span> <span class="texto">Usuarios</span></li>
      <li><span class="material-icons ">logout</span> <span class="texto">Logout</span></li>
    </ul>
  </div>
  )
}

export default OptionsSide
