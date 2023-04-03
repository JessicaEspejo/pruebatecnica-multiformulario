
import logper from '../assets/1.webp'
import trees from '../assets/logo.8c817835.png'
import '../App.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import likeicon from '../assets/icolikv.gif'
import iconoconfi from '../assets/2iconr.webp'
import 'react-calendar/dist/Calendar.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBeer } from 'react-icons/fa';


export default function Login3() {

    const [date, setDate] = useState()

    console.log("Date", date);






    const formArray = [1, 2, 3];


    const [formNo, setFormNo] = useState(formArray[0])
    const [state, setState] = useState({
        name: '',
        correo: '',
        celular: '',
        curp: '',
        rfc: '',
        fechadenacimiento: '',
        cargararchivo: '',
        fechavencimiento: '',
        nidentificacion: ''
    })


    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    const next = () => {
        if (formNo === 1 && state.name && state.correo && state.celular) {
            setFormNo(formNo + 1)
        }
        else if (formNo === 2 && state.curp && state.rfc) {
            setFormNo(formNo + 1)
        } else {
            toast.error('porfavor llene todo el formulario')
        }
    }
    const pre = () => {
        setFormNo(formNo - 1)
    }
    const finalSubmit = () => {
        if (state.nidentificacion) {
            toast.success('Formulario enviado con exito felicitaciones')
        } else {
            toast.error('Por favor complete todos los campos de entrada')
        }
    }

    // const next = () => {

    //         setFormNo(formNo + 1)
    // }


    // const pre = () => {
    //     setFormNo(formNo - 1)
    // }







    const { register, handleSubmit } = useForm();

    const onSumit = (data) => {
        console.log(data);
    }

    return (
        <div className='w-full h-screen flex'>
            <ToastContainer />
            <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[650px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
                <div className='w-full h-[550px] hidden md:block'>

                    <img className='w-full h-full  Lol' src={trees} alt="/" />
                    <div className='flex justify-center items-center'>
                        {
                            formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
                                {v}
                            </div>
                                {
                                    i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
                                }
                            </>)
                        }
                    </div>
                </div>

                {




                    formNo === 1 && <div>
                           <div className='flex justify-center items-center'>
                        {
                            formArray.map((v, i) => <><div className={`w-[35px] my-3 text-black rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-red-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
                                {v}
                            </div>
                                {
                                    i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
                                }
                            </>)
                        }
                    </div>
            

                        <div className='p-4 flex flex-col justify-around'>
                            <div className='log'>
                                <img className='logofun' src={logper} alt="/" />
                            </div>
                            <h2 className='text-4xl font-bold text-center mb-8 text-sky-400/50'>     Informacion Personal</h2>
                            <form className='p-3' onSubmit={handleSubmit(onSumit)}>
                                <div>

                                    <div>
                                        <input {...register('nombre', {
                                            required: true,

                                        })
                                        }
                                            value={state.name} onChange={inputHandle} for="nombre" className='border p-3 mr-2 m-2 bg-sky-400/50 focus:border-blue-400' type="text" placeholder='nombre' name='name' id='name' />

                                    </div>

                                    <div>
                                        <input  {...register('correo', {
                                            required: true,
                                        })}
                                            value={state.correo} onChange={inputHandle} className='border p-3 mr-2 m-2 bg-sky-400/50' type="correo" placeholder='correo' name='correo' id='correo' />

                                    </div>

                                    <div>
                                        <input  {...register('celular',
                                            {
                                                required: true,
                                                maxLength: 12
                                            })}
                                            value={state.celular} onChange={inputHandle} className=' border bg-sky-400/50 p-4 m-2 ' type="text" placeholder='celular' name='celular' id='celular' />

                                    </div>

                                </div>
                                <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>

                            </form>
                        </div>
                    </div>

                }


                {
                    formNo === 2 && <div>
                           <div className='flex justify-center items-center'>
                        {
                            formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-yellow-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
                                {v}
                            </div>
                                {
                                    i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
                                }
                            </>)
                        }
                    </div>
         

                        <div className='p-4 flex flex-col justify-around'>
                            <img className='logofun' src={iconoconfi} alt="/" />
                            <h2 className='text-4xl font-bold text-center mb-8'>Datos Adicionales</h2>
                            <div>
                                <form className='p-3' onSubmit={handleSubmit(onSumit)}>
                                    <div>
                                        <input {...register('curp', {


                                        })
                                        }
                                            value={state.curp} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="number" name='curp' placeholder='curp' id='curp' />


                                    </div>

                                    <div>
                                        <input  {...register('rfc', {

                                        })}
                                            value={state.rfc} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="number" name='rfc' placeholder='rfc' />

                                    </div>
                                    <div className="w-full h-full p-10">
                                        <label className='font-bold text-center mb-8 text-teal-100' >Fecha de Nacimiento</label>
                                        <input
                                            {...register('date', {


                                            })
                                            }
                                            type="date" className="border p-1 mr-2 bg-sky-400/50" />


                                    </div>
                                    <div className='mt-4 gap-3 flex justify-center items-center'>
                                        <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
                                        <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                }

                {
                    formNo === 3 && <div>
                           <div className='flex justify-center items-center'>
                        {
                            formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-green-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
                                {v}
                            </div>
                                {
                                    i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
                                }
                            </>)
                        }
                    </div>
           

                        <div className='p-4 flex flex-col justify-around'>
                            <img className='logofun' src={likeicon} alt="/" />
                            <h2 className='text-4xl font-bold text-center mb-8 '>Verificacion</h2>

                            <form className='p-3' onSubmit={handleSubmit(onSumit)} >
                                <div>
                                    <label for="avatar" className='font-bold text-center mb-8  text-teal-100'>Carga tu archivo</label>
                                    <input
                                        {...register('pdf/png', {
                                            required: true,

                                        })
                                        }
                                       className='border p-1 mr-2 bg-sky-400/50' type="file" id=" avatar " name="avatar " accept=" pdf/png " placeholder='pdf o png de documento' />

                                </div>

                                <div className='  p-4 m-0'>
                                    <label className='font-bold text-center mb-8 text-teal-100' >Fecha de vencimiento</label>
                                    <input  type="date" className="border p-1 mr-2 bg-sky-400/50" onChange={e => setDate(e.target.value)} />
                                </div>

                                <div>
                                    <input {...register('nidentificacion', {


                                    })
                                    }
                                        value={state.nidentificacion} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="number" name='nidentificacion' placeholder='nidentificacion' id='nidentificacion' />

                                </div>
                                <div className='mt-4 gap-3 flex justify-center items-center'>
                                    <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
                                    <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>

        </div>

    )
}

