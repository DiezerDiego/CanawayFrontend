import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import { ChallengeInfo } from '../views/ChallengeInfo'
import { ChallengeSolution } from '../views/ChallengeSolution'
export const AppRouter = ({loading}) => {
  return (
   
        <Routes>
           <Route exact  path='/' element={<ChallengeInfo />}/> 
            <Route exact path='/solution' element={<ChallengeSolution loading={loading} />}  />
            
        </Routes>
  
  )
}
