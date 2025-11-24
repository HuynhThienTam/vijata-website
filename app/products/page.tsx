import CoursesIntro from '@/components/ProductsPage/CoursesIntro';
import ProductsShowing from '@/components/ProductsPage/ProductsShowing';
import React from 'react'

const Products = () => {
  return (
    <div className='bg-white'>
      <CoursesIntro/>
      <ProductsShowing />
    </div>
  );
};

export default Products;