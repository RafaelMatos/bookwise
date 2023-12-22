import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import { NextPageWithLayout } from './_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { HomeContainer } from '@/styles/pages/home'
import LatesRatings from '@/components/LatesRatings'
import PopularBooks from '@/components/PopularBooks'

const HomePage: NextPageWithLayout = () => {
  const router = useRouter()
  const { data } = useSession()
  return (
    <HomeContainer>
      <LatesRatings />
      <PopularBooks />
    </HomeContainer>
  )
}

HomePage.getLayout = (page) => {
  return <DefaultLayout title="Home">{page}</DefaultLayout>
}

export default HomePage
