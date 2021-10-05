import Card from '../elements/Card'
import Col from '../elements/Col'
import Row from '../elements/Row'
import HiddenDiv from '../elements/HiddenDiv'

const About = () => (
  <Row extend="py-8 md:py-20 items-start">
    <Col width="full md-1/2" extend="px-4 py-6">
      <div>
        <img
          className="mx-auto h-2/3 w-2/3 rounded-full item"
          src="/images/me_400w.jpeg"
          alt=""
        />
      </div>
    </Col>
    <Col width="full md-1/2" extend="px-4 py-6">
      <Card color="dark" extend="p-4">
        <div className="flex flex-col justify-center py-12 text-center space-y-6">
          <h2 className="font-title text-4xl">Hi, my name is</h2>
          <h1 className="font-title text-8xl text-burnt">Thara,</h1>
          <h2 className="text-xl text-body">a full-stack web developer.</h2>
        </div>
        <div>
          <HiddenDiv>
            <h2 className="text-xl text-sandy mb-3">About Me</h2>
            <p>
              Full-stack Web Developer, a mathematician and a climbing route
              setter with focus on the backend. I am an intelligent and
              collaborative problem-solver with a PhD in pure mathematics from
              the University of Melbourne. Skilled in Javascript, CSS, Node.js,
              Express.js, with a Full-stack Web Development Certificate from
              Monash University. Known for my backend experience in each
              project, I am excited to develop tools to solve complex and
              impactful problems. I worked on a team of three to develop a web
              app that helps fitness instructors to provide content with their
              students. I am a supportive and empathetic leader with a passion
              for using data to make better decisions.
            </p>
          </HiddenDiv>
          <button type="button"> more</button>
        </div>
      </Card>
    </Col>
  </Row>
)

export default About
