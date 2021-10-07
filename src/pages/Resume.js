import Row from '../elements/Row'
import Col from '../elements/Col'
import Badge from '../elements/Badge'
import Button from '../elements/Button'
import AbsoluteDiv from '../elements/AbsoluteDiv'
import badgeData from '../data/badgeData'

// render
const Resume = () => (
  <Row extend="py-8 md:py-12 items-start">
    <h2 className="w-full text-4xl text-center text-sandy mb-4">Skills</h2>

    {badgeData.map((badge) => (
      <Col width="full sm-1/3" key={badge.title}>
        <Badge {...badge} />
      </Col>
    ))}

    <AbsoluteDiv position="top-28 right-4" extend="z-10">
      <a href="./assets/files/CV-2021-09-04.pdf">
        <Button color="gold" extend="w-16 h-16">
          <i className="far fa-file-alt text-2xl"></i>
        </Button>
      </a>
    </AbsoluteDiv>
  </Row>
)

export default Resume
