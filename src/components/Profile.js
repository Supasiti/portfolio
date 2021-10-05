import Card from '../elements/Card'
import AbsoluteDiv from '../elements/AbsoluteDiv'
import Button from '../elements/Button'

const Profile = () => (
  <div className="relative">
    <img
      className="mx-auto h-2/3 w-2/3 rounded-full item"
      src="/images/me_400w.jpeg"
      alt="My profile"
    />

    <AbsoluteDiv position="-bottom-12 right-4">
      <Card color="dark" extend="p-4">
        <div className="text-center">
          <h3 className="text-burnt text-xl my-4">Tharatorn Supasiti</h3>
          <h4 className="text-java text-md my-3">PhD in Pure Mathematics</h4>
          <p className=" text-sm">The University of Melbourne</p>
        </div>
      </Card>
    </AbsoluteDiv>

    <AbsoluteDiv position="bottom-6 left-24">
      <Button color="gold" isCircular shadow extend="w-16 h-16">
        <span className="fab fa-github text-3xl text-center"></span>
      </Button>
    </AbsoluteDiv>

    {/* <AbsoluteDiv position="-bottom-12 left-48"> */}
    <Button color="gold" isCircular shadow extend="w-16 h-16">
      <span className="fab fa-linkedin text-3xl text-center"></span>
    </Button>
    {/* </AbsoluteDiv> */}
  </div>
)

export default Profile
