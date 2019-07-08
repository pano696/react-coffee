import React from 'react';
import './error.sass';
import errorImg from './error.png';

const Error = () => {
    return (
      <div className="error">
        <p><img src={errorImg} alt="error"/> :( Ой, что то пошло не так и сломалось, но мы уже работаем над решением. Пожалуйста, попробуйте позже.</p>

      </div>
    )
}

export default Error;
