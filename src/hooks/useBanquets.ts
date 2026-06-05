import { useQuery } from '@tanstack/react-query'
import { getBanquets } from '@/lib/queries'

export const useBanquets = () =>
  useQuery({ queryKey: ['banquets'], queryFn: getBanquets, staleTime: 5 * 60 * 1000 })
