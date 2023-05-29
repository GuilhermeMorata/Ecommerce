"use client"; 

import { IProduct } from "@/models/products.model";
import WishItem from "./cardWish.component";


export default function ListWish(parms:any){
    const { data } = parms

    return(
        <div className="flex flex-col h-full overflow-y-scroll container  p-10 flex-wrap">
            {
                data?.length > 0 ? data?.map((item: IProduct,index:number)=>{
                    return(
                        <WishItem amount={item.amount} category={item.category} image={item.image} description={item.description} value={item.value} name={item.name}  key={index} />
                    )
                })
                : <div className="text-black text-5xl "> Não possui dados, retorne mais tarde!</div>
            }
        </div>
    )
}