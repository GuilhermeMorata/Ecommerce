"use client"; 
import { IFilterListProduct, IProduct, IProductContext } from "@/models/products.model";
import {
    createContext,
    ReactNode,
    useEffect,
    useState,
  } from "react";

  

  export const ProductContext = createContext({} as IProductContext);
  
  type ProductContextProvider = {
    children: ReactNode;
  };
  
  const BaseUrl = 'http://localhost:8080/product'
  export const ProductContextProvider = ({ children }: ProductContextProvider) => {

    /* STATES */
    const [ productItems, setProductItems ] = useState<{data: IProduct[] , totalItems: number}>({data:[],totalItems:0});
    const [ wishItems, setWishItems ] = useState<{data: IProduct[] , totalValue: number}>({data: [], totalValue: 0});
    const [ filter, setFilter ] = useState<IFilterListProduct>({ limit: 5, page: 0 });
    const [ itemProduct, setItemProduct ] = useState<{item: IProduct , isEdit: boolean}>({item:{},isEdit:false});
    const [ showModal , setShowModal ] = useState<boolean>(false);
    
    
    /* PRODUCTS  */
    const fetchProductItems = async () => {
      try {
        const response = await fetch(`${BaseUrl}/${filter?.page}/${filter?.limit}?name=${filter?.name}`)
        const data = await response.json();
        setProductItems({
          data: data.rows,
          totalItems: data.count
        })

      } catch (error) {
        console.log(error);
      }
    };
    
    const handleAddProduct = async (product: any ) => {
      try {
        await fetch(`${BaseUrl}/create`, { 
                method: 'POST',
                body: product
            })
              .then(()=>{
                fetchProductItems()
            }) 
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleRemoveProduct = async (product: IProduct) => {
        try {
            await fetch(`${BaseUrl}/${product.id_product}`,{
              method: 'DELETE',
            })
            .then((res:any)=>{
              fetchProductItems()
            }) 
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditProduct = async (product: any) => {
        try {
          await fetch(`${BaseUrl}/edit`, { 
            method: 'POST',
            body: product
          })
          .then(()=>{
            fetchProductItems()
          }) 
          fetchProductItems()
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
      fetchProductItems();
    }, [filter, setProductItems]);
    

    /* WISH */
    const handleAddWishlist = async (param: IProduct) => {
      const some = wishItems.data.some(list => list.name === param.name);
    
      if(some){
        const data = await wishItems.data.map((item) =>
            item.name === param.name
              ? { ...item, amount: (item.amount || 0 ) + (param.amount || 0) }
              : { ...item }
          )
        const total = data.reduce((total: number, item: IProduct) => { return total + ( (item.value || 0 ) * (item.amount || 0 ) )}, 0);
        setWishItems({
          data: data,
          totalValue: total
        })
      }
      else{
        const data = [...wishItems.data,param]
        const total = data.reduce((total: number, item: IProduct) => { return total + ( (item.value || 0 ) * (item.amount || 0 ) )}, 0);
        setWishItems({
          data: data,
          totalValue: total
        })
      }

    };

    const handleRemoveWishlist = async (param: IProduct) => {
      const some = wishItems.data.some(list => list.name === param.name);

      if(some){
        const data : any = await wishItems.data.map((item) =>{ return item.name === param.name  ? { ...item, amount: param.amount } : { ...item } });
        const total = data.reduce((total: number, item: IProduct) => { return total + ( (item.value || 0 ) * (item.amount || 0 ) )}, 0);
        setWishItems({
          data: data,
          totalValue: total
        })
       
      }
    };

    const handleDeleteWishlist = async (param: IProduct) => {
      const index = wishItems.data.findIndex(list => list.name === param.name);
      if(index !== -1){
        const removeItem = wishItems.data.filter((item) => item.name !== param.name);
        const total = removeItem.reduce((total: number, item: IProduct) => { return total + ( (item.value || 0 ) * (item.amount || 0 ) )}, 0);
        setWishItems({
          data: removeItem,
          totalValue: total
        });
      } 
    };
     
    return (
      <ProductContext.Provider
        value={{
            productItems,
            fetchProductItems,
            handleAddProduct,
            handleEditProduct,
            handleRemoveProduct,

            wishItems,
            handleAddWishlist,
            handleRemoveWishlist,
            handleDeleteWishlist,

            itemProduct,
            setItemProduct,
            showModal,
            setShowModal,            

            filter,
            setFilter
        }}
      >
        {children}
      </ProductContext.Provider>
    );
  };
  