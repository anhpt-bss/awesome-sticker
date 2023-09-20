/**
 * Copyright (c) AnhPT, IT. And its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import stylex from '@ladifire-opensource/stylex';
import { CometAspectRatioContainer } from "containers/components/CometAspectRatioContainer";
import { CometAnimatedSticker } from "containers/components/CometAnimatedSticker";
const styles = stylex.create({
  root: {
    width: 80,
    height: 80
  },
  sticker: {
    width: '100%',
    height: '100%'
  }
});

// interface Props {
//     frameCount: number;
//     frameRate: number;
//     framesPerCol: number;
//     framesPerRow: number;
//     spriteImg: string;
// }

export const Sticker = props => {
  const {
    frameCount,
    frameRate,
    framesPerCol,
    framesPerRow,
    spriteImg
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: stylex(styles.root)
  }, /*#__PURE__*/React.createElement(CometAspectRatioContainer, {
    aspectRatio: 1
  }, /*#__PURE__*/React.createElement(CometAnimatedSticker, {
    animationTriggers: {
      hover: true,
      load: false
    },
    cursorEnabled: true,
    frameCount: frameCount,
    frameRate: frameRate,
    framesPerCol: framesPerCol,
    framesPerRow: framesPerRow,
    overlayEnabled: true,
    showFocusOverlay: true,
    showHoverOverlay: true,
    uri: spriteImg,
    xstyle: styles.sticker
  })));
};