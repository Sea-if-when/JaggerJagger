const createNav =() => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `

    
    <div class="nav">
        <img src="photos/Logo.jpeg" class="brand-logo"alt="">
        <div class="nav-items">
            <div class="search">
                <input type= "text" class="search-box" placeholder="search-art,category">
                <button class="search-btn">search</button>
            </div>
            <a href="#"><image src="photos/user.jp" alt=""></image></a>
            <a href="#"><image src="photos/cart.jp" alt=""></image></a>
            <li class="logs"><a href="file:///C:/Users/ADMIN/OneDrive/Desktop/MORIANAH%20PILOT/sign-up.html?name=&email=&password=&contact=&city=&address=#"class="link">sign Up</a></li>
            <li class="logs"><a href="file:///C:/Users/ADMIN/OneDrive/Desktop/MORIANAH%20PILOT/log-in.html#"class="link">Log in</a></li>
    </div>
   
    </div>
 <ul class="links-container">
     <li class="link-item"><a href="file:///C:/Users/ADMIN/OneDrive/Desktop/MORIANAH%20PILOT/index.html#"class="link">Home</a></li>
     <li class="link-item"><a href="file:///C:/Users/ADMIN/OneDrive/Desktop/MORIANAH%20PILOT/gallery.html#"class="link">Galleries</a></li>
     <li class="link-item"><a href="file:///C:/Users/ADMIN/OneDrive/Desktop/MORIANAH%20PILOT/Artists.html"class="link">Artists</a></li>
     <li class="link-item"><a href="#"class="link">Events</a></li>
     <li class="link-item"><a href="#"class="link">Art News</a></li>
     <li class="link-item"><a href="#"class="link">NFT's</a></li>
     <li class="link-item"><a href="file:///C:/Users/ADMIN/OneDrive/Desktop/MORIANAH%20PILOT/about.html"class="link">About Us</a></li>

    
    
</ul>
    `;
}

createNav();