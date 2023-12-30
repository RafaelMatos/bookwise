import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode, useEffect, useState } from 'react'
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
import { Heading, Text } from '../Typography'
import RatingStars from '../RatingStars'
import { BookInfo } from './BookInfo'
import { BookRatings } from '../BookRatings'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { BookWithAvgRating } from '../BookCard'
import { RatingWithAuthor } from '../UserRatingCard'
import { CategoriesOnBooks, Category } from '@prisma/client'
import { useRouter } from 'next/router'

type BookDetails = BookWithAvgRating & {
  ratings: RatingWithAuthor[]
  categories: (CategoriesOnBooks & {
    category: Category
  })[]
}

type RatingDialogProps = {
  children: ReactNode
  bookId: string
}

export const RatingsDialog = ({ children, bookId }: RatingDialogProps) => {
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const paramBookId = router.query.book as string
  useEffect(() => {
    if (paramBookId === bookId) {
      setOpen(true)
    }
  }, [bookId, paramBookId])

  const onOpenChange = (open: boolean) => {
    if (open) {
      router.push(`/explore?book=${bookId}`, undefined, { shallow: true })
    } else {
      router.push('/explore')
    }
    setOpen(open)
  }

  const { data: book } = useQuery<BookDetails>({
    queryKey: ['book', bookId],
    queryFn: async () => {
      const { data } = await api.get(`/books/details/${bookId}`)

      return data?.book ?? {}
    },
    enabled: open,
  })

  const bookCategories =
    book?.categories?.map((category) => category?.category?.name)?.join(', ') ??
    ''

  const bookImageUrl = book?.cover_url?.slice(6)
  const ratingsLength = book?.ratings.length

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>
          {!book ? (
            <p>Carregando...</p>
          ) : (
            <>
              <BookDetailsWrapper>
                <BookDetailsContainer>
                  <BookImage
                    src={bookImageUrl!}
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
                      <Text
                        color="gray-400"
                        size="sm"
                        css={{ marginTop: '$2' }}
                      >
                        {ratingsLength}
                        {ratingsLength === 1 ? ' avaliação' : ' avaliações'}
                      </Text>
                    </div>
                  </BookContent>
                </BookDetailsContainer>
                <BookInfos>
                  <BookInfo
                    icon={<BookmarkSimple />}
                    title={'Categorias'}
                    info={bookCategories}
                  />
                  <BookInfo
                    icon={<BookOpen />}
                    title={'Páginas'}
                    info={book.total_pages?.toString()}
                  />
                </BookInfos>
              </BookDetailsWrapper>
              <BookRatings ratings={book.ratings} bookId={book.id} />
            </>
          )}

          <Dialog.Description />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
