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
import { faker } from '@faker-js/faker'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

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

      <BookGrid></BookGrid>
    </ExploreContainer>
  )
}

ExplorePage.getLayout = (page) => {
  return <DefaultLayout title="Home">{page}</DefaultLayout>
}

export default ExplorePage
