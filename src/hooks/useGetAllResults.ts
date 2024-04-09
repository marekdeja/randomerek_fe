import { AppDispatch, RootState } from '@/store'
import { getAllResults } from '@/store/slices/randomResultSlice'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllResults = () => {
   const dispatch = useDispatch<AppDispatch>()
   const randomResults = useSelector((state: RootState) => state.randomResults)

   const { allResults, loading, error } = randomResults

   const getResults = useCallback(async () => {
      console.log('getting results')
      const response = await dispatch(getAllResults())
      return response.payload
   }, [dispatch])

   return { getResults, allResults, loading, error }
}

export default useGetAllResults
