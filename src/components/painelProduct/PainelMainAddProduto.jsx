import "./PainelMainClassificacaoFiscal.css";

import { useState } from "react";
import "./PainelMainClassificacaoFiscal.css";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
 
 
 
const PainelMainClassificacaoFiscal = () => {
    const [DescricacaoField, setNDescricacaoField] = useState("");
    const [CodigoInternoField, setCodigoInternoField] = useState("");
    const [CodigoDeBarraField, setCodigoDeBarraField] = useState("");
    const [UnidadeComercialField, setUnidadeComercialField] = useState("");
    const [ValueInput, SetInput] = useState("")
    

   
 
    return (
        <div className="containerClassificacaoFiscal">
            <form>
                <fieldset>
                    <legend>Adcionar Produto</legend>
 
                    <div className="form-container">
                        <div className="form-group">
                            <label>Descrição</label>
                            <input
                                value={DescricacaoField}
                                type="text"
                                placeholder="Descrição"
                                onChange={(e) => setNDescricacaoField(e.target.value)}
                            />
                        </div>
 
                        <div className="form-group">
                            <label>Codigo Interno</label>
                            <input
                                value={CodigoInternoField}
                                type="text"
                                placeholder="Codigo Interno"
                                onChange={(e) => setCodigoInternoField(e.target.value)}
                            />
                        </div>
 
                        <div className="form-group">
                            <label>Codigo De Barras</label>
                            <input
                                value={CodigoDeBarraField}
                                type="text"
                                placeholder="Codigo De Barras"
                                onChange={(e) => setCodigoDeBarraField(e.target.value)}
                            />
                        </div>
 
                        <div className="form-group">
                            <label>Unidade Comercial</label>
                            <input
                                value={UnidadeComercialField}
                                type="text"
                                placeholder="Unidade Comercial"
                                onChange={(e) => setUnidadeComercialField(e.target.value)}
                            />
                        </div>
 
                       
 
                        
 
                        
 
                    
 
                        
 
                    </div>
 
                    <div className="form-actions">
                        <button>Cadastrar</button>
                    </div>
                </fieldset>
            </form>
 
            <div className="tableListClassificacaoFiscal">

                <input id="pesquisar" 
                       value={ValueInput}
                       type="text" 
                       placeholder="Pesquisar "
                       onChange={(e) => SetInput(e.target.value)} />

                <table>
                    <thead>
                        <tr>
                            <th>Descricação</th>
                            <th>Codigo Interno</th>
                            <th>Codigo De Barras</th>
                            <th>Unidade Comerciaç</th>
                            <th>Ações</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Pc Gamer </th>
                            <th>04044943943</th>
                            <th>43675712232</th>
                            <th>1.65</th>
                          
                            <th><GrEdit/> <MdDeleteForever /></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
 
export default PainelMainClassificacaoFiscal;