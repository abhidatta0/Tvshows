import React from 'react';
import Styles from './style.module.scss';

type Props = {
    title: string;
    wrapperStyle?: string;
    titleStyle?: string;
    onClick?:()=> void;
}
const Button = ({title, wrapperStyle, titleStyle, onClick}:Props)=>{
   return (
       <button className={`${Styles.wrapper} ${wrapperStyle}`}>
           <p className={`${Styles.title} ${titleStyle}`} onClick={onClick}>{title}</p>
       </button>
   )
} 

export default Button;