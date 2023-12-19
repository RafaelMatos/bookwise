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
                id: faker.string.uuid(),
                rate: faker.number.int({ min: 0, max: 5 }),
                description: faker.lorem.lines(),
                created_at: faker.date.past(),
                user: generateSingleUser(),
                book: generateSingleBook(),
              }}
            />
          )
        })}
      </section>
    </Container>
  )
}