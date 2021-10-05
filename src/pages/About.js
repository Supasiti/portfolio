import Card from '../elements/Card'
import Col from '../elements/Col'
import Row from '../elements/Row'

const About = () => (
  <Row extend="py-8 md:py-32 ">
    <Col width="full md-1/2" extend="px-4 py-6">
      <div>
        <img
          className="mx-auto h-2/3 w-2/3 rounded-full"
          src="/images/me_400w.jpeg"
          alt=""
        />
      </div>
    </Col>
    <Col width="full md-1/2">
      <Card color="dark" extend="p-4">
        <div className="flex flex-col justify-center h-full text-center space-y-6">
          <h2 className="font-title text-4xl">Hi, my name is</h2>
          <h1 className="font-title text-8xl text-burnt">Thara,</h1>
          <h2 className="text-xl text-body">a full-stack web developer.</h2>
        </div>
      </Card>
    </Col>
  </Row>
)

export default About
