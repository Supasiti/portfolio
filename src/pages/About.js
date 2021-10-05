import Card from '../elements/Card'
import Col from '../elements/Col'
import Row from '../elements/Row'

const About = () => (
  <Row extend="pt-5">
    <Col width="full md-1/2">
      <Card color="brand" extend="p-4">
        Hello
      </Card>
    </Col>
    <Col width="full md-1/2">
      <Card color="brand" extend="p-4">
        Hello
      </Card>
    </Col>
  </Row>
)

export default About
