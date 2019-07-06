import React from 'react';
import BeansLogo from '../beansLogo'
import './text.sass'

const Text = (props) => {

  const {type, title, text} = props;

  return (
    <>
      <div class="title">{title}</div>
      <BeansLogo color="black" />
      <div class={`${type}__text`}>{text}</div>
    </>
  )
}

export default Text
