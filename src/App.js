import { PropTypes } from 'prop-types'
import { useState } from 'react'
import Wave from './elements/Wave'
import Container from './elements/Container'
import Navbar from './elements/Navbar'
import About from './pages/About'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

// base style
const style = `
relative bg-gradient-to-b from-teal to-java 
min-h-screen overflow-hidden
font-body text-sm text-gray-200
lg:text-base 
`
const Content = ({ current }) => {
  const pages = {
    about: <About />,
    portfolio: <Portfolio />,
    contact: <Contact />,
    resume: <Resume />,
  }
  if (current in pages) {
    return <div className="flex-grow">{pages[current]}</div>
  }
  return (
    <div className="flex-grow">
      <About />
    </div>
  )
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('about')

  return (
    <div className={`${style}`}>
      <Wave />
      <Container extend="relative z-10 px-3 min-h-screen flex flex-col">
        <Navbar setCurrentPage={setCurrentPage} />
        <Content current={currentPage} />
        <Footer />
      </Container>
    </div>
  )
}

Content.propTypes = {
  current: PropTypes.string,
}
export default App
