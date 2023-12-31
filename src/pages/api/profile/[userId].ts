import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { getMostFrequentString } from '@/utils/getMostFrequentString'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const userId = String(req.query.usserId)

  const profile = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
        orderBy: {
          created_at: 'desc',
        },
      },
    },
  })
  const readPages = profile?.ratings.reduce(
    (acc, rating) => acc + rating.book.total_pages,
    0,
  )

  const ratedBooks = profile?.ratings?.length

  const readAuthors = profile?.ratings.reduce((acc, rating) => {
    if (!acc.includes(rating.book.author)) {
      acc.push(rating.book.author)
    }
    return acc
  }, [] as string[])

  const mostReadAuthor = readAuthors ? getMostFrequentString(readAuthors) : null

  const categories = profile?.ratings?.flatMap(
    (rating) =>
      rating?.book?.categories.flatMap((category) => category?.category?.name),
  )

  const mostReadCategory = categories ? getMostFrequentString(categories) : null

  const profileData = {
    user: {
      avatar_url: profile?.avatar_url,
      name: profile?.name,
      member_since: profile?.created_at,
    },
    ratings: {
      ratings: profile?.ratings,
      readPages,
      ratedBooks,
      readAuthors: readAuthors?.length,
      mostReadAuthor,
      mostReadCategory,
    },
  }

  return res.json({ profile: profileData })
}
