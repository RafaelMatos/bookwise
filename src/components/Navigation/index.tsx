import { useRouter } from 'next/router'
import { Container, NavItemContainer } from './styles'
import { ChartLineUp, Binoculars, User } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import { useMemo } from 'react'

const NAV_ITENS = [
  {
    label: 'Inicio',
    href: '/',
    icon: <ChartLineUp size={24} />,
  },
  {
    label: 'Explorar',
    href: '/explore',
    icon: <Binoculars size={24} />,
  },
]

export default function Navigation() {
  const router = useRouter()
  const { data: session } = useSession()
  const navItems = useMemo(() => {
    if (session) {
      return NAV_ITENS.concat({
        label: 'Perfil',
        href: `/profile/${session.user.id}`,
        icon: <User size={24} />,
      })
    }

    return NAV_ITENS
  }, [session])
  return (
    <Container>
      {navItems.map(({ href, label, icon }) => {
        return (
          <NavItemContainer
            key={label}
            href={href}
            active={router.asPath === href}
          >
            {icon} {label}
          </NavItemContainer>
        )
      })}
    </Container>
  )
}
