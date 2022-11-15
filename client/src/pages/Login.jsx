import React from 'react'
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const OnSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='Login'>
            <form onSubmit={handleSubmit(OnSubmit)}>
                <label className='LoginText'>
                    Usuario
                </label><br></br>
                <input type='input' className='LoginHolder' {...register('usuario', { required: true })}></input>
                {errors.usuario?.type === 'required' && <p className='Error'>Debes de escribir tu usuario</p>}<br></br>
                <label className='LoginText'>
                    Contraseña
                </label><br></br>
                <input type='input' className='LoginHolder' {...register('contrasena', { required: true })}></input>
                {errors.contrasena?.type === 'required' && <p className='Error'>Debes de escribir tu contraseña</p>}<br></br>
                <input type="Submit" className='LoginBtn' value="Iniciar sesion" />
            </form>
        </div>
    )
}

export default Login