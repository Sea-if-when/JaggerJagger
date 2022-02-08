import React, { useState } from 'react';
import { NavBarComponent } from "./componenets/navbar"
import { FooterComponent } from "./componenets/footer"

export function WebsitePage() {

  return (
    <div>
      <NavBarComponent />
      <FooterComponent/>
    </div>
  )
}