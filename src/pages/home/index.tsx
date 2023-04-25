import Barra from "../../components/Barra";
import VideoComponent  from "../../components/videoComponent";
import { Container, VideoContainer } from "./styles";

interface IProps {
  openMenu: boolean,
}
function Home({openMenu }: IProps){

return (
        <div>
          <Container >
            <Barra />
          </Container>
            <VideoContainer openMenu={openMenu}>
              <VideoComponent />
              <VideoComponent />
              <VideoComponent />
              <VideoComponent />
          </VideoContainer>
        </div>
    )
}

export default Home;