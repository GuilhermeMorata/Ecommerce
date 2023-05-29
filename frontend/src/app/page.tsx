"use client"; 
import Search from '@/components/filter.component';
import { IProductContext } from '@/models/products.model';
import { useContext, useEffect } from 'react';
import { ProductContext } from "../context/product.context";
import ListProduct from '@/components/listProduct.component';
import ReactPaginate from 'react-paginate';

export default function Products() {
  
  const { productItems , filter , setFilter } = useContext<IProductContext>(ProductContext);
  
  useEffect(()=>{
    setFilter({limit: 10, page: 0})
  },[])

  
  return (
      <div className='flex flex-col w-full justify-center items-center'>
          <Search />
          <ListProduct data={productItems.data} />
          <ReactPaginate
            previousLabel={'Anterior'}
            nextLabel={'Próximo'}
            pageCount={Math.ceil(productItems.totalItems / filter.limit)}
            onPageChange={(e:any)=>{setFilter({...filter, page: parseInt(e.selected) })}}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={'w-full h-[5vh] text-2xl  text-black flex items-center justify-center mt-4'}
            pageClassName={' bg-[#395B64]  mx-5'}
            pageLinkClassName={'px-3 bg-[#395B64] py-1 rounded-lg border'}
            activeClassName={'bg-[#395B64] text-white'}
            disabledClassName={'opacity-50'}
          />
      </div>
  )
}
