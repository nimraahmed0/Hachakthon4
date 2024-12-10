import Discount from '@/components/Discount'
import FeaturedProducts from '@/components/FeatureProducts'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeaderTop from '@/components/HeaderTop'
import LatestBlog from '@/components/LatestBlog'
import LatestProducts from '@/components/LatestProduct'
import Navbar from '@/components/Navbar'
import NewsShelter from '@/components/NewsShelter'
import Offers from '@/components/Offers'
import Shoprex from '@/components/Shoprex'
import TopCategory from '@/components/TopCategory'
import TrendingProduct from '@/components/TrendingProduct'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeaderTop/>
      <Header/>
      <Navbar/>
      <FeaturedProducts/>
      <LatestProducts/>
      <Shoprex/>
      <Discount/>
      <TrendingProduct/>
      <Offers/>
      <TopCategory/> 
      <NewsShelter/>
      <LatestBlog/>
      <Footer/>   
    </div>
  )
}

export default page
