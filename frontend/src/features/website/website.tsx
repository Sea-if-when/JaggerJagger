import React, { useState,useEffect } from 'react';
import { HeaderComponent } from "./componenets/header"
import { HeroComponent } from "./componenets/hero"
import { FooterComponent } from "./componenets/footer"
import { CategoryComponent } from './componenets/category';
import { ProductComponent } from './componenets/product';
import { HowItWorksComponent } from './componenets/how_it_works';
import { BlogComponent } from './componenets/blog';

export function WebsitePage() {


  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;

    var a = document.createElement('link');
      // var linkText = document.createTextNode("my title text");
      // a.appendChild(linkText);
      a.rel = "stylesheet";
      a.href = "https://d33wubrfki0l68.cloudfront.net/css/67b26810ca672dadc8ffda4a84e33dce5b6f51ef/light/assets/css/app.min.css";
      document.body.appendChild(a);
  },[]);
  return (
    <div>
      <HeaderComponent />
      <HeroComponent/>
      <CategoryComponent/>
      <ProductComponent/>
      <HowItWorksComponent/>

      <BlogComponent/>
      <FooterComponent/>
      
    </div>
  )
}