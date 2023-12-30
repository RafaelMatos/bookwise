import { faker } from '@faker-js/faker'
import { Text } from '../Typography'
import { RatingWithAuthor, UserRatingCard } from '../UserRatingCard'
import { Link } from '../ui/Link'
import { Container } from './styles'
import { useState } from 'react'
import { RatingForm } from '../RatingForm'
import { useSession } from 'next-auth/react'

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
  bookId: string
}

export const BookRatings = ({ ratings, bookId }: BookRatingsProps) => {
  const { status, data: session } = useSession()
  const [showForm, setShowForm] = useState(false)

  const isAuthenticated = status === 'authenticated'

  function handleRate() {
    if (!isAuthenticated) return
    setShowForm(true)
  }

  const sortedRatingsByDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const canRate = ratings.every(
    (rating) => rating.user_id !== session?.user?.id,
  )

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        {canRate && <Link withoutIcon onClick={handleRate} text="Avaliar" />}
      </header>
      <section>
        {showForm && (
          <RatingForm bookId={bookId} onCancel={() => setShowForm(false)} />
        )}
        {sortedRatingsByDate.map((rating) => {
          return <UserRatingCard key={rating.id} rating={rating} />
        })}
      </section>
    </Container>
  )
}
