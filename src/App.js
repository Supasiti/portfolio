import Wave from './elements/Wave'
import Container from './elements/Container'
import Navbar from './elements/Navbar'
import About from './pages/About'

const style = `
  relative bg-gradient-to-b from-teal to-java 
  min-h-screen overflow-hidden
  font-body text-md text-gray-200
  md:text-lg
`
const Content = () => <About />

const App = () => (
  <div className={`${style}`}>
    <Wave />
    <Container extend="relative z-10 px-3">
      <Navbar />
      <Content />
    </Container>
  </div>
)

export default App
