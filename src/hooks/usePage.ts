import { useQuery } from '@tanstack/react-query'
import { getPage } from '@/lib/queries'

export const usePage = (id: string) =>
  useQuery({ queryKey: ['page', id], queryFn: () => getPage(id), staleTime: 5 * 60 * 1000 })
