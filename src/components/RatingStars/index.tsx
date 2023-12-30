import { useState } from 'react'
import { Container } from './styles'

import { Star } from '@phosphor-icons/react'

type RatingStarsProps = {
  rating: number
  size?: 'sm' | 'md' | 'lg'
  setRating?: (rating: number) => void
}
export default function RatingStars({
  rating,
  size = 'sm',
  setRating,
  ...props
}: RatingStarsProps) {
  const [previewValue, setPreviewValue] = useState(0)
  const isEditable = !!setRating

  const ratingValue = isEditable ? previewValue : rating

  const handleMouseEnter = (value: number) => {
    if (isEditable) {
      if (rating === 1) {
        setRating(0)
      }
      setPreviewValue(value)
    }
  }
  const handleMouseLeave = () => {
    if (isEditable) setPreviewValue(rating)
  }

  const handleSetValue = () => {
    if (isEditable) {
      if (rating === 1) {
        setRating(0)
      }
      setRating(previewValue)
    }
  }
  return (
    <Container
      size={size}
      {...props}
      css={isEditable ? { cursor: 'pointer' } : {}}
    >
      {Array.from({
        length: 5,
      }).map((_, i) => {
        return (
          <Star
            key={`star-${i}`}
            size={20}
            weight={i + 1 <= ratingValue ? 'fill' : 'regular'}
            onMouseEnter={() => handleMouseEnter(i + 1)}
            onMouseLeave={handleMouseLeave}
            onClick={handleSetValue}
          />
        )
      })}
    </Container>
  )
}
