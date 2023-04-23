import React from 'react';
import Generator from '../components/Generator';
import {ideas} from '../ideas';
import '../styles/design.css'

export default function Prompts (){
    
    return (
    <div className='background'>
    <div className='gen'>
    <h1>Unsure where to start?</h1>
   <p><strong>Being eco-friendly isn't always as easy as it sounds. Want to help the environment but unsure where to start? Here are 50 ideas on where to start.</strong></p>
        <Generator dataset={ideas}/>
    </div>
    </div>
    )
  
}