import React, {useState} from 'react'

export default function Generator (e){

    const randomize =() => {
        return e.dataset[Math.floor(Math.random() * e.dataset.length)];
    }

    const [ideas, setIdeas] = useState(() => randomize())

    return (
        <div className='gen'>
            <p className=''>{ideas}</p>
            <button className='sub' onClick={() => setIdeas(randomize())}>Generate ideas</button>
        </div>
    )
}
