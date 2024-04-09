import httpClient from '@/common/http/httpClient'
import {
   GetAllResultsResponse,
   RandomResultService as IRandomResultService,
   RandomResult,
} from '@/api/randomResult/randomResult.model'

const RandomResultService = (): IRandomResultService => {
   return {
      getAllResults: (): HttpPromise<GetAllResultsResponse> => {
         // return httpClient.get('/randomResult')
         return httpClient.get('/api/getAll')
      },
      postResult: (randomResult: RandomResult): HttpPromise<void> => {
         return httpClient.post('/api/postResult', { data: randomResult })
      },
   }
}

export default RandomResultService()
