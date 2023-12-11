import AuthButtons from "@/components/AuthButtons";
import { Heading, Text } from "@/components/Typography";
import { LoginContainer, LogoSection,WelcomeSection } from "@/styles/login"

export default function Login(){
  return(
    <LoginContainer>
      <LogoSection>
        <img src="/images/Logo-BookWise.png"></img>
      </LogoSection>
      <WelcomeSection>
          <Heading>Boas vindas!</Heading>
          <Text>Faça seu login ou acesse como visitante.</Text>

          <AuthButtons/>
        
      </WelcomeSection>
    </LoginContainer>
  )
}