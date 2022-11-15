import React from 'react'
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { getGenerosRequest } from "../api/genres.api.js"
import { getAlbumesRequest } from '../api/albums.api.js';

const InserCanciones = () => {

    const [generos, setGeneros] = useState([])

    const [loading, setLoading] = useState();

    const [albumes, setAlbumes] = useState([])


    const cargarGeneros = async () => {
        setLoading(true);
        const res = await getGenerosRequest();
        console.log(res.data);
        setGeneros(res.data);
        //console.log(generos)
        setLoading(false);
    };

    const cargarAlbumes = async () => {
        setLoading(true);
        const res = await getAlbumesRequest();
        console.log(res.data);
        setAlbumes(res.data);
        console.log(albumes)
        setLoading(false);
    };

    // Apenas cargue la página por primera vez, se llamará a un método que cargue las canciones
    useEffect(() => {
        cargarGeneros();
        cargarAlbumes();
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
                <h1 className='UserText'>Ingresa una canción</h1><br></br>
                <h1 className='UserText'>ISRC</h1>
                <input type="text" className='InputSong'{...register('isrc', {
                    required: true
                })}></input>
                {errors.isrc?.type === 'required' && <p className='Error'>El campo ISRC es requerido</p>}
                <h1 className='UserText'>Titulo</h1>
                <input type="text" className='InputSong'{...register('titulo', {
                    required: true
                })}></input>
                {errors.titulo?.type === 'required' && <p className='Error'>El campo Titulo es requerido</p>}
                <h1 className='UserText'>Fecha de lanzamiento</h1>
                <input type="text" className='InputSong'{...register('fechaLanzamiento', {
                    required: true
                })}></input>
                {errors.fechaLanzamiento?.type === 'required' && <p className='Error'>El campo Fecha de lanzamiento es requerido</p>}
                <h1 className='UserText'>Ruta de la canción</h1>
                <input type="text" className='InputSong'{...register('rutaCancion', {
                    required: true
                })}></input>
                {errors.rutaCancion?.type === 'required' && <p className='Error'>El campo Ruta de canción es requerido</p>}
                <h1 className='UserText'>Id del album</h1>
                <select className='InputSong'{...register('idAlbum', {
                    reuired: true
                })}>
                    {albumes.map((item) => {
                        return (
                            <option key={item.idAlbum}>{item.titulo}</option>)
                    })}
                </select>
                <h1 className='UserText'>Duración</h1>
                <input type="text" className='InputSong'{...register('duracion', {
                    required: true
                })}></input>
                {errors.duracion?.type === 'required' && <p className='Error'>El campo Duración es requerido</p>}
                <h1 className='UserText'>Genero</h1>
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
                {errors.idGenero?.type === 'required' && <p className='Error'>El campo Genero es requerido</p>}
                <br></br>
                <input type="Submit" className='BotonRegis' value="Insertar" />
            </form>
        </div>
    )
}
export default InserCanciones