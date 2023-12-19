import { ReactNode } from 'react'
import { Container, Content } from './styles'
import Head from 'next/head'
import SideBar from '@/components/Sidebar'
import { Text } from '@/components/Typography'

type DefaultLayoutProps = {
  children: ReactNode
  title: string
}

export const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{`${title} | BookWise`}</title>
      </Head>
      <SideBar />

      <Content>
        {children}
      </Content>
    </Container>
  )
}
