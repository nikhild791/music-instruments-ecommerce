function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MusicShop</h3>
            <p className="text-gray-300">
              Your one-stop shop for all musical instruments and accessories.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Categories</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/category/guitars" className="hover:text-white">
                  Guitars
                </a>
              </li>
              <li>
                <a href="/category/keyboards" className="hover:text-white">
                  Keyboards
                </a>
              </li>
              <li>
                <a href="/category/drums" className="hover:text-white">
                  Drums
                </a>
              </li>
              <li>
                <a href="/category/accessories" className="hover:text-white">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <address className="not-italic text-gray-300">
              <p>123 Music Street</p>
              <p>Melody City, MC 12345</p>
              <p>Email: info@musicshop.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MusicShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
