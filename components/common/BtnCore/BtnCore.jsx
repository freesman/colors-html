import { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import isExternalLink from 'utils/isExternalLink';

const BtnCore = ({ clickHandler, type, to, children, className, disabled }) => {
  const btn = useCallback(
    () => (
      <button
        type={type || 'button'}
        onClick={clickHandler}
        className={className}
        disabled={disabled}
      >
        {children}
      </button>
    ),
    [type, clickHandler, className, disabled, children]
  );

  const extLink = useCallback(
    () => (
      <a
        className={className}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    [to, children, className]
  );

  const routeLink = useCallback(
    () => (
      <Link href={to}>
        <a className={className}>{children}</a>
      </Link>
    ),
    [children, className, to]
  );

  const getBtn = useCallback(() => {
    if (to) {
      return isExternalLink(to) ? extLink() : routeLink();
    }
    return btn();
  }, [btn, extLink, routeLink, to]);

  return getBtn();
};

BtnCore.propTypes = {
  className: PropTypes.string,
  clickHandler: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.string,
  to: PropTypes.string,
  disabled: PropTypes.bool,
};

export default memo(BtnCore);
