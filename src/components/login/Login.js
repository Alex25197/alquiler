import React, { useState }from 'react';
import Input from './Input'
import './Login.css'

const Login = () => {

    const [user, setUser] = useState('')
    const [Password, setPassword] = useState('')

    /*Esto actualiza cuando cambia el usuario o la contraseña cuando se escriben en tiempo real*/
    function handleChange(name, value){
        if (name === 'usuario'){
            setUser(value)
        }else{
            setPassword(value)
        }

        console.log('usuario: ', user)
        console.log('contraseña: ', Password)
    }


    /*Esto hace submit el password y el usuario y muestra los datos recogidos al darle al entrar*/
    function handleSubmit(){
        let account = { user, Password }
        if(account){
            console.log('account: ', account)
        }
    }




    return (
        <div className='container-login'>

<h1>Bienvenido al sistema</h1>
            <label>Usuario</label>
            
            <Input
            attribute={{
                id:'usuario',
                name:'usuario',
                type:'text',
                placeholder:'Ingrese su usuario'
            }
                }
                handleChange={handleChange}/>
                <label>Contraseña</label>
                <Input
            attribute={{
                id:'contraseña',
                name:'contraseña',
                type:'text',
                placeholder:'Ingrese su contraseña'
            }
                }
                handleChange={handleChange}/>
                <button onClick={handleSubmit}>Entrar</button>

        </div>
        
    )
}

export default Login
