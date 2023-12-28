import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import {
  BookContent,
  BookDetailsContainer,
  BookDetailsWrapper,
  BookImage,
  BookInfos,
  DialogClose,
  DialogContent,
  DialogOverlay,
} from './styles'
import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'
import { BookWithAvgRating } from '../BookCard'
import { Heading, Text } from '../Typography'
import RatingStars from '../RatingStars'
import { BookInfo } from './BookInfo'

type RatingDialogProps = {
  children: ReactNode
  book: BookWithAvgRating
}

export const RatingsDialog = ({ children, book }: RatingDialogProps) => {
  const bookImageUrl = book.cover_url.slice(6)
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>
          <BookDetailsWrapper>
            <BookDetailsContainer>
              <BookImage
                src={bookImageUrl}
                width={171}
                height={242}
                alt={book.name}
              />
              <BookContent>
                <div>
                  <Heading size="sm">{book.name}</Heading>
                  <Text color="gray-300" css={{ marginTop: '$2' }}>
                    {book.author}
                  </Text>
                </div>
                <div>
                  <RatingStars rating={book.avgRating} size="md" />
                  <Text color="gray-400" size="sm" css={{ marginTop: '$2' }}>
                    2 avaliações
                  </Text>
                </div>
              </BookContent>
            </BookDetailsContainer>
            <BookInfos>
              <BookInfo
                icon={<BookmarkSimple />}
                title={'Categorias'}
                info={'Ficção, Ação'}
              />
              <BookInfo
                icon={<BookOpen />}
                title={'Páginas'}
                info={book.total_pages.toString()}
              />
            </BookInfos>
          </BookDetailsWrapper>

          <Dialog.Description />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
