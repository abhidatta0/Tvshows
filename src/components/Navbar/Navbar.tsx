import React from 'react';
import Styles from './style.module.scss';

import {Button} from '../index';

const Navbar = ()=>{
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <a href="">BIT SHOWS</a>
        <Button title="About" />
      </div>
    </div>
  )
}

export default Navbar;