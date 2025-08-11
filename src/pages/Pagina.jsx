
import logo from "../assets/logo.jpg"
import { Button } from '../components/Button'
import { TextField } from '../components/TextField'



export const TelaLogin = () => {
  return (
    <div className="container"> <img src={logo} alt=""  className='imgLogo' />
    <TextField tipo={"text"} placeholder={"Login"}/>
    <TextField tipo={"password"} placeholder={"Password"}/>
    <Button titulo={"Entrar"}/></div>
    
  )
}
