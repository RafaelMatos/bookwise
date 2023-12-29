import { faker } from '@faker-js/faker'
import { Text } from '../Typography'
import { UserRatingCard } from '../UserRatingCard'
import { Link } from '../ui/Link'
import { Container } from './styles'

export const BookRatings = () => {
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
        {Array.from({ length: 4 }).map((_, i) => {
          return (
            <UserRatingCard
              key={i}
              rating={{
                user: {
                  name: 'Rafael Matos',
                  avatar_url: 'http://github.com/RafaelMatos.png',
                },
                created_at: new Date(),
                rate: 2,
                description: faker.lorem.lines({ max: 3, min: 1 }),
              }}
            />
          )
        })}
      </section>
    </Container>
  )
}
