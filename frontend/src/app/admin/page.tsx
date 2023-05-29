"use client"; 
import ListAdmin from "@/components/listAdmin.component";
import ProductModal from "@/components/modalAdmin.component"
import { ProductContext } from "@/context/product.context";
import { IProduct, IProductContext } from "@/models/products.model"
import { useContext, useState } from "react"

export default function Admin(){
    const { setShowModal , setItemProduct , productItems} = useContext<IProductContext>(ProductContext);
    
    return(
        <div className="flex-col w-full h-full container text-black justify-center items-center">
            <div className="flex justify-between p-10 border-b-2 border-black w-full">
                <h1 className="text-3xl">Painel administrativo</h1>
                <button
                    onClick={()=>{
                        setItemProduct({item:{},isEdit:false});
                        setShowModal(true)
                    }}  
                    className="bg-white text-gray-400 border-gray-700 border-2 font-bold py-2 px-4 rounded">Adicionar item</button>
            </div>
            <div className="p-10 container flex flex-col justify-center ">
                <div>
                    <h1>Lista de Produtos</h1>
                </div>
                <div>
                   <ListAdmin data={productItems.data} />
                </div>
            </div>
            <ProductModal  />
        </div>
    )
}