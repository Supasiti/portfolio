import { PropTypes } from 'prop-types'
import Row from '../elements/Row'
import Button from '../elements/Button'

const linkedInLink = 'https://www.linkedin.com/in/tharatorn-supasiti/'
const githubLink = 'https://github.com/Supasiti/'

// render linked button
const LinkedButton = ({ link = '', fa = '' }) => (
  <a href={link}>
    <Button
      color="teal"
      shadow
      extend="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
      padding="p-1"
    >
      <span
        className={`fab ${fa} text-xl sm:text-2xl lg:text-3xl text-center`}
      ></span>
    </Button>
  </a>
)

// render
const Footer = () => (
  <div className="space-y-6">
    <Row extend="justify-center space-x-4">
      <LinkedButton link={linkedInLink} fa="fa-linkedin" />
      <LinkedButton link={githubLink} fa="fa-github" />
    </Row>
    <p className="text-center pb-6">© 2021 Tharatorn Supasiti</p>
  </div>
)

LinkedButton.propTypes = {
  link: PropTypes.string,
  fa: PropTypes.string,
}
export default Footer
