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
          return (
            <BookCard
              key={`popular-${i}`}
              book={{
                id: 'effea',
                name: 'Rafael',
                author: 'Matos',
                summary:
                  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, officiis?',
                cover_url: 'https://github.com/RafaelMatos.png',
                total_pages: 300,
                created_at: new Date(),
                avgRating: 3,
              }}
            />
          )
        })}
      </section>
    </Container>
  )
}
