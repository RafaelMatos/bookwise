import { Container } from './styles'

import { Star } from '@phosphor-icons/react'

type RatingStarsProps = {
  rating: number
  size?: 'sm' | 'md' | 'lg'
}
export default function RatingStars({
  rating,
  size = 'sm',
  ...props
}: RatingStarsProps) {
  return (
    <Container size={size} {...props}>
      {Array.from({
        length: 5,
      }).map((_, i) => {
        return (
          <Star
            key={`star-${i}`}
            size={20}
            weight={i + 1 <= rating ? 'fill' : 'regular'}
          />
        )
      })}
    </Container>
  )
}
