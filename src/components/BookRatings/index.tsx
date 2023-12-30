import { faker } from '@faker-js/faker'
import { Text } from '../Typography'
import { RatingWithAuthor, UserRatingCard } from '../UserRatingCard'
import { Link } from '../ui/Link'
import { Container } from './styles'
import { useState } from 'react'
import { RatingForm } from '../RatingForm'

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
  bookId: string
}

export const BookRatings = ({ ratings, bookId }: BookRatingsProps) => {
  const [showForm, setShowForm] = useState(true)
  function handleRate() {
    setShowForm(true)
  }
  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link withoutIcon onClick={handleRate} text="Avaliar" />
      </header>
      <section>
        {showForm && (
          <RatingForm bookId={bookId} onCancel={() => setShowForm(false)} />
        )}
        {ratings.map((rating) => {
          return <UserRatingCard key={rating.id} rating={rating} />
        })}
      </section>
    </Container>
  )
}
