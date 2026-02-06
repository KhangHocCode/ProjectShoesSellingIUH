function createHeader() {
    return `
        <header class="header">
            <div class="container">
                <div class="header-content">
                    <div class="logo">
                        <a href="homePage.html">
                            <div class="logo-icon">S</div>
                            <span class="logo-text">ShoesStore</span>
                        </a>
                    </div>
                    
                    <nav class="main-nav">
                        <ul class="nav-list">
                            <li class="nav-item">
                                <a href="homePage.html" class="nav-link">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="products.html" class="nav-link">Products</a>
                            </li>
                            <li class="nav-item">
                                <a href="about.html" class="nav-link">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="contact.html" class="nav-link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    
                    <div class="header-actions">
                        <a href="cart.html" class="btn-action">Shop Now</a>
                    </div>
                </div>
            </div>
        </header>
    `;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = createHeader;
}