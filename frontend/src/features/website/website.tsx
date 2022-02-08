import React, { useState } from 'react';
import { HeaderComponent } from "./componenets/header"
import { HeroComponent } from "./componenets/hero"
import { FooterComponent } from "./componenets/footer"
import { CategoryComponent } from './componenets/category';
import { ProductComponent } from './componenets/product';
import { TopeSellerComponent } from './componenets/top_seller';
import { BlogComponent } from './componenets/blog';

export function WebsitePage() {

  return (
    <div>
      <HeaderComponent />
      <HeroComponent/>
      <CategoryComponent/>
      <ProductComponent/>
      <TopeSellerComponent/>
      <BlogComponent/>
      <FooterComponent/>
      
    </div>
  )
}