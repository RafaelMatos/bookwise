import { useRouter } from "next/router"
import { signOut, useSession} from 'next-auth/react'


export default function Home() {
  const router = useRouter()
  const { data } = useSession()
  return (
    <>
      <h1>Hello World</h1>
      { data ? <pre>
        {JSON.stringify(data,null,2)}
        <button onClick={()=> signOut()}>Deslogar</button>
      </pre> : <button onClick={()=> router.push('/login')}>Login</button>}
      
    </>
  )
}
