import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Login from './login'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
  // const router = useRouter()
  
  // return (
  // <>
  // <h1>Path :- {router.asPath} </h1>
  // <Link href="/login">About Us</Link>
  // </>
  // )
}
