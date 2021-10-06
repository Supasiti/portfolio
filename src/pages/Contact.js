import ContactForm from '../components/ContactForm'
import Card from '../elements/Card'
import Col from '../elements/Col'
import Row from '../elements/Row'

const Contact = () => (
  <Row extend="py-8 md:py-12 items-start justify-center">
    <Col width="full sm-1/2">
      <Card color="brand" extend="p-4">
        <h2 className="text-sandy text-3xl text-center">Contact</h2>
        <ContactForm />
      </Card>
    </Col>
  </Row>
)

export default Contact
