import Col from '../elements/Col'
import Row from '../elements/Row'
import AboutMe from '../components/AboutMe'
import Profile from '../components/Profile'

const About = () => (
  <Row extend="py-8 md:py-12 items-start">
    <Col width="w-full md:w-1/2" extend="px-4 py-0">
      <Profile />
    </Col>
    <Col width="w-full md:w-1/2" extend="px-4 py-0">
      <AboutMe />
    </Col>
  </Row>
)

export default About
