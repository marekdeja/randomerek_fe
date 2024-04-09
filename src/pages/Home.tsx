import { randomResultApi } from '@/api/service'
import useGetAllResults from '@/hooks/useGetAllResults'
import { useState } from 'react'

const Home = () => {
   const [numberResults, setNumberResults] = useState<number | undefined>(undefined)
   const [userName, setUserName] = useState<string>('')
   const { getResults, allResults } = useGetAllResults()

   const drawNumber = () => {
      setNumberResults(Math.floor(Math.random() * 101))
   }

   const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value)
   }

   const clickResults = () => {
      console.log('clicked results')
      getResults()
   }

   const postResult = () => {
      console.log('numberResults', numberResults)
      numberResults &&
         randomResultApi.postResult({ randomNumber: numberResults, userName: userName })
   }

   return (
      <div>
         <div> Randomerek</div>
         <div>Click to draw a number 0 - 100</div>
         <button onClick={drawNumber}>DRAW</button>

         <div>
            <input value={userName} onChange={changeUsername} placeholder="Your name here" />
         </div>
         <div>Your name is: {userName}</div>
         <div>Results: {numberResults ?? '-'}</div>

         <div>
            <button onClick={postResult}>Post result</button>
         </div>
         <div>
            <b>Last ten results:</b>
         </div>
         <div>
            <button onClick={clickResults}>Get results</button>
         </div>
         {allResults && (
            //write rest of the code here
            <ul>
               {' '}
               {allResults.slice(0, 10).map((result) => (
                  <li key={result._id}>
                     {result.userName} - {result.randomNumber}{' '}
                  </li>
               ))}{' '}
            </ul>
         )}
      </div>
   )
}

export default Home
