import NavItem from './NavItem'

const menuContainer = `
  flex flex-row flex-grow justify-center md:justify-end space-x-6
`
const Navbar = () => (
  <div className="flex flex-row justify-between py-5">
    <h3 className="hidden md:inline-block">Tharatorn Supasiti</h3>
    <div className={menuContainer}>
      <NavItem text="about" />
      <NavItem text="portfolio" />
      <NavItem text="contact" />
      <NavItem text="resume" />
    </div>
  </div>
)

export default Navbar
