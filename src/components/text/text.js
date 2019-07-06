import React from 'react';
import BeansLogo from '../beansLogo'
import './text.sass'

const Text = (props) => {

  const {type, title, text} = props;

  const textToPage = text.map(item => {
    return(
      `${item}<br><br>`
    )
  })

  return (
    <>
      <div class="title">{title}</div>
      <BeansLogo color="black" />
      <div class={`${type}__text`}>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.Afraid at highly months do things on at. Situation recommend objection do intentionso questions. As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.<br /><br />Now residence dashwoods she excellent you. Shade being under his bed her, Muchread on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasanthorrible but confined day end marriage. Eagerness furniture set preserved farrecommend. Did even but nor are most gave hope. Secure active living depend sonrepair day ladies now.</div>
    </>
  )
}

export default Text
