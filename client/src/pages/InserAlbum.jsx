import React from 'react'
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import { getGenerosRequest } from "../api/genres.api.js"

const InserAlbum = () => {

    const [generos, setGeneros] = useState([])

    const [loading, setLoading] = useState();

    const cargarGeneros = async () => {
        setLoading(true);
        const res = await getGenerosRequest();
        console.log(res.data);
        setGeneros(res.data);
        console.log(generos)
        setLoading(false);
    };

    // Apenas cargue la página por primera vez, se llamará a un método que cargue las canciones
    useEffect(() => {
        cargarGeneros();
    }, []);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    if (loading) {
        return <h1>Cargando...</h1>;
    }

    return (
        <div className='Register'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='textRegis'>Inserta un artista</label><br></br><br></br>
                <label className='textRegis'>Titulo</label><br></br>
                <input type="text" className='InputSong' {...register('titulo', {
                    required: true
                })}></input><br></br>
                {errors.titulo?.type === 'required' && <p className='Error'>El campo Titulo es requerido</p>}
                <label className='textRegis'>Fecha de lanzamiento</label><br></br>
                <input type="text" className='InputSong' {...register('fechaLanzamiento', {
                    required: true
                })}></input><br></br>
                {errors.fechaLanzamiento?.type === 'required' && <p className='Error'>El campo Fecha de lanzamiento es requerido</p>}

                <label className='UserText'>Genero</label><br></br>
                <select className='InputSong'{...register('idGenero', {
                    reuired: true
                })}>
                    {generos.map((item) => {
                        return (
                            <option value={item.idGenero}>{item.nombreGenero}</option>)
                        // <h1 value={item.idGenero}>{item.nombreGenero}</h1>

                    })}
                    {/* <option value="Reggue">1</option>
                    <option value="Rock">2</option>
                    <option value="Pop">3</option>
                    <option value="Balada">4</option>
                    <option value="Jmm">5</option>  */}
                </select>

                <label className='textRegis'>Discografía</label><br></br>
                <input type="text" className='InputSong' {...register('discografia', {
                    required: true
                })}></input><br></br>
                {errors.discografia?.type === 'required' && <p className='Error'>El campo Discografia es requerido</p>}

                <input type="Submit" className='BotonRegis' value='Insertar'></input>
            </form>
        </div>
    )
}

export default InserAlbum