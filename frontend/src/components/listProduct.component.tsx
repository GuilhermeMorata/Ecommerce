"use client"; 
import { IProduct } from "@/models/products.model";
import CardProduct from "./cardProduct.component";
import { useEffect, useState } from "react";


export default function ListProduct(parms:any){
    const { data } = parms

    return(
        <div className="flex h-[70vh]  overflow-scroll flex-row container justify-between p-10 flex-wrap">
            {
                data?.length > 0 ? data?.map((item: IProduct,index:number)=>{
                    return(
                        <CardProduct  category={item.category} image={item.image} description={item.description} value={item.value} name={item.name}  key={index} />
                    )
                })
                
                : <div className="text-black text-5xl "> Não possui dados, retorne mais tarde!</div>
            }
        </div>
    )
}