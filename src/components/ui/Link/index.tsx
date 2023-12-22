import { ComponentProps } from '@stitches/react'
import { Container } from './styles'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

type LinkProps = Omit<ComponentProps<typeof Container>, 'href'> & {
  text: string
  href?: string
  onClick?: () => void
  withoutIcon?: boolean
  iconSide?: string
}

export const Link = ({
  text,
  href,
  iconSide = 'left',
  withoutIcon,
  onClick,
  ...props
}: LinkProps) => {
  return (
    <Container
      {...props}
      href={href}
      iconSide={iconSide}
      onClick={onClick}
      as={onClick ? 'button' : undefined}
    >
      {text}
      {!withoutIcon && (iconSide === 'right' ? <CaretRight /> : <CaretLeft />)}
    </Container>
  )
}
