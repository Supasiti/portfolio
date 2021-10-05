// import Card from '../elements/Card'
// import AbsoluteDiv from '../elements/AbsoluteDiv'
import Button from '../elements/Button'

const Profile = () => (
  <div className="relative">
    <img
      className="mx-auto h-2/3 w-2/3 rounded-full item"
      src="/images/me_400w.jpeg"
      alt="My profile"
    />

    {/* <AbsoluteDiv position="-bottom-12 right-4">
      <Card color="dark" extend="p-4">
        <div className="text-center">
          <h3 className="text-burnt text-xl my-4">Tharatorn Supasiti</h3>
          <h4 className="text-java text-md my-3">PhD in Pure Mathematics</h4>
          <p className=" text-sm">The University of Melbourne</p>
        </div>
      </Card>
    </AbsoluteDiv> */}

    <div className="-mt-8 pl-6 sm:-mt-10 sm:pl-16 md:-mt-8 md:pl-6">
      <Button
        color="gold"
        isCircular
        shadow
        extend="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
        padding="p-1"
      >
        <span className="fab fa-linkedin text-xl sm:text-2xl lg:text-3xl text-center"></span>
      </Button>

      <div className="pl-12 sm:pl-20 md:pl-12 lg:pl-28">
        <Button
          color="gold"
          isCircular
          shadow
          extend="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
          padding="p-1"
        >
          <span className="fab fa-github text-4xl sm:text-5xl text-center"></span>
        </Button>
      </div>
    </div>
  </div>
)

export default Profile
