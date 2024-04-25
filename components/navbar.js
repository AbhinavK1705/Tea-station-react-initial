function Item() {
  return (
    <>
      <span class="nav-btn" id="nav-btn">
        <i class="fas fa-bars"></i>
      </span>
      <nav class="navbar" id="navbar">
        <div class="navbar-header">
          <span class="nav-close" id="nav-close">
            <i class="fas fa-times"></i>
          </span>
        </div>
        <ul class="nav-items">
          <li>
            <a class="nav-link" href="/">
              home
            </a>
          </li>
          <li>
            <a class="nav-link" href="/about">
              about
            </a>
          </li>
          <li>
            <a class="nav-link" href="/products">
              products
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
