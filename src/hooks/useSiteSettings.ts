import { useQuery } from '@tanstack/react-query'
import { getSiteSettings } from '@/lib/queries'

export const useSiteSettings = () =>
  useQuery({ queryKey: ['siteSettings'], queryFn: getSiteSettings, staleTime: 5 * 60 * 1000 })
