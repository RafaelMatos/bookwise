import BookCard, { BookWithAvgRating } from '../BookCard'
import { Text } from '../Typography'
import { Link } from '../ui/Link'
import { Container } from './styles'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

export default function PopularBooks() {
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
