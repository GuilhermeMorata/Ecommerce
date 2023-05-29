"use client"; 
import { ProductContext } from "@/context/product.context";
import { IProduct, IProductContext } from "@/models/products.model";
import { useContext, useState } from 'react';


export default function CardWish(parms:IProduct){
    const { handleRemoveWishlist , handleDeleteWishlist , } = useContext<IProductContext>(ProductContext);
    const { image , name , value , description , amount } = parms;
    const  [ count , setCount ] = useState(amount || 0)
    
    return(
        <div className="flex-row m-5 w-full bg-white shadow rounded-md">
            <div className="flex-row p-4 flex items-center justify-evenly text-center">
                <h1 className="text-2xl mr-5">{name}</h1>
                <p className="text-center text-gray-800 mt-1">{ "Unid: R$" + ((value ? value : 0) /100).toFixed(2)}</p>
        
                <p className="text-center text-gray-800 mt-1">{'Quantidade: '+amount}</p>
                <p className="text-center text-gray-800 mt-1">{'Total: R$'+ (( ( value? value : 0 ) * ( amount ? amount : 1 )/100).toFixed(2) ) }</p>
                <div className="inline-flex items-center mt-2">
            <button
              className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
              onClick={()=>{
                if(count > 1 ){
                    setCount(count - 1), handleRemoveWishlist({image , name , value , description , amount : count - 1})
                }else{
                    handleDeleteWishlist({image , name , value , description , amount: count})
                }
                }}
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
            <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none"> {count} </div>
            <button
              onClick={()=>{ setCount(count + 1), handleRemoveWishlist({image , name , value , description , amount : count + 1})}}
              className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
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
                    d="M12 4v16m8-8H4"
                />
                </svg>
            </button>
            </div>
            <button
              onClick={()=>{handleDeleteWishlist({image , name , value , description , amount: count})}} 
              className="p-1.5  bg-[#395B64] rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="white" stroke-width="2" />
                    <line x1="0" y1="100" x2="100" y2="0" stroke="white" stroke-width="2" />
                </svg>
            </button>
            </div>
        </div>
    )
}