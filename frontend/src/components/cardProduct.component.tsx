"use client"; 
import { ProductContext } from "@/context/product.context";
import { IProduct, IProductContext } from "@/models/products.model";
import Image from "next/image";
import { useContext, useState } from 'react';


export default function CardProduct(parms:IProduct){
    const { handleAddWishlist } = useContext<IProductContext>(ProductContext);
    const { image , name , value , description , amount , category} = parms;
    const  [ count , setCount ] = useState(amount || 0)

    return(
        <div className="m-5 w-80 h-[40vh] bg-white shadow rounded-md">
            <div className="relative h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center" >
                <Image style={{objectFit:"contain"}}  fill className="object-cover" src={image} alt={`${name}`} />  
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center">
                <h1 className="text-gray-800 text-2xl text-center my-1">Nome: {name}</h1>
                <p className="text-center p-4 w-80 text-gray-800 mt-1 h-100 truncate text-ellipsis ">Desc: {description}</p>
                <hr className="h-2 text-gray-500 w-full  "/>
                <p className="text-center  items-center w-80 text-gray-800  h-100 truncate text-ellipsis ">Categoria: {category}</p>
                <hr className="h-2 text-gray-500 w-full my-1"/>
                <p className="text-center text-gray-800 mt-1">{ "R$: " + ((value ? value : 0) /100).toFixed(2)}</p>
                <div className="inline-flex items-center mt-2">
                <button
                    onClick={()=>{count > 0 ?  setCount(count - 1) : null}}
                    className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 12H4"
                    />
                    </svg>
                </button>
            <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none" > {count} </div>
                <button
                    onClick={()=>{setCount(count + 1)}}
                    className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                    />
                    </svg>
                </button>
            </div>
                <button 
                    disabled={count > 0 ? false : true}
                    onClick={()=>handleAddWishlist({image,name,value,description, amount:count})}
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
                >
                    Adicionar ao carrinho
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}