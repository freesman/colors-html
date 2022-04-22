import { memo, useEffect, useRef } from 'react';
import colorsData from 'ntc-hi-js/src/colors/en.json';

import s from './Footer.module.scss';

const randRange = colorsData.length;
const getColor = () => {
  const colorIndex = Math.floor(Math.random() * randRange);
  return `#${colorsData[colorIndex][0]}`;
};

const Footer = () => {
  const bgEl = useRef(null);
  useEffect(() => {
    bgEl.current.style.backgroundColor = getColor();
  }, []);

  return (
    <footer className={s.root}>
      <div className={s.bg} ref={bgEl} />
      <div className={s.title}>SNP &copy;</div>
    </footer>
  );
};

export default memo(Footer);
