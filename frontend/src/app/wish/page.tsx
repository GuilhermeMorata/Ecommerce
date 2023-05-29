"use client"; 
import ListWish from "@/components/listWish.component";
import { ProductContext } from "@/context/product.context";
import { IProductContext } from "@/models/products.model"
import { useContext } from "react"

export default function Wish(){
    const { wishItems } = useContext<IProductContext>(ProductContext);

    return(
        <div className="flex-col w-full h-full container text-black justify-center items-center">
            <div className="flex flex-col h-[50vh] w-100 border-2 border-black m-10">
                <ListWish data={wishItems.data} />
            </div>
            <div className="m-10">
                <div className="flex-grow border-t-4 my-2 border-gray-400"></div>
                    <span className="p-10 m-15 text-5xl">{`Valor total: R$${(wishItems.totalValue /100).toFixed(2)}`}</span>
                <div className="flex-grow  border-t-4 my-2 border-gray-400"></div>
            </div>
        </div>
    )
}