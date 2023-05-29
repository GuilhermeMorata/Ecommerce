

export interface IPagination{
    page: number,
    limit: number
}

export interface IProduct{
    id_product?: number,
    name?: string,
    image?: any,
    value?: number,
    description?: string,
    category?: any,
    amount?: number
}

export interface IFilterListProduct extends IPagination{
    name?: string,
    category?: string
}


export interface IProductContext{
    productItems: {data: IProduct[] , totalItems: number},
    fetchProductItems: (filters: IFilterListProduct) => void,
    handleAddProduct: (parms: FormData) => void,
    handleRemoveProduct: (parms: IProduct) => void,
    handleEditProduct: (parms: FormData) => void,

    wishItems: {data: IProduct[], totalValue: number},
    handleAddWishlist: (parms: IProduct) => void,
    handleRemoveWishlist: (parms: IProduct) => void,
    handleDeleteWishlist: (parms: IProduct) => void,

    itemProduct : {item: IProduct , isEdit: boolean} ,
    setItemProduct: (parms: {item: IProduct , isEdit: boolean}) => void,
    showModal : boolean,
    setShowModal:  (parms: boolean) => void,
    
    filter: IFilterListProduct
    setFilter : (parms: IFilterListProduct) => void,
}