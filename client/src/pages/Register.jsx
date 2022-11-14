import React from 'react'
import { useForm } from "react-hook-form";

const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='Register'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className='textRegis'>
                    Nombre
                </p>
                <input type='text' className='Regis' placeholder=' ej:Luis Miguel' id='Nombres' {...register('Nombres')} />
                {errors.Nombres.type}
                <p className='textRegis'>
                    Apellidos
                </p>
                <input type='text' className='Regis' placeholder=' ej:Rodriguez Muñoz' id='Apellidos' {...register('Apellidos')}></input>
                <p className='textRegis'>
                    Documento de identidad
                </p>
                <input type='text' className='Regis' placeholder=' ej:1005785804' id='Id' {...register('Id')}></input>
                <p className='textRegis'>
                    Nombre de usuario
                </p>
                <input type='text' className='Regis' placeholder=' ej:xXPepito123proXx' id='Usuario'></input>
                <p className='textRegis' {...register('Usuario')}>
                    Correo
                </p>
                <input type='text' className='Regis' placeholder=' ej:TerminatorHansolo@gmail.com' id='Email' {...register('Email')}></input>
                <p className='textRegis'>
                    Contraseña
                </p>
                <input type='text' className='Regis' placeholder=' ej:Contraseña123' id='Contrasena'></input>
                <p className='textRegis' {...register('Contrasena')}>
                    Repetir contraseña
                </p>
                <input type='text' className='Regis' placeholder=' Repite la contraseña' id='ConfirmarContrasena' {...register('ContrasenaX2')}></input><br></br>
                <input type="Submit" className='BotonRegis' value="Registrarse" />
            </form>
        </div>
    )
}

export default Register