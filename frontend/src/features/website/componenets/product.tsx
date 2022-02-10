import React, { useState } from 'react';


export function ProductComponent() {

    return (
        <section className="product-section my-20 lg:my-32">
         <div className="container mx-auto relative px-4 z-10">
            <div className="section-title flex flex-wrap items-center justify-between mb-8 lg:mb-14">
               <div className="flex items-center mb-3">
                  <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4"><img className="w-5 h-5" src="assets/images/sec-icon2.svg" alt="title"/></span> 
                  <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">Live Auctions</h3>
               </div>
               <a href='explore.html' className='arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50'>See All</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
               <div className="product-box bg-white flex justify-between flex-col rounded overflow-hidden transition duration-500 hover:shadow-lg"  >
                  <div className="product-top">
                     <div className="product-image relative rounded overflow-hidden">
                        <img className="w-full md:h-64 object-cover" src="assets/images/product/28.jpg" alt="title"/> 
                        <div className="product-meta leading-4 font-body font-medium countdown-time absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3"></div>
                     </div>
                     <div className="product-content px-6 pt-6">
                        <div className="flex items-center justify-between">
                           <div><h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500"><a href='item-single.html'>Creative Artwork</a></h3></div>
                           <div className="flex items-center"><span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8"><img src="assets/images/heart-icon2.svg" alt="title"/></span><p className="font-body font-bold text-sm text-blueGray-600 ml-2">88</p></div>
                        </div>
                        <div className="flex mb-8 mt-2">
                           <a href='creator-published.html' className='relative' data-tooltip='Steven Robart'><img className="border-2 border-white w-10 h-10 object-cover rounded-lg" src="assets/images/author/1.jpg" alt="title"/></a>
                           <a href='creator-published.html' className='relative -left-4' data-tooltip='Steven Robart'><img className="border-2 border-white w-10 h-10 object-cover rounded-lg" src="assets/images/author/3.jpg" alt="title"/> <span className="absolute bottom-0 right-1"><img className="w-3 h-3" src="assets/images/verified-icon.svg" alt="title"/></span></a>
                        </div>
                     </div>
                  </div>
                  <div className="product-bottom flex flex-wrap justify-between px-6 pb-6">
                     <div>
                        <p className="font-body text-sm blueGray-600">Current Bid</p>
                        <p className="flex items-center font-body font-bold text-blueGray-900 my-1"><img className="w-5 h-5 inline-block mr-1" src="assets/images/cryptocurrency-icon.svg" alt="title"/> 0.008 ETH</p>
                        <p className="font-body text-sm text-blueGray-600">≈$26.69</p>
                     </div>
                     <div className="text-center">
                        <a href='item-single.html' className='border-gradient block bg-gradient-to-r text-indigo-500 font-body font-semibold rounded py-2 px-4 hover:text-white hover:from-indigo-500 hover:to-purple-500 mb-2 transition duration-500   '><img className="w-4 h-4 inline-block mb-1" src="assets/images/bid-icon.svg" alt="title"/> Place a bid</a>
                        <p className="font-body text-xs text-blueGray-600">12 bids total</p>
                     </div>
                  </div>
               </div>
               <div className="product-box bg-white flex justify-between flex-col rounded overflow-hidden transition duration-500 hover:shadow-lg"  >
                  <div className="product-top">
                     <div className="product-image relative rounded overflow-hidden">
                        <img className="w-full md:h-64 object-cover" src="assets/images/product/1.gif" alt="title"/>
                        <div className="product-meta leading-4 font-body font-medium countdown-time2 absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3"></div>
                     </div>
                     <div className="product-content px-6 pt-6">
                        <div className="flex items-center justify-between">
                           <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500"><a href='item-single.html'>Pumpkin Month</a></h3>
                           <div className="flex items-center"><span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8"><img src="assets/images/heart-icon2.svg" alt="title"/></span><p className="font-body font-bold text-sm text-blueGray-600 ml-2">10</p></div>
                        </div>
                        <div className="flex mb-8 mt-2">
                           <a href='creator-published.html' className='relative' data-tooltip='Steven Robart'><img className="border-2 border-white w-10 h-10 object-cover rounded-lg" src="assets/images/author/1.jpg" alt="title"/></a>
                           <a href='creator-published.html' className='relative -left-4' data-tooltip='Steven Robart'><img className="border-2 border-white w-10 h-10 object-cover rounded-lg" src="assets/images/author/3.jpg" alt="title"/> <span className="absolute bottom-0 right-1"><img className="w-3 h-3" src="assets/images/verified-icon.svg" alt="title"/></span></a>
                        </div>
                     </div>
                  </div>
                  <div className="product-bottom flex flex-wrap justify-between px-6 pb-6">
                     <div>
                        <p className="font-body text-sm text-blueGray-600">Current Bid</p>
                        <p className="flex items-center font-body font-bold text-blueGray-900 my-1"><img className="w-5 h-5 inline-block mr-1" src="assets/images/cryptocurrency-icon.svg" alt="title"/> 0.000 ETH</p>
                        <p className="font-body text-sm text-blueGray-600">≈$0.00</p>
                     </div>
                     <div className="text-center">
                        <a href='item-single.html' className='border-gradient block bg-gradient-to-r text-indigo-500 font-body font-semibold rounded py-2 px-4 hover:text-white hover:from-indigo-500 hover:to-purple-500 mb-2 transition duration-500'><img className="w-4 h-4 inline-block mb-1" src="assets/images/bid-icon.svg" alt="title"/> Place a bid</a>
                        <p className="font-body text-xs text-blueGray-600">0 bids</p>
                     </div>
                  </div>
               </div>
               <div className="product-box bg-white flex justify-between flex-col rounded overflow-hidden transition duration-500 hover:shadow-lg"  >
                  <div className="product-top">
                     <div className="product-image relative rounded overflow-hidden">
                        <img className="w-full md:h-64 object-cover" src="assets/images/product/2.webp" alt="title"/>
                        <div className="product-meta text-white leading-4 font-body font-medium countdown-time3 absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3"></div>
                     </div>
                     <div className="product-content px-6 pt-6">
                        <div className="flex items-center justify-between">
                           <div><h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500"><a href='item-single.html'>Pink Love</a></h3></div>
                           <div className="flex items-center"><span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8"><img src="assets/images/heart-icon2.svg" alt="title"/></span><p className="font-body font-bold text-sm text-blueGray-600 ml-2">17</p></div>
                        </div>
                        <div className="flex mb-8 mt-2">
                           <a href='creator-published.html' className='relative' data-tooltip='Steven Robart'><img className="border-2 border-white w-10 h-10 object-cover rounded-lg" src="assets/images/author/1.jpg" alt="title"/></a>
                           <a href='creator-published.html' className='relative -left-2' data-tooltip='Steven Robart'><img className="border-2 border-white w-10 h-10 object-cover rounded-lg" src="assets/images/author/2.jpg" alt="title"/> <span className="absolute bottom-0 right-1"><img className="w-3 h-3" src="assets/images/verified-icon.svg" alt="title"/></span></a>
                           <a href='creator-published.html' className='relative -left-4' data-tooltip='Steven Robart'><img className="border-2 border-white w-10 h-10 object-cover rounded-lg" src="assets/images/author/3.jpg" alt="title"/> <span className="absolute bottom-0 right-1"><img className="w-3 h-3" src="assets/images/verified-icon.svg" alt="title"/></span></a>
                        </div>
                     </div>
                  </div>
                  <div className="product-bottom flex flex-wrap justify-between px-6 pb-6">
                     <div>
                        <p className="font-body text-sm text-blueGray-600">Current Bid</p>
                        <p className="flex items-center font-body font-bold text-blueGray-900 my-1"><img className="w-5 h-5 inline-block mr-1" src="assets/images/cryptocurrency-icon.svg" alt="title"/> 0.008 ETH</p>
                        <p className="font-body text-sm text-blueGray-600">≈$3.34</p>
                     </div>
                     <div className="text-center">
                        <a href='item-single.html' className='border-gradient block bg-gradient-to-r text-indigo-500 font-body font-semibold rounded py-2 px-4 hover:text-white hover:from-indigo-500 hover:to-purple-500 mb-2 transition duration-500'><img className="w-4 h-4 inline-block mb-1" src="assets/images/bid-icon.svg" alt="title"/> Place a bid</a>
                        <p className="font-body text-xs text-blueGray-600">2 bids total</p>
                     </div>
                  </div>
               </div>
               <div className="product-box bg-white flex justify-between flex-col rounded overflow-hidden transition duration-500 hover:shadow-lg"  >
                  <div className="product-top">
                     <div className="product-image relative rounded overflow-hidden">
                        <img className="w-full md:h-64 object-cover" src="assets/images/product/3.gif" alt="title"/>
                        <div className="product-meta text-white leading-4 font-body font-medium countdown-time4 absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3"></div> 
                     </div>
                     <div className="product-content px-6 pt-6">
                        <div className="flex items-center justify-between">
                           <div><h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500"><a href='item-single.html'>Token Hero #20</a></h3></div>
                           <div className="flex items-center"><span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8"><img src="assets/images/heart-icon2.svg" alt="title"/></span><p className="font-body font-bold text-sm text-blueGray-600 ml-2">78</p></div>
                        </div>
                        <div className="flex mb-8 mt-2">
                           <a href='creator-published.html' className='relative' data-tooltip='Steven Robart'><img className="border-2 border-white w-10 h-10 object-cover rounded-lg" src="assets/images/author/1.jpg" alt="title"/> <span className="absolute bottom-0 right-1"><img className="w-3 h-3" src="assets/images/verified-icon.svg" alt="title"/></span></a>
                           <a href='creator-published.html' className='relative -left-2' data-tooltip='Steven Robart'><img className="border-2 border-white w-10 h-10 object-cover rounded-lg" src="assets/images/author/2.jpg" alt="title"/></a>
                           <a href='creator-published.html' className='relative -left-4' data-tooltip='Steven Robart'><img className="border-2 border-white w-10 h-10 object-cover rounded-lg" src="assets/images/author/3.jpg" alt="title"/> <span className="absolute bottom-0 right-1"><img className="w-3 h-3" src="assets/images/verified-icon.svg" alt="title"/></span></a>
                        </div>
                     </div>
                  </div>
                  <div className="product-bottom flex flex-wrap justify-between px-6 pb-6">
                     <div>
                        <p className="font-body text-sm text-blueGray-600">Current Bid</p>
                        <p className="flex items-center font-body font-bold text-blueGray-900 my-1"><img className="w-5 h-5 inline-block mr-1" src="assets/images/cryptocurrency-icon.svg" alt="title"/>0.005 ETH</p>
                        <p className="font-body text-sm text-blueGray-600">≈$16.68</p>
                     </div>
                     <div className="text-center">
                        <a href='item-single.html' className='border-gradient block bg-gradient-to-r text-indigo-500 font-body font-semibold rounded py-2 px-4 hover:text-white hover:from-indigo-500 hover:to-purple-500 mb-2 transition duration-500'><img className="w-4 h-4 inline-block mb-1" src="assets/images/bid-icon.svg" alt="title"/> Place a bid</a>
                        <p className="font-body text-xs text-blueGray-600">14 bids total</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    )
}