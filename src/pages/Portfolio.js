import Row from '../elements/Row'
import { portfolioData } from '../data/portfolioData'
import ProjectCard from '../components/ProjectCard'

const Portfolio = () => {
  console.log(portfolioData)
  return (
    <Row extend="py-8 md:py-12 items-start justify-center">
      {portfolioData.map((project) => (
        <ProjectCard project={project} key={project.link} />
      ))}
    </Row>
  )
}

export default Portfolio
