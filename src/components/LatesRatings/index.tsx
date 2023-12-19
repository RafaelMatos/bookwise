import { ChartLineUp } from '@phosphor-icons/react'
import { Text } from '../Typography'
import { Container } from './styles'
import TitlePage from '../TitlePage'
import RatingCard from '../RatingCard'
import { generateSingleUser } from '@/utils/generateUser'
import { generateSingleBook } from '@/utils/generateBook'
import { faker } from '@faker-js/faker'

export default function LatesRatings() {
  return (
    <Container>
      <TitlePage
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: '$4' }}
      />

      <Text size="sm">Avaliações mais recentes</Text>
      <section>
        {Array.from({ length: 20 }).map((_, i) => {
          return (
            <RatingCard
              key={i}
              rating={{
                id: 'aa',
                rate: faker.number.int({ min: 0, max: 5 }),
                description: faker.lorem.lines(),
                created_at: faker.date.past(),
                user: {
                  id: faker.string.uuid(),
                  email: 'rafael@email.com',
                  name: faker.person.fullName(),
                  avatar_url: faker.image.avatar(),
                  created_at: new Date(),
                },
                book: generateSingleBook(),
              }}
            />
          )
        })}
      </section>
    </Container>
  )
}
