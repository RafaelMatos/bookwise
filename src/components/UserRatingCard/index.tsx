import { Container, UserDetails } from './styles'
import { Avatar } from '../ui/Avatar'
import Link from 'next/link'
import { Heading, Text } from '../Typography'
import RatingStars from '../RatingStars'
import { faker } from '@faker-js/faker'
import { RatingWithAuthorAndBook } from '../RatingCard'
import { Rating, User } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { getRelativeTimeString } from '@/utils/getRelativeTimeString'

export type RatingWithAuthor = Rating & {
  user: User
}

type UserRatingCardProps = {
  rating: RatingWithAuthorAndBook
}

export const UserRatingCard = ({ rating }: UserRatingCardProps) => {
  const { data: session } = useSession()
  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR')

  const isOwner = session?.user?.id === rating.user_id

  return (
    <Container variant={isOwner ? 'highlight' : 'primary'}>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar
              src={rating.user.avatar_url!}
              size="sm"
              alt={`Avatar do usuário ${rating.user.name}`}
            />
          </Link>
          <div>
            <Heading size={'xs'}>Rafael Matos</Heading>
            <Text size="sm" color="gray-400">
              {distance}
            </Text>
          </div>
        </section>

        <RatingStars rating={rating.rate} />
      </UserDetails>
      <Text size={'sm'}>{rating.description}</Text>
    </Container>
  )
}
