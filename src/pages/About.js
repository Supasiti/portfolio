import Col from '../elements/Col'
import Row from '../elements/Row'
import AboutMe from '../components/AboutMe'
import Profile from '../components/Profile'

const About = () => (
  <Row extend="py-8 md:py-12 items-start">
    <Col width="full md-1/2" extend="px-4 py-6">
      <Profile />
    </Col>
    <Col width="full md-1/2" extend="px-4 py-6">
      <AboutMe />
    </Col>
  </Row>
)

export default About
