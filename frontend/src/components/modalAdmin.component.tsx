import { ProductContext } from "@/context/product.context";
import { IProduct, IProductContext } from "@/models/products.model";
import { ChangeEvent, useContext, useEffect, useState } from "react";



export default function ProductModal(){
  
    const { handleAddProduct ,  itemProduct ,setShowModal , showModal , handleEditProduct } = useContext<IProductContext>(ProductContext);

    const [ productItem , setProductItem ] = useState<any>({})

    useEffect(()=>{
      itemProduct.isEdit ? setProductItem(itemProduct.item) :  setProductItem({})
    },[showModal])

    function handlerSubmit(e:Event){
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('name', productItem.name);
        formData.append('description', productItem.description);
        formData.append('category', productItem.category);
        formData.append('image',  productItem.image);
        formData.append('value',  productItem.value);
        itemProduct.isEdit ? formData.append('lastImage',itemProduct.item.image) : null
        itemProduct.isEdit ? formData.append('id_product',`${itemProduct.item.id_product}`) : null
        
        if(itemProduct.isEdit){
          handleEditProduct(formData)
        }
        else{
          handleAddProduct(formData)
        }
        
        setShowModal(false)

    }

    return(
        <>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <form onSubmit={(e:any) => handlerSubmit(e)} className="relative w-100 my-6 mx-auto max-w-5xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      {itemProduct.isEdit ? 'Editar item' : 'Novo item' }
                    </h3>
                  </div>
                  <div className="relative p-6 flex-auto">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Nome:
                            </label>
                            <input
                              required={itemProduct.isEdit ? false : true}
                              value={productItem?.name}
                              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setProductItem({...productItem , name: e.target.value})}} 
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                              type="text" 
                              placeholder="Nome do produto"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Descrição:
                            </label>
                            <textarea  
                              required={itemProduct.isEdit ? false : true}
                              value={productItem?.description}
                              onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>{setProductItem({...productItem , description: e.target.value} )}}  
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                              cols={30} 
                              rows={5}
                              placeholder="Nome do produto"></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Categoria:
                            </label>
                            <input
                              required={itemProduct.isEdit ? false : true}
                              value={productItem?.category}
                              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setProductItem({...productItem , category: e.target.value})}} 
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                              type="text" 
                              placeholder="categoria do produto"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Valor:
                            </label> 
                            <input
                              required={itemProduct.isEdit ? false : true}
                              value={productItem?.value}
                              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setProductItem({...productItem , value: parseInt(e.target.value)})}}  
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                              type="number" 
                              min={1}
                              max={9999}
                              placeholder="0"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >Imagem</label>
                            <input
                              required={itemProduct.isEdit ? false : true}
                              name="image"
                              type="file"
                              onChange={(e: any) => {
                                const file = e.target.files[0];
                                setProductItem({...productItem , image: file})
                              }}
                              className="block focus:outline-noneshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                              />
                        </div>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Fechar
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      {itemProduct.isEdit ? 'Atualizar item' : 'Adicionar item' }
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        </>
    )

}