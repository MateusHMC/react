import { useState } from "react";
import "./PainelMainClassificacaoFiscal.css";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
 
 
 
const PainelMainClassificacaoFiscal = () => {
    const [ncmField, setNcmField] = useState("");
    const [cfopField, setCfopField] = useState("");
    const [cestField, setCestField] = useState("");
    const [cstIcmsField, setCstIcmsField] = useState("");
    const [aliquotaIcmsField, setAliquotaIcmsField] = useState("");
    const [cstPisField, setCstPisField] = useState("");
    const [aliquotaPisField, setAliquotaPisField] = useState("");
    const [cstCofinsField, setCstCofinsField] = useState("");
    const [aliquotaCofinsField, setAliquotaCofinsField] = useState("");
    const [ValueInput, SetInput] = useState("")

    const [classificacaoFiscal,setClassificacaoFiscal] = useState("")


    const listaClassificacaoFiscal= [

        {ncm: "1234.56.78" },
        {ncm: "2345.67.89"},
        {ncm: "3456.78.90"},
        {ncm: "4567.89.00"}

    ]
 
    return (
        <div className="containerClassificacaoFiscal">
            <form>
                <fieldset>
                    <legend>Classificação Fiscal</legend>
 
                    <div className="form-container">
                        <div className="form-group">
                            <label>NCM</label>
                            <input
                                value={ncmField}
                                type="text"
                                placeholder="NCM"
                                onChange={(e) => setNcmField(e.target.value)}
                            />
                        </div>
 
                        <div className="form-group">
                            <label>CFOP</label>
                            <input
                                value={cfopField}
                                type="text"
                                placeholder="CFOP"
                                onChange={(e) => setCfopField(e.target.value)}
                            />
                        </div>
 
                        <div className="form-group">
                            <label>CEST</label>
                            <input
                                value={cestField}
                                type="text"
                                placeholder="CEST"
                                onChange={(e) => setCestField(e.target.value)}
                            />
                        </div>
 
                        <div className="form-group">
                            <label>CST ICMS</label>
                            <input
                                value={cstIcmsField}
                                type="text"
                                placeholder="CST ICMS"
                                onChange={(e) => setCstIcmsField(e.target.value)}
                            />
                        </div>
 
                        <div className="form-group">
                            <label>Alíquota ICMS (%)</label>
                            <input
                                value={aliquotaIcmsField}
                                type="number"
                                step="0.01"
                                placeholder="Alíquota ICMS"
                                onChange={(e) => setAliquotaIcmsField(e.target.value)}
                            />
                        </div>
 
                        <div className="form-group">
                            <label>CST PIS</label>
                            <input
                                value={cstPisField}
                                type="text"
                                placeholder="CST PIS"
                                onChange={(e) => setCstPisField(e.target.value)}
                            />
                        </div>
 
                        <div className="form-group">
                            <label>Alíquota PIS (%)</label>
                            <input
                                value={aliquotaPisField}
                                type="number"
                                step="0.01"
                                placeholder="Alíquota PIS"
                                onChange={(e) => setAliquotaPisField(e.target.value)}
                            />
                        </div>
 
                        <div className="form-group">
                            <label>CST COFINS</label>
                            <input
                                value={cstCofinsField}
                                type="text"
                                placeholder="CST COFINS"
                                onChange={(e) => setCstCofinsField(e.target.value)}
                            />
                        </div>
 
                        <div className="form-group">
                            <label>Alíquota COFINS (%)</label>
                            <input
                                value={aliquotaCofinsField}
                                type="number"
                                step="0.01"
                                placeholder="Alíquota COFINS"
                                onChange={(e) => setAliquotaCofinsField(e.target.value)}
                            />

                            
                       <div className='form-group'>
                            <label>Classificação Fiscal</label>
                            <select
                            value={classificacaoFiscal}
                            onChange={(e) => setClassificacaoFiscal(e.target.value)}
                            className="pesquisar">
                                {listaClassificacaoFiscal.map((valor,index)=>(
                                    <option key={index}>{valor.ncm}</option>
                                ))}
                               
                            </select>
                        </div>



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
                   placeholder="Pesquisar NCM, CFOP"
                   onChange={(e) => SetInput(e.target.value)} />
                

                <table>
                    <thead>
                        <tr>
                            <th>NCM</th>
                            <th>CFOP</th>
                            <th>ICMS(%)</th>
                            <th>PIS(%)</th>
                            <th>COFINS(%)</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>94036000</th>
                            <th>5102</th>
                            <th>18.00</th>
                            <th>1.65</th>
                            <th>7.60</th>
                            <th><GrEdit/> <MdDeleteForever /></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
 
export default PainelMainClassificacaoFiscal;