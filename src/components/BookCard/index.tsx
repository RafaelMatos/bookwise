import { Book } from '@prisma/client'
import {
  BookContent,
  BookImage,
  BookName,
  Container,
  ReadBadge,
} from './styles'
import { Text } from '../Typography'
import RatingStars from '../RatingStars'
import { RatingsDialog } from '../RatingsDialog'

export type BookWithAvgRating = Book & {
  avgRating: number
  alreadyRead: true
}

type BookCardProps = {
  book: BookWithAvgRating
  size?: 'md' | 'lg'
}
export default function BookCard({ book, size = 'md' }: BookCardProps) {
  const IMAGE_SIZES = {
    md: {
      width: 64,
      height: 94,
    },
    lg: {
      width: 108,
      height: 151,
    },
  }
  const bookImageUrl = book.cover_url.slice(6)
  const currentSize = IMAGE_SIZES[size]

  return (
    <RatingsDialog bookId={book.id}>
      <Container>
        {book?.alreadyRead && <ReadBadge>LIDO</ReadBadge>}
        <BookImage
          src={bookImageUrl}
          alt={book.name}
          width={currentSize.width}
          height={currentSize.height}
          css={{ minWidth: currentSize.width }}
        />
        <BookContent>
          <div>
            <BookName size={'xs'}>{book.name}</BookName>
            <Text size="sm" color="gray-400">
              {book.author}
            </Text>
          </div>
          <RatingStars rating={book.avgRating} />
        </BookContent>
      </Container>
    </RatingsDialog>
  )
}
