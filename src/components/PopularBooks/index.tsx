import { Book } from '@prisma/client'
import BookCard, { BookWithAvgRating } from '../BookCard'
import { Text } from '../Typography'
import { Link } from '../ui/Link'
import { Container } from './styles'
import { generateSingleBook } from '@/utils/generateBook'
import { faker } from '@faker-js/faker'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import popular from '@/pages/api/books/popular'
import { books } from '../../../prisma/constants/books'

export default function PopularBooks() {
  const book = { book: generateSingleBook(), avgRating: 4 }

  const { data: popularBooks } = useQuery<BookWithAvgRating[]>({
    queryKey: ['popular-books'],

    queryFn: async () => {
      const { data } = await api.get('/books/popular')

      return data?.books ?? []
    },
  })
  return (
    <Container>
      <header>
        <Text size={'sm'}>Livros populares</Text>
        <Link href="/explore" text="Ver todos" />
      </header>
      <section>
        {' '}
        {popularBooks?.map((book) => {
          return <BookCard key={`popular-${book.id}`} book={book} />
        })}
      </section>
    </Container>
  )
}
