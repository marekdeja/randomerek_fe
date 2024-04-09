export interface RandomResult {
   randomNumber: number
   userName: string
}

export interface GetAllResultsResponse {
   randomResults: RandomResult[]
}

export interface RandomResultService {
   getAllResults: () => HttpPromise<GetAllResultsResponse>
   postResult: (randomResult: RandomResult) => HttpPromise<void>
}
