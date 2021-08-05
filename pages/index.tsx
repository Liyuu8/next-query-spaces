import Link from 'next/link'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

import { Layout } from '../components/Layout'
import { RocketItem } from '../components/RocketItem'
import { useQueryRockets } from '../hooks/useQueryRockets'

const Home = () => {
  const { status, data } = useQueryRockets()

  return status === 'loading' ? (
    <Layout title="home">{'Loading...'}</Layout>
  ) : status === 'error' ? (
    <Layout title="home">{'Error'}</Layout>
  ) : (
    <Layout title="home">
      <p className="my-5 text-blue-500 text-xl font-bold">Fetch by useQuery</p>
      <ul>
        {data?.map((rocket) => (
          <RocketItem key={rocket.id} rocket={rocket} />
        ))}
      </ul>

      <Link href="/read-cache" passHref>
        <div className="mt-20 flex items-center cursor-pointer">
          <ChevronDoubleRightIcon className="h-5 w-5 mx-1 text-blue-500" />
        </div>
      </Link>
    </Layout>
  )
}

export default Home
