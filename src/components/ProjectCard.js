import { PropTypes } from 'prop-types'
import { useState } from 'react'
import Col from '../elements/Col'
import AbsoluteDiv from '../elements/AbsoluteDiv'
import Card from '../elements/Card'
import Row from '../elements/Row'
import HiddenDiv from '../elements/HiddenDiv'

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

const ProjectCard = ({ project = {} }) => {
  const [reveal, setReveal] = useState(false)

  return (
    <Col width="72" extend="relative p-3">
      <div
        className="relative z-30"
        onMouseEnter={() => setReveal(true)}
        onMouseLeave={() => setReveal(false)}
      >
        <a href={project.link}>
          <img
            className="rounded-lg w-64 h-64 mx-auto object-cover object-center"
            srcSet={parseImgSrcSet(project.imgData.source)}
            alt={project.imgData.alt}
          />

          <p className="px-3 pt-5">{project.title}</p>
        </a>
      </div>

      <HiddenDiv isShowing={reveal}>
        <AbsoluteDiv position="inset-x-0 top-0" extend="z-0">
          <Card color="brand" extend="w-72 space-y-3 p-3">
            <p className="pt-80 px-3 text-sm">{project.description}</p>
            <Row extend="justify-center p-">
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
