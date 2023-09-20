function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Copyright (c) AnhPT, IT. And its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from "react";
import stylex from '@ladifire-opensource/stylex';

// NOTE: not available for shared version, only can use in internal of Ladifire
// import {LegacyHidden} from "./LegacyHidden";

const styles = stylex.create({
  root: {
    boxSizing: "border-box",
    position: "relative",
    zIndex: 0
  },
  hidden: {
    display: "none"
  }
});

// interface Props {
//   children?: any;
//   suppressHydrationWarning?: boolean;
//   testid?: string;
//   xstyle?: any;
//   hidden?: boolean;
// }

const BaseView = (props, ref) => {
  const {
    children,
    suppressHydrationWarning,
    testid,
    xstyle,
    hidden,
    ...otherProps
  } = props;
  const _isHidden = hidden === true;

  // This is not available for shared version, because we use React 17.x version
  // (must use custom build of React for using LegacyHidden)
  // return (
  //   <LegacyHidden
  //     htmlAttributes={Object.assign({}, otherProps, {
  //       className: stylex(styles.root, xstyle, _isHidden && styles.hidden)
  //     })}
  //     mode={_isHidden ? "hidden" : "visible"}
  //     ref={ref}
  //     suppressHydrationWarning={suppressHydrationWarning}
  //   >
  //     {children}
  //   </LegacyHidden>
  // );

  // This is for shared version
  return /*#__PURE__*/React.createElement("div", _extends({
    className: stylex(styles.root, xstyle),
    ref: ref
  }, otherProps), children);
};
const _BaseView = /*#__PURE__*/React.forwardRef(BaseView);
export { _BaseView as BaseView };