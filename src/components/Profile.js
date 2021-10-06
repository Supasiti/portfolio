import Button from '../elements/Button'

const linkedInLink = 'https://www.linkedin.com/in/tharatorn-supasiti/'
const githubLink = 'https://github.com/Supasiti/'

const Profile = () => (
  <div className="relative">
    <img
      className="mx-auto h-2/3 w-2/3 rounded-full item"
      src="/assets/images/me_400w.jpeg"
      alt="My profile"
    />

    <div className="-mt-8 pl-6 sm:-mt-10 sm:pl-16 md:-mt-8 md:pl-6">
      {/* linkedin */}
      <a href={linkedInLink}>
        <Button
          color="gold"
          shadow
          extend="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
          padding="p-1"
        >
          <span className="fab fa-linkedin text-xl sm:text-2xl lg:text-3xl text-center"></span>
        </Button>
      </a>

      {/* github */}
      <div className="pl-12 sm:pl-20 md:pl-12 lg:pl-28">
        <a href={githubLink}>
          <Button
            color="gold"
            shadow
            extend="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
            padding="p-1"
          >
            <span className="fab fa-github text-4xl sm:text-5xl text-center"></span>
          </Button>
        </a>
      </div>
    </div>
  </div>
)

export default Profile
