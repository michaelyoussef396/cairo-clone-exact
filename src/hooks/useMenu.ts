import { useQuery } from '@tanstack/react-query'
import { getMenu } from '@/lib/queries'

export const useMenu = () =>
  useQuery({ queryKey: ['menu'], queryFn: getMenu, staleTime: 5 * 60 * 1000 })
