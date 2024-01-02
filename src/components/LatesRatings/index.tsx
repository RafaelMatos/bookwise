import { ChartLineUp } from '@phosphor-icons/react'
import { Text } from '../Typography'
import { Container, LatestContainer } from './styles'
import TitlePage from '../TitlePage'
import RatingCard, { RatingWithAuthorAndBook } from '../RatingCard'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'
import { Link } from '../ui/Link'

export default function LatesRatings() {
  const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>({
    queryKey: ['latest-ratings'],
    queryFn: async () => {
      const { data } = await api.get('/ratings/latest')

      return data.ratings ?? []
    },
  })

  const { data: session } = useSession()

  const userId = session?.user?.id

  const { data: latestUserRating } = useQuery<RatingWithAuthorAndBook>({
    queryKey: ['latest-user-rating', userId],
    queryFn: async () => {
      const { data } = await api.get('/ratings/user-latest')

      return data?.rating ?? null
    },
    enabled: !!userId,
  })

  return (
    <Container>
      <TitlePage
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: '$4' }}
      />

      {latestUserRating && (
        <LatestContainer>
          <header>
            <Text size="sm">Sua última avaliação</Text>
            <Link
              text="Ver todas"
              href={`/profile/${userId}`}
              iconSide="right"
            />
          </header>

          <RatingCard variant="compact" rating={latestUserRating} />
        </LatestContainer>
      )}

      <Text size="sm">Avaliações mais recentes</Text>
      <section>
        {ratings?.map((rating) => {
          return <RatingCard key={rating.id} rating={rating} />
        })}
      </section>
    </Container>
  )
}
