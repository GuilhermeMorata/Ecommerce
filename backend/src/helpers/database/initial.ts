

import sequelize from "sequelize";
import { productDto } from "src/api/product/dto/product.model";
import { ProductTable } from "src/entity/product.entity";

const items: productDto[] = [
    {
        value :120000,
        category : 'notebook',
        name: 'teste1',
        description: 'descrição básica de um item',
        image: 'http://localhost:8080/img\\5b3d76b7c10b3c9e58583aab7d10c7f72d.webp',
    },
    {
        value: 12000,
        category : "maquiagem",
        name: "teste2",
        description: "descrição básica de um um item",
        image: 	"http://localhost:8080/img\\2f5bf4f7ef79891079739699ffee40c103.webp",
    },
    {
       name:"teste3",
       description:"gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho gatinho ",
       image:"http://localhost:8080/img\\185a106b813cbd56cdb5afcf2edea48f3.webp",
       category:"gatinho",
       value:9999,
    }
]


export default async function initial(){
    //change for seeders
    const initial = await ProductTable.findAll({})
    initial.length > 0 ? null :
    items.map(async (value:productDto)=>{
        await ProductTable.create({...value})
    })
   
    
}