import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import { NextPageWithLayout } from './_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { HomeContainer } from '@/styles/pages/home'
import LatesRatings from '@/components/LatesRatings'

const HomePage: NextPageWithLayout = () => {
  const router = useRouter()
  const { data } = useSession()
  return (
    <HomeContainer>
      <LatesRatings/>
      <div>Grid2</div>

    </HomeContainer>
  )
}

HomePage.getLayout = (page) => {
  return <DefaultLayout title="Home">{page}</DefaultLayout>
}

export default HomePage
