import AuthButtons from "@/components/AuthButtons";
import { Heading, Text } from "@/components/Typography";
import { LoginContainer, LogoSection,WelcomeSection } from "@/styles/login"
import Head from "next/head";
import Image from "next/image";

export default function Login(){
  return(
    <LoginContainer>
      <Head>
        <title>Login | BookWise</title>
      </Head>
      <LogoSection>
        <Image src="/images/Logo-BookWise.png" alt="BookWise Logo" width={232} height={58}/>
      </LogoSection>
      <WelcomeSection>
          <Heading>Boas vindas!</Heading>
          <Text>Faça seu login ou acesse como visitante.</Text>

          <AuthButtons/>
        
      </WelcomeSection>
    </LoginContainer>
  )
}