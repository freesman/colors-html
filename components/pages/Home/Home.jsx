import { useCallback, useRef, useEffect } from 'react';
import ntc from 'ntc-hi-js';

import Header from 'components/Header';
import BtnCore from 'components/BtnCore';
import Footer from 'components/Footer';

import s from './Home.module.scss';

const copyColor = (btnEl, inputEl) => {
  navigator.clipboard.writeText(inputEl.current.value);
  btnEl.classList.add('active');
  setTimeout(() => btnEl.classList.remove('active'), 200);
};

const Home = () => {
  const colorInputEl = useRef(null);
  const nameInputEl = useRef(null);
  const sassInputEl = useRef(null);
  const cssInJsInputEl = useRef(null);
  const colorPreviewEl = useRef(null);

  const setColorPreview = useCallback(colorVal => {
    colorPreviewEl.current.style.backgroundColor = colorVal;
  }, []);

  const inputColorHandler = useCallback(() => {
    const { value } = colorInputEl.current;
    const val = value.toLowerCase();
    const colorVal = value.charAt(0) === '#' ? val : `#${val}`;
    const colorName = ntc.name(colorVal)[1];
    const isInvalid = colorName.includes('Invalid Color');
    const invalidTitle = 'invalid color';
    let colorVarName = colorName.replace(/\s/g, '');
    colorVarName = colorVarName.charAt(0).toLowerCase() + colorVarName.slice(1);
    nameInputEl.current.value = isInvalid ? invalidTitle : colorName;
    sassInputEl.current.value = isInvalid
      ? invalidTitle
      : `$${colorVarName}: ${colorVal};`;
    cssInJsInputEl.current.value = isInvalid
      ? invalidTitle
      : `${colorVarName}: '${colorVal}',`;
    setColorPreview(colorVal);
  }, [setColorPreview]);

  const setColorHandler = useCallback(async () => {
    const bufferVal = await navigator.clipboard.readText();
    const colorName = ntc.name(bufferVal)[1];
    const isInvalid = colorName.includes('Invalid Color');
    if (isInvalid) {
      return;
    }
    colorInputEl.current.value = bufferVal;
    inputColorHandler();
  }, [inputColorHandler]);

  useEffect(() => {
    window.addEventListener('focus', setColorHandler);
    return () => window.removeEventListener('focus', setColorHandler);
  }, [setColorHandler]);

  const clickSassCopyBtnHandler = useCallback(
    e => copyColor(e.currentTarget, sassInputEl),
    []
  );

  const clickCssInJsCopyBtnHandler = useCallback(
    e => copyColor(e.currentTarget, cssInJsInputEl),
    []
  );

  return (
    <>
      <Header />
      <div className={s.root}>
        <div className={s.fields}>
          <div className={s.field}>
            <div className={s.fieldTitle}>color</div>
            <input
              className={s.fieldInput}
              onInput={inputColorHandler}
              ref={colorInputEl}
            />
            <div className={s.colorPreview} ref={colorPreviewEl} />
          </div>

          <div className={s.field}>
            <div className={s.fieldTitle}>name</div>
            <input className={s.fieldInput} ref={nameInputEl} />
          </div>

          <div className={s.field}>
            <div className={s.fieldTitle}>sass</div>
            <input className={s.fieldInput} ref={sassInputEl} />
            <BtnCore
              className={s.copyBtn}
              clickHandler={clickSassCopyBtnHandler}
            />
          </div>

          <div className={s.field}>
            <div className={s.fieldTitle}>css in js</div>
            <input className={s.fieldInput} ref={cssInJsInputEl} />
            <BtnCore
              className={s.copyBtn}
              clickHandler={clickCssInJsCopyBtnHandler}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
