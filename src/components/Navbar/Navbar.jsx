

const Navbar = () => {
  return (
    <nav className=" bg-gray-900 rounded-b-lg mx-auto mb-2 flex justify-between items-center px-2 py-2 text-white shadow-sm" >
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="links">
          <ul className="flex gap-2 font-semibold text-sm lg:gap-12 lg:text-xl">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="contact-btn">
          <button className="px-2 py-2 rounded-xl text-white text-sm lg:text-xl border hover:bg-gray-900" >Connects with Us</button>
        </div>
      </nav>
  )
}

export default Navbar
