import { faker } from '@faker-js/faker'
import { Text } from '../Typography'
import { RatingWithAuthor, UserRatingCard } from '../UserRatingCard'
import { Link } from '../ui/Link'
import { Container } from './styles'

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
}

export const BookRatings = ({ ratings }: BookRatingsProps) => {
  function handleRate() {
    console.log('Aqui')
  }
  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link withoutIcon onClick={handleRate} text="Avaliar" />
      </header>
      <section>
        {ratings.map((rating) => {
          return <UserRatingCard key={rating.id} rating={rating} />
        })}
      </section>
    </Container>
  )
}
