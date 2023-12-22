import { Book } from '@prisma/client'
import BookCard from '../BookCard'
import { Text } from '../Typography'
import { Link } from '../ui/Link'
import { Container } from './styles'
import { generateSingleBook } from '@/utils/generateBook'
import { faker } from '@faker-js/faker'

export default function PopularBooks() {
  const book = { book: generateSingleBook(), avgRating: 4 }
  return (
    <Container>
      <header>
        <Text size={'sm'}>Livros populares</Text>
        <Link href="/explore" text="Ver todos" />
      </header>
      <section>
        {' '}
        {Array.from({ length: 5 }).map((_, i) => {
          const subjectName = faker.animal.type()
          return (
            <BookCard
              key={`popular-${i}`}
              book={{
                id: faker.string.uuid(),
                name: faker.lorem.sentence(),
                author: faker.person.fullName(),
                summary: faker.lorem.text(),
                cover_url: faker.image.urlLoremFlickr({
                  category: subjectName,
                }),
                total_pages: faker.number.int({ min: 10, max: 999 }),
                created_at: faker.date.past(),
                avgRating: faker.number.int({ min: 0, max: 5 }),
              }}
            />
          )
        })}
      </section>
    </Container>
  )
}
