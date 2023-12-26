import { ChartLineUp } from '@phosphor-icons/react'
import { Text } from '../Typography'
import { Container } from './styles'
import TitlePage from '../TitlePage'
import RatingCard, { RatingWithAuthorAndBook } from '../RatingCard'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

export default function LatesRatings() {
  const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>({
    queryKey: ['latest-ratings'],
    queryFn: async () => {
      const { data } = await api.get('/ratings/latest')

      return data.ratings ?? []
    },
  })

  return (
    <Container>
      <TitlePage
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: '$4' }}
      />

      <Text size="sm">Avaliações mais recentes</Text>
      <section>
        {ratings?.map((rating) => {
          return <RatingCard key={rating.id} rating={rating} />
        })}
      </section>
    </Container>
  )
}
