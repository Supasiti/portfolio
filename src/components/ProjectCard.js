import { PropTypes } from 'prop-types'
import { useState } from 'react'
import Col from '../elements/Col'
import AbsoluteDiv from '../elements/AbsoluteDiv'
import Card from '../elements/Card'
import Row from '../elements/Row'
import HiddenDiv from '../elements/HiddenDiv'
import Button from '../elements/Button'

const parseImgSrcSet = (sources) => {
  const sourcesStr = sources.map((source) => {
    const filename = source.split('.')[1]
    const segments = filename.split('-')
    const width = segments[segments.length - 1]
    return `${source} ${width}`
  })
  const result = sourcesStr.join(', ')
  return result
}

// render
const ProjectCard = ({ project = {} }) => {
  const [reveal, setReveal] = useState(false)

  return (
    <Col width="w-72" extend="relative p-3">
      <div
        className={`relative ${reveal ? 'z-30' : 'z-0'}`}
        onMouseEnter={() => setReveal(true)}
        onMouseLeave={() => setReveal(false)}
      >
        <a href={project.link}>
          {/* image */}
          <img
            className="rounded-lg w-64 h-64 mx-auto object-cover object-center"
            srcSet={parseImgSrcSet(project.imgData.source)}
            alt={project.imgData.alt}
          />
          <Row extend="justify-between items-center pt-3 ">
            <span className="px-1 text-sandy">{project.title}</span>
            <a href={project.codeLink}>
              <Button color="gold" shadow extend="w-10 h-10 mr-1" padding="p-1">
                <span className="fab fa-github text-2xl text-center"></span>
              </Button>
            </a>
          </Row>
        </a>
      </div>

      <HiddenDiv isShowing={reveal}>
        <AbsoluteDiv position="inset-x-0 top-0" extend="z-10">
          <Card color="brand" extend="w-72 space-y-3 p-3 border-sandy border-2">
            <p className="pt-80 px-1 text-sm">{project.description}</p>
            <Row extend="justify-center">
              {project.tags.map((tag) => (
                <span className="px-1 text-xs text-gold">{tag}</span>
              ))}
            </Row>
          </Card>
        </AbsoluteDiv>
      </HiddenDiv>
    </Col>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object,
}
export default ProjectCard
