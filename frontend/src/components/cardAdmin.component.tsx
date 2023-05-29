"use client"; 
import { ProductContext } from "@/context/product.context";
import { IProduct, IProductContext } from "@/models/products.model";
import { useContext, useState } from 'react';
import Image from "next/image";

export default function CardAdmin(parms:IProduct){
    const {    handleRemoveProduct , setItemProduct , setShowModal } = useContext<IProductContext>(ProductContext);
    const { image , name , value , description , category } = parms;
    
    return(
        <div className="m-5 w-80 bg-white shadow rounded-md">
         <div className="relative h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center" >
            <Image style={{objectFit:"contain"}}  fill  src={image} alt={`${name}`} />  
        </div>
        <div className="p-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-gray-800 text-2xl text-center my-1">Nome: {name}</h1>
            <p className="text-center p-4 w-80 text-gray-800 mt-1 h-100 truncate text-ellipsis ">Desc: {description}</p>
            <hr className="h-2 text-gray-500 w-full  "/>
            <p className="text-center  items-center w-80 text-gray-800  h-100 truncate text-ellipsis ">Categoria: {category}</p>
            <hr className="h-2 text-gray-500 w-full my-1"/>
            <p className="text-center text-gray-800 mt-1">{ "R$: " + ((value ? value : 0) /100).toFixed(2)}</p>
            <button onClick={()=>{
                handleRemoveProduct(parms)
            }} className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-800  disabled:opacity-50 mt-4 w-full flex items-center justify-center" >
                Deletar
            </button>
            <button onClick={()=>{
                setItemProduct({item: parms, isEdit: true})
                setShowModal(true)
            }} className="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-800 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center" >
                Editar
            </button>


        </div>
    </div>
    )
}