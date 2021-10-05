import Card from '../elements/Card'
import Col from '../elements/Col'

const About = () => (
  <div className="flex flex-row flex-wrap pt-5">
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
  </div>
)

export default About
