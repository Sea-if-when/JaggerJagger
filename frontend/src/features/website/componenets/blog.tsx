import React, { useState } from 'react';


export function BlogComponent() {

    return (
        <section className="blog-section my-20 lg:my-32">
        <div className="container mx-auto relative px-4 z-10">
           <div className="section-title flex flex-wrap items-center justify-between mb-8 lg:mb-14">
              <div className="flex items-center mb-3">
                 <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4"><img className="w-4 h-4" src="assets/images/sec-icon3.svg" alt="title"/></span> 
                 <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">Latest Blog</h3>
              </div>
              <a href='blog.html' className='arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50'>See All</a>
           </div>
           <div className="blog-infinite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              <div className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg" >
                 <div className="content-top">
                    <div className="blog-image md:h-64 relative rounded overflow-hidden mb-6">
                       <img className="w-full md:h-64 object-cover" src="assets/images/blog/1.jpg" alt="title"/>
                    </div>
                    <div className="blog-content px-6">
                       <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500"><a href='single.html'>Mindfulness Activities for Kids & Toddlers with NFT</a></h3>
                       <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                          <p className="flex items-center mr-4"><img className="w-4 h-4 inline-block mr-1" src="assets/images/date-icon.svg" alt="title"/> 02 Feb 2022</p>
                          <p className="flex items-center"><img className="w-4 h-4 inline-block mr-1" src="assets/images/comment-icon.svg" alt="title"/> 27 Comments</p>
                       </div>
                       <p className="font-body text-blueGray-600 mb-5">Poverty of in the better in little. Did out held be entered it small...</p>
                    </div>
                 </div>
                 <div className="content-bottom px-6 pb-6">
                    <a className='readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover' href='single.html'>Read More<img className=" inline-block w-3 ml-2 mb-1" src="assets/images/readmore-icon.svg" alt="Post Title Here"/></a>
                 </div>
              </div>
              <div className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg" >
                 <div className="content-top">
                    <div className="blog-image md:h-64 relative rounded overflow-hidden mb-6">
                       <img className="w-full md:h-64 object-cover" src="assets/images/blog/2.jpg" alt="title"/>
                    </div>
                    <div className="blog-content px-6">
                       <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500"><a href='single.html'>Save Thousands Of Lives Through This NFT</a></h3>
                       <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                          <p className="flex items-center mr-4"><img className="w-4 h-4 inline-block mr-1" src="assets/images/date-icon.svg" alt="title"/> 02 Feb 2022</p>
                          <p className="flex items-center"><img className="w-4 h-4 inline-block mr-1" src="assets/images/comment-icon.svg" alt="title"/> 13 Comments</p>
                       </div>
                       <p className="font-body text-blueGray-600 mb-5">Staple was it myself. The both writing and area century...</p>
                    </div>
                 </div>
                 <div className="content-bottom px-6 pb-6">
                    <a className='readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover' href='single.html'>Read More<img className=" inline-block w-3 ml-2 mb-1" src="assets/images/readmore-icon.svg" alt="Post Title Here"/></a>
                 </div>
              </div>
              <div className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg" >
                 <div className="content-top">
                    <div className="blog-image md:h-64 relative rounded overflow-hidden mb-6">
                       <img className="w-full md:h-64 object-cover" src="assets/images/blog/3.jpg" alt="title"/>
                    </div>
                    <div className="blog-content px-6">
                       <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500"><a href='single.html'>Honoring Black History Month with Toddlers</a></h3>
                       <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                          <p className="flex items-center mr-4"><img className="w-4 h-4 inline-block mr-1" src="assets/images/date-icon.svg" alt="title"/> 02 Feb 2022</p>
                          <p className="flex items-center"><img className="w-4 h-4 inline-block mr-1" src="assets/images/comment-icon.svg" alt="title"/> 17 Comments</p>
                       </div>
                       <p className="font-body text-blueGray-600 mb-5">At but physics sofa a explorations are trusted curiously ...</p>
                    </div>
                 </div>
                 <div className="content-bottom px-6 pb-6">
                    <a className='readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover' href='single.html'>Read More<img className=" inline-block w-3 ml-2 mb-1" src="assets/images/readmore-icon.svg" alt="Post Title Here"/></a>
                 </div>
              </div>

           </div>
           <div className="flex justify-center mt-8 lg:mt-14">
              <button className="btn load-more-btn flex items-center text-white font-body font-bold rounded px-6 py-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100">Load More <img className="w-4 h-4 flex-shrink-0 animate-spin ml-2" src="assets/images/spinner-icon.svg" alt="title"/></button>
           </div>
        </div>
     </section>
    )
}