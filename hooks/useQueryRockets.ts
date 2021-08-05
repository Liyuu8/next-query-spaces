import { request } from 'graphql-request'
import { useQuery } from 'react-query'

import { Rocket } from '../types/types'
import { GET_ROCKETS } from '../queries/queries'

interface RocketRes {
  rockets: Rocket[]
}

export const fetchRockets = async () => {
  const { rockets: data } = await request<RocketRes>(
    'https://api.spacex.land/graphql/',
    GET_ROCKETS
  )

  return data
}

export const useQueryRockets = () =>
  useQuery<Rocket[], Error>({
    queryKey: 'rockets',
    queryFn: fetchRockets,
    staleTime: 10,
    refetchOnWindowFocus: false,
    // refetchInterval: 3000,
  })
