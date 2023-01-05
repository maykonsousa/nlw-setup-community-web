import { SignInContainer, SignInContent } from "../styles/pages/signIn.styles";
import VerticalLogo from "../assets/logoVertical.svg";
import Image from "next/image";


export default function Home() {
  return (
    <SignInContainer>
      <SignInContent>

        <Image src={VerticalLogo} alt="logo" />
        <h1><span>COMMUNITY</span></h1>
        <p>Plataforma independente para reunir a galera que tá participando do <span>NLW SETUP</span></p>

      </SignInContent>
      <div>form</div>
    </SignInContainer>
    
  )
}
