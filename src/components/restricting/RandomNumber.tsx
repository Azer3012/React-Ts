import React from 'react'


type RandomNumberProps = {
    value: number
    isPossitive?: boolean
    isNegative?: boolean
    isZero?: boolean
}

const RandomNumber = ({ value, isPossitive, isNegative, isZero }: RandomNumberProps) => {
    return (
        <div>
            {value} {isPossitive && "possitive"} {isNegative && "negative"}
            {isZero &&  'zero'}
        </div>
    )
}

export default RandomNumber