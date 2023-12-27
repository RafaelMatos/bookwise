import { DefaultLayout } from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from './_app'
import {
  BookGrid,
  ExploreContainer,
  TagsContainer,
} from '@/styles/pages/explore'
import TitlePage from '@/components/TitlePage'
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import { Input } from '@/components/Form/Input'
import { useState } from 'react'
import { Tag } from '@/components/ui/Tag'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import BookCard, { BookWithAvgRating } from '@/components/BookCard'
import { Text } from '@/components/Typography'

type Category = {
  id: string
  name: string
}

const ExplorePage: NextPageWithLayout = () => {
  const [search, setSearch] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const { data: categories } = useQuery<Category[]>({
    queryKey: ['categories'],

    queryFn: async () => {
      const { data } = await api.get('/books/categories')

      return data?.categories ?? []
    },
  })

  const { data: books } = useQuery<BookWithAvgRating[]>({
    queryKey: ['books', selectedCategory],
    queryFn: async () => {
      const { data } = await api.get('/books', {
        params: {
          category: selectedCategory,
        },
      })

      return data?.books ?? []
    },
  })

  const filteredBooks = books?.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <ExploreContainer>
      <header>
        <TitlePage
          title="Explorar"
          icon={<Binoculars size={32} />}
          css={{ marginBottom: '$4' }}
        />

        <Input
          icon={<MagnifyingGlass size={20} />}
          placeholder="Buscar livro ou autor"
          css={{
            maxWidth: 433,
          }}
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </header>

      <TagsContainer>
        <Tag
          active={selectedCategory === null}
          onClick={() => setSelectedCategory(null)}
        >
          Tudo
        </Tag>
        {categories?.map((category) => {
          return (
            <Tag
              key={`category-${category.name}`}
              active={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Tag>
          )
        })}
      </TagsContainer>

      <BookGrid>
        {filteredBooks && filteredBooks.length ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} size="md" book={book} />
          ))
        ) : (
          <Text size="md" color="gray-400">
            Desculpe, não encontramos seu livro!
          </Text>
        )}
      </BookGrid>
    </ExploreContainer>
  )
}

ExplorePage.getLayout = (page) => {
  return <DefaultLayout title="Home">{page}</DefaultLayout>
}

export default ExplorePage
