import { memo, useEffect, useRef } from 'react';
import colorsData from 'ntc-hi-js/src/colors/en.json';

import s from './Header.module.scss';

const randRange = colorsData.length;
const getColor = () => {
  const colorIndex = Math.floor(Math.random() * randRange);
  return `#${colorsData[colorIndex][0]}`;
};

const Header = () => {
  const titleEl = useRef(null);
  useEffect(() => {
    titleEl.current.querySelectorAll('span').forEach(charEl => {
      const el = charEl;
      el.style.color = getColor();
    });
  }, []);

  return (
    <header className={s.root}>
      <h1 ref={titleEl} className={s.title}>
        <span style={{ color: getColor() }}>C</span>
        <span style={{ color: getColor() }}>O</span>
        <span style={{ color: getColor() }}>L</span>
        <span style={{ color: getColor() }}>O</span>
        <span style={{ color: getColor() }}>R</span>
        <span style={{ color: getColor() }}>S</span>
      </h1>
    </header>
  );
};

export default memo(Header);
