import React, { useState } from 'react';


export function HeaderComponent() {

  return (
    <header className="header-area absolute w-full top-0 pt-4 pb-10">
      <div className="container mx-auto relative px-4 z-20">
        <nav className="flex items-center justify-between relative">
          <a href='index.html' className='flex items-center flex-shrink-0 mr-6'>
            <img className="h-10" src="https://d33wubrfki0l68.cloudfront.net/0fcd3a5de968db4747c50586a61bcc126b4890fd/3ca91/assets/images/header-logo.svg" alt="title" />
          </a>
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
            <ul className="mobile-menu bg-white lg:bg-transparent shadow lg:shadow-none absolute lg:relative inset-x-0 hidden lg:flex lg:flex-grow items-center text-base text-blueGray-600 font-semibold mt-7 lg:mt-0 mobile-hover">
              <li className="relative dropdown lg:mr-4">
                <a className="p-4 flex items-center hover:text-indigo-500 transition duration-500 arrow" href="index.html#"> Home <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">+</span></a>
                <ul className="hidden lg:block bg-white lg:absolute top-full lg:shadow lg:w-44 transition duration-500 submenu">
                  <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='index.html'> Home v1</a></li>
                  <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='index2.html'> Home v2</a></li>
                  <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='index3.html'> Home v3</a></li>
                </ul>
              </li>
              <li className="relative dropdown lg:mr-4">
                <a className="p-4 flex items-center hover:text-indigo-500 transition duration-500 arrow" href="index.html#"> Explore <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">+</span></a>
                <ul className="hidden lg:block bg-white lg:absolute top-full lg:shadow lg:w-44 transition duration-500 submenu">
                  <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='explore.html'> Explore v1</a></li>
                  <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='explore2.html'> Explore v2</a></li>
                  <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='item-single.html'> Item Details v1</a></li>
                  <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='item-single2.html'> Item Details v2</a></li>
                  <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='item-single3.html'> Item Details v3</a></li>
                  <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='wallet.html'> Wallet</a></li>
                </ul>
              </li>
              <li className="relative dropdown lg:mr-4">
                <a className="p-4 flex items-center hover:text-indigo-500 transition duration-500 arrow" href="index.html#"> Pages <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">+</span></a>
                <ul className="hidden lg:block bg-white lg:absolute top-full lg:shadow lg:w-44 transition duration-500 submenu">
                  <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='create-item.html'> Create Item </a></li>
                  <li className="relative dropdown">
                    <a className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500 arrow" href="index.html#"> Authors <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">+</span></a>
                    <ul className="hidden lg:block bg-white lg:absolute top-0 left-full lg:shadow lg:w-44 transition duration-500 submenu">
                      <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='creator-published.html'>Authors</a></li>
                      <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='creator-follower.html'>Authors Profile</a></li>
                      <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='creator-activity.html'>Authors Activity</a></li>
                    </ul>
                  </li>
                  <li className="relative dropdown">
                    <a className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500 arrow" href="index.html#"> User <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">+</span></a>
                    <ul className="hidden lg:block bg-white lg:absolute top-0 left-full lg:shadow lg:w-44 transition duration-500 submenu">
                      <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='login.html'>Login</a></li>
                      <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='register.html'>Register</a></li>
                      <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='forget-password.html'>Forget Password</a></li>
                    </ul>
                  </li>
                  <li className="relative dropdown">
                    <a className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500 arrow" href="index.html#"> Blog <span className="leading-5 text-2xl text-center bg-blueGray-100  w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">+</span></a>
                    <ul className="hidden lg:block bg-white lg:absolute top-0 left-full lg:shadow lg:w-44 transition duration-500 submenu">
                      <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='single.html'>Blog Details</a></li>
                      <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='category.html'>Category</a></li>
                      <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='tag.html'>Tag</a></li>
                      <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='blog.html'>Blog Grid</a></li>
                    </ul>
                  </li>
                  <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='contact.html'> Contact </a></li>
                  <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='term-condition.html'> Term & Condition </a></li>
                  <li><a className='py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500' href='404.html'> 404 </a></li>
                </ul>
              </li>
              <li><a className='p-4 flex items-center hover:text-indigo-500 transition duration-500' href='activity.html'> Activity </a></li>
            </ul>
            <form className="header-newsletter hidden lg:flex items-center">
              <div className="flex flex-1 items-center xl:w-80 bg-white shadow transition duration-500 hover:shadow-lg rounded h-14 p-4 mr-6">
                <img className="w-6 h-6 flex-shrink-0 p-1" src="assets/images/search-icon.svg" alt="title" />
                <input className="appearance-none bg-transparent border-none w-full text-blueGray-600 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search items" />
              </div>

            </form>
            <a href='wallet.html' className='btn hidden xl:flex items-center text-white font-body font-semibold rounded h-14 p-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100' type='submit'><img className="w-4 h-4 flex-shrink-0  mr-2" src="assets/images/wallet-icon.svg" title="title" /> Connect Wallet</a>
          </div>
          <button className="bg-blueGray-50 mobile-toggle block lg:hidden">
            <span className="bg-blueGray-600"></span>
            <span className="bg-blueGray-600"></span>
            <span className="bg-blueGray-600"></span>
          </button>
        </nav>
      </div>
    </header>
  )
}