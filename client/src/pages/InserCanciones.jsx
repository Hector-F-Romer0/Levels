import React from 'react'
import { useForm } from "react-hook-form";

const InserCanciones = () => {

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
                <input type="text" className='InputSong'{...register}></input>
                <h1 className='UserText'>Duración</h1>
                <input type="text" className='InputSong'{...register('duracion', {
                    required: true
                })}></input>
                {errors.duracion?.type === 'required' && <p className='Error'>El campo Duración es requerido</p>}
                <h1 className='UserText'>Id del Genero</h1>
                <select className='InputSong'>
                    <option value="Reggue">1</option>
                    <option value="Rock">2</option>
                    <option value="Pop">3</option>
                    <option value="Balada">4</option>
                    <option value="Jmm">5</option>
                </select><br></br>
                <input type="Submit" className='BotonRegis' value="Insertar" />
            </form>
        </div>
    )
}
export default InserCanciones