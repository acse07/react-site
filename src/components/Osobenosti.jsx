import Button from './Button/Button'
import { useState } from 'react'
import { differences } from '../data'


export default function Osobenosti() {
    const [contentType, setContentType] = useState(null) // Меняем state; новое значение будет доступно после ререндера

    function handleClick(type) {
      setContentType(type) // контент в юсефекте меняется на -1 типа типа было 1 ты нажал оно стало 2 но контент все равно 1 пока что
    }
    return (
        <section>
            <h3>Чем мы отличаемся от других</h3>

            <Button
              isActive={contentType === 'way'}
              onClick={() => handleClick('way')}
            >
               Подход
            </Button>

            <Button 
              isActive={contentType === 'easy'}
              onClick={() => handleClick('easy')}
            >
               Доступность 
            </Button>

            <Button
              isActive={contentType === 'program'}
              onClick={() => handleClick('program')}
            >
              Концентрация
            </Button>

            { contentType ? ( 
              <p>{differences[contentType]}</p>
            ) : (
             <p> Нажми на кнопку </p>
            )}

            {/* { !contentType ? <p> Нажми на кнопку </p> : null} */}
            
        </section>
    )
}