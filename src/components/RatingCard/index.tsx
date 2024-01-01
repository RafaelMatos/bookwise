import { Heading, Text } from '../Typography'
import { Avatar } from '../ui/Avatar'

import {
  BookContent,
  BookDetails,
  BookImage,
  Container,
  ToogleShowMoreButton,
  UserDetails,
} from './styles'
import Link from 'next/link'
import { Book, Rating, User } from '@prisma/client'
import { getRelativeTimeString } from '@/utils/getRelativeTimeString'
import RatingStars from '../RatingStars'
import { useToggleShowMore } from '@/hooks/useToogleShowMore'
import { useState } from 'react'

export type RatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}

type RatingCardProps = { rating: RatingWithAuthorAndBook }

const MAX_SUMMARY_LENGTH = 180

export default function RatingCard({ rating }: RatingCardProps) {
  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR')

  const {
    text: bookSummary,
    isShowingMore,
    toogleShowMore,
  } = useToggleShowMore(rating.book.summary, MAX_SUMMARY_LENGTH)

  const bookImageUrl = rating.book.cover_url.slice(6)

  return (
    <Container>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.user.id}`}>
            <Avatar
              src={rating.user.avatar_url!}
              size="sm"
              alt={`Avatar do usuário ${rating.user.name}`}
            />
          </Link>
          <div>
            <Text>{rating.user.name}</Text>
            <Text size="sm" color="gray-400">
              {distance}
            </Text>
          </div>
        </section>
        <RatingStars rating={rating.rate} />
      </UserDetails>
      <BookDetails>
        <Link href={`/explore?book=${rating.book_id}`}>
          <BookImage
            src={bookImageUrl}
            width={108}
            height={152}
            alt={rating.book.name}
          />
        </Link>

        <BookContent>
          <div>
            <Heading>{rating.book.name}</Heading>
            <Text size="sm" color="gray-400">
              {rating.book.author}
            </Text>
          </div>
          <Text color="gray-300" css={{ marginTop: '$5' }}>
            {bookSummary}
            {rating.book.summary.length > MAX_SUMMARY_LENGTH && (
              <ToogleShowMoreButton onClick={toogleShowMore}>
                {isShowingMore ? 'ver menos' : 'ver mais'}
              </ToogleShowMoreButton>
            )}
          </Text>
        </BookContent>
      </BookDetails>
    </Container>
  )
}
