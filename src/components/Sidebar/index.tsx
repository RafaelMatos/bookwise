/* eslint-disable @next/next/no-img-element */
import { signOut, useSession } from 'next-auth/react'
import Navigation from '../Navigation'
import { Container, LoginButton, UserDetails } from './styles'
import { SignIn, SignOut } from '@phosphor-icons/react'
import { Text } from '../Typography'
import { Avatar } from '../ui/Avatar'
import { useRouter } from 'next/router'

export default function SideBar() {
  const { data: session } = useSession()
  const router = useRouter()
  const user = session?.user

  const handleOpenProfile = () => {
    router.push(`/profile/${user?.id}`)
  }
  return (
    <Container>
      <div>
        <img
          className="logo"
          src="/images/Logo-BookWise.png"
          alt="BookWise Logo"
        />

        <Navigation />
      </div>

      <footer>
        {!user ? (
          <LoginButton href="/login">
            Fazer login <SignIn />
          </LoginButton>
        ) : (
          <UserDetails>
            <Avatar
              size="md"
              src={user.avatar_url}
              alt={user.name}
              onClick={handleOpenProfile}
            />
            <Text size="sm">{user.name}</Text>
            <SignOut size={20} onClick={() => signOut()} />
          </UserDetails>
        )}
      </footer>
    </Container>
  )
}
