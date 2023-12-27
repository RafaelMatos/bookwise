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

const ExplorePage: NextPageWithLayout = () => {
  const [search, setSearch] = useState<string>('')
  console.log('Search: ', search)
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
        {Array.from({ length: 15 }).map((_, i) => {
          return (
            <Tag key={i} active={faker.datatype.boolean()}>
              {faker.animal.type()}
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
