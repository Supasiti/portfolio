import Row from '../elements/Row'
import Col from '../elements/Col'
// import Card from '../elements/Card'
import { portfolioData } from '../data/portfolioData'

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

const Portfolio = () => {
  console.log(portfolioData)
  return (
    <Row extend="py-8 md:py-12 items-start justify-center">
      {portfolioData.map((project) => (
        <Col width="72" extend="p-3 overflow-hidden" key={project.link}>
          {project.title}
          <img
            className="rounded-lg w-72 h-72 object-cover object-center"
            srcSet={parseImgSrcSet(project.imgData.source)}
            alt={project.imgData.alt}
          />
        </Col>
      ))}
    </Row>
  )
}

export default Portfolio
