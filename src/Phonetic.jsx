import React from 'react'
import './Phonetic.css'

export default function Phonetic(props) {
  console.log(props.phonetic)
  return (
    <div class="Phonetic">
      <a href={props.phonetic.audio} target="">
        Listen
      </a>
      {props.phonetic.text}
    </div>
  )
}
