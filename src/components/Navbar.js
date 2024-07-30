import { useEffect, useState } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('')

  const handleScroll = () => {
    const sections = ['home', 'about', 'contact']
    const scrollPosition = window.scrollY + window.innerHeight / 2

    for (let section of sections) {
      const element = document.getElementById(section)
      if (
        element.offsetTop <= scrollPosition &&
        element.offsetTop + element.clientHeight > scrollPosition
      ) {
        setActiveSection(section)
        break
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className="fixed top-0 left-0 w-full flex flex-row gap-10 p-4 bg-green-700">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex flex-row gap-2">
        <a
          href="#home"
          className={`hover:text-gray-400 duration-500 ${
            activeSection === 'home' ? 'text-gray-400' : ''
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`hover:text-gray-400 duration-500 ${
            activeSection === 'about' ? 'text-gray-400' : ''
          }`}
        >
          About
        </a>
        <a
          href="#contact"
          className={`hover:text-gray-400 duration-500 ${
            activeSection === 'contact' ? 'text-gray-400' : ''
          }`}
        >
          Contact
        </a>
        {/* <Link to={'#home'}>Home</Link>
        <Link to={'#about'}>About</Link>
        <Link to={'#contact'}>Contact</Link> */}
      </div>
    </div>
  )
}

export default Navbar
