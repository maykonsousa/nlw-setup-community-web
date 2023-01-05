import { ActionContainer, SignInContainer, SignInContent, SignInForm } from "../styles/pages/signIn.styles";
import VerticalLogo from "../assets/logoVertical.svg";
import Image from "next/image";
import { ToolTipInfo } from "../components/ToolTipInfo/ToolTipInfo";


export default function Home() {
 
 


 
  return (
    <SignInContainer>
      <SignInContent>

        <Image src={VerticalLogo} alt="logo" />
        <h1><span>COMMUNITY</span></h1>
        <p>Plataforma independente para reunir a galera que tá participando do <span>NLW SETUP</span></p>


        <ActionContainer>
          <p>
            Ainda não está participando do evento?

          </p>
          <a>
            Embarcar nesse foguete
          </a>
        </ActionContainer>

      </SignInContent>
      <SignInForm>
        <h1>Entrar</h1>
        <form action="">

          <div>
            <label htmlFor="" >
              <span>Usuário NLW</span>
              <ToolTipInfo
                message="Disponível no seu link de convite"
              />
            </label>
            <input type="text" placeholder="Usuário NLW" />
         </div>
          <div>
            <label htmlFor="">Senha</label>
            <input type="password" placeholder="Senha" />
         </div>

          <button type="submit">
            Entrar
          </button>
        </form>
        <div>
           <p>
        Ainda não tem cadastro? <a href="">Cadastre-se</a>

      </p>
      <p>Esqueceu a senha? <a>Recuperar</a> </p>
     </div>
      </SignInForm>
      
    </SignInContainer>
    
  )
}
