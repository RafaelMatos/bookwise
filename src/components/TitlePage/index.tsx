import { Icon } from '@phosphor-icons/react'
import { Container } from './styles'
import { Heading, Text } from '../Typography'
import { ComponentProps } from '@stitches/react'
import { ReactNode } from 'react'

type TitlePageProps = ComponentProps<typeof Container> & {
  title: string
  icon?: ReactNode
}

export default function TitlePage({ title, icon, ...props }: TitlePageProps) {
  return (
    <Container {...props}>
      {icon}
      <Heading size="lg">{title}</Heading>
    </Container>
  )
}
