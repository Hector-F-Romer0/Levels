import React from 'react'
import { useForm } from "react-hook-form";
//import { useState } from 'react';

const InserArtist = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='Register'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='UserText'>Inserta un artista</label><br></br><br></br>
                <label className='UserText'>Nombre Artistico</label><br></br>
                <input type='text' className='InputSong' {...register('nombreArtistico', {
                    required: true
                })}></input><br></br>
                {errors.nombreArtistico?.type === 'required' && <p className='Error'>El campo Nombre Artistico es requerido</p>}
                <label className='UserText'>Nombres</label><br></br>
                <input type='text' className='InputSong' {...register('nombres', {
                    required: true
                })}></input><br></br>
                {errors.nombres?.type === 'required' && <p className='Error'>El campo Nombres es requerido</p>}
                <label className='UserText'>Apellidos</label><br></br>
                <input type='text' className='InputSong' {...register('apellidos', {
                    required: true
                })}></input><br></br>
                {errors.apellidos?.type === 'required' && <p className='Error'>El campo Apellidos es requerido</p>}
                <label className='UserText'>Fecha de nacimiento</label><br></br>
                <input type='text' className='InputSong' {...register('fechaNacimiento', {
                    required: true
                })}></input><br></br>
                {errors.fechaNacimiento?.type === 'required' && <p className='Error'>El campo Fecha de nacimiento es requerido</p>}
                <label className='UserText'>Lugar de nacimiento</label><br></br>
                <input type='text' className='InputSong' {...register('lugarNacimiento', {
                    required: true
                })}></input><br></br>
                {errors.lugarNacimiento?.type === 'required' && <p className='Error'>El campo Lugar de nacimiento es requerido</p>}
                <input type="Submit" className='BotonRegis' value='Insertar'></input>
            </form>
        </div>
    )
}

export default InserArtist