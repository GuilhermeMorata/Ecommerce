import { useContext, useState } from "react"


import { ProductContext } from "../context/product.context";
import { IProductContext } from "@/models/products.model";

export default function Search(){
    const { filter , setFilter  } = useContext<IProductContext>(ProductContext);

    return(
        <div className="w-full flex container flex-row justify-center p-10 items-center text-black">
            <div className="w-full rounded-md mr-10">
                <input
                    type="text"
                    className="w-full rounded-md indent-5 h-[3vh]"
                    placeholder="buscar por nome ou categoria"
                    onChange={(e: any) =>
                        setFilter({...filter, name : e.target.value})
                    }
                value={filter.name}
                />
                
            </div>
            <div className="flex flex-row text-center">
                <label>Limite por pagina</label>
                <input
                    value={filter.limit}
                    id="minmax-range"
                    type="number"
                    min="1"
                    max="50"
                    onChange={(e: any) =>
                        setFilter({...filter, limit : e.target.value})
                    }
                    className="h-full self-center text-xl indent-5"
                />
            </div>
        </div>
    )
}