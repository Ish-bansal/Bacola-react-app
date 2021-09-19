import React from 'react'

const Nav = () => {
    return (
        <>
        <div className="site-canvas" >
        {/* style={{opacity:"1",visibility:"inherit",transform:"translate(0px,0px)"}}  */}
    <div className="site-scroll ps ">
    <div className="canvas-header">
    <div className="site-brand"> <a href="https://klbtheme.com/bacola/" title="Bacola &#8211; Grocery Market and Food Theme"> <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo.png" width="127" height="34" alt="Bacola &#8211; Grocery Market and Food Theme"/> </a></div><div className="close-canvas"> <i className="klbth-icon-x"></i></div></div><div className="canvas-main">
    <div className="site-location">
    <a href="#">
    <span className="location-description">Your Location</span>
    <div className="current-location">Select a Location</div></a></div><div className="canvas-title"> <h6 className="entry-title">Site Navigation</h6></div><nav className="canvas-menu canvas-primary vertical">
    <ul id="menu-menu-1" className="menu"><li className="dropdown menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home current-menu-ancestor current-menu-parent menu-item-has-children"><a href="https://klbtheme.com/bacola/">Home</a>
    <ul className="sub-menu">
    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-50 current_page_item"><a href="https://klbtheme.com/bacola/">Home 1</a></li>
    <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/home-2/">Home 2</a></li>
    <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/home-3/">Home 3</a></li>
    <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/home-4/">Home 4</a></li>
    <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/home-5/">Home 5</a></li>
    </ul>
    </li>
    <li className="dropdown mega-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="https://klbtheme.com/bacola/shop/"><i className="mega-menu"></i> Shop</a>
    <ul className="sub-menu">
    <li className="dropdown menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="https://klbtheme.com/bacola/shop/">Shop Lists</a>
    <ul className="sub-menu">
    <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/shop/">Shop Default</a></li>
    <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?opt=right-sidebar">Shop Right Sidebar</a></li>
    <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?column=5&amp;opt=wide">Shop Wide</a></li>
    <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?shop_view=list_view">List Left Sidebar</a></li>
    <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?ft=load-more">Load More Button</a></li>
    <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?ft=infinite">Infinite Scrolling</a></li>
    </ul>
    </li>
    <li className="dropdown menu-item menu-item-type-post_type menu-item-object-product menu-item-has-children"><a href="https://klbtheme.com/bacola/product/all-natural-italian-style-chicken-meatballs/">Product Detail</a>
    <ul className="sub-menu">
    <li className="menu-item menu-item-type-post_type menu-item-object-product"><a href="https://klbtheme.com/bacola/product/all-natural-italian-style-chicken-meatballs/">Product Default</a></li>
    <li className="menu-item menu-item-type-post_type menu-item-object-product"><a href="https://klbtheme.com/bacola/product/tomatoes-on-the-vine/">Product Variable</a></li>
    <li className="menu-item menu-item-type-post_type menu-item-object-product"><a href="https://klbtheme.com/bacola/product/foster-farms-takeout-crispy-classNameic-buffalo-wings/">Product Grouped</a></li>
    <li className="menu-item menu-item-type-post_type menu-item-object-product"><a href="https://klbtheme.com/bacola/product/zevia-kidz-strawberry-lemonade-zero-calorie-soda/">Product External</a></li>
    <li className="menu-item menu-item-type-post_type menu-item-object-product"><a href="https://klbtheme.com/bacola/product/vital-farms-pasture-raised-egg-bites-bacon-cheddar/">Product Downloadable</a></li>
    <li className="menu-item menu-item-type-post_type menu-item-object-product"><a href="https://klbtheme.com/bacola/product/angies-boomchickapop-sweet-salty-kettle-corn/">Product With Video</a></li>
    </ul>
    </li>
    <li className="dropdown menu-item menu-item-type-post_type menu-item-object-product menu-item-has-children"><a href="https://klbtheme.com/bacola/product/all-natural-italian-style-chicken-meatballs/">Product Types</a>
    <ul className="sub-menu">
    <li className="menu-item menu-item-type-post_type menu-item-object-product"><a href="https://klbtheme.com/bacola/product/all-natural-italian-style-chicken-meatballs/">Single Type 1</a></li>
    <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/product/angies-boomchickapop-sweet-salty-kettle-corn/?opt=type2">Single Type 2</a></li>
    <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/product/blue-diamond-almonds-lightly-salted/?opt=type3">Single Type 3</a></li>
    <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/product/organic-white-corn-tortilla-chips/?opt=type4">Single Type 4</a></li>
    <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/product/all-natural-italian-style-chicken-meatballs/?opt=vertical">Thumbnails Left</a></li>
    <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/product/organic-white-corn-tortilla-chips/?ft=imgzoom">Zoom Image</a></li>
    </ul>
    </li>
    <li className="dropdown menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#">Shop Pages</a>
    <ul className="sub-menu">
    <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/cart/">Cart</a></li>
    <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/checkout/">Checkout</a></li>
    <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/my-account/">My account</a></li>
    <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/wishlist/">Wishlist</a></li>
    <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/order-tracking/">Order Tracking</a></li>
    </ul>
    </li>
    <li className="dropdown menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="#">Shop Layouts</a>
    <ul className="sub-menu">
    <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?column=2">Two Columns</a></li>
    <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?column=3">Three Columns</a></li>
    <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?column=3&amp;opt=wide">Three Columns Wide</a></li>
    <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?column=4">Four Columns</a></li>
    <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?column=4&amp;opt=wide">Four Columns Wide</a></li>
    <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://klbtheme.com/bacola/shop/?column=5&amp;opt=wide">Five Columns wide</a></li>
    </ul>
    </li>
    </ul>
    </li>
    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/meats-seafood/"><i className="klbth-icon-meat"></i> Meats &amp; Seafood</a></li>
    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/breads-bakery/"><i className="klbth-icon-biscuit"></i> Bakery</a></li>
    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a href="https://klbtheme.com/bacola/product-category/beverages/"><i className="klbth-icon-cup"></i> Beverages</a></li>
    <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/blog/">Blog</a></li>
    <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://klbtheme.com/bacola/contact/">Contact</a></li>
    </ul>			</nav></div><div className="canvas-footer">
    <div className="site-copyright"> Copyright 2021 © Bacola WordPress Theme. All rights reserved. Powered by KlbTheme.</div><nav className="canvas-menu canvas-secondary select-language vertical">
    <ul id="menu-top-right" className="menu"><li id="menu-item-1832" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1832"><a href="#">English</a>
    <ul className="sub-menu">
    <li id="menu-item-1838" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1838"><a href="#">English</a></li>
    <li id="menu-item-1833" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1833"><a href="#">Spanish</a></li>
    <li id="menu-item-1834" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1834"><a href="#">German</a></li>
    </ul>
    </li>
    <li id="menu-item-1835" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1835"><a href="#">USD</a>
    <ul className="sub-menu">
    <li id="menu-item-1839" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1839"><a href="#">USD</a></li>
    <li id="menu-item-1836" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1836"><a href="#">INR</a></li>
    <li id="menu-item-1837" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1837"><a href="#">GBP</a></li>
    </ul>
    </li>
    </ul>			
    </nav>
    </div>
    </div>
    </div>
        </>
    )
}

export default Nav
