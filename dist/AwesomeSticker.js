/**
 * Copyright (c) AnhPT, IT. And its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from "react";
import stylex from "@ladifire-opensource/stylex";
import { CometCard } from "./components-shared-version/Card";
import { Text } from "./components-shared-version/Text";
import { Sticker } from "./components/Sticker";
import { zaloSticker } from "./sticker-attributes/zalo";

// interface StickerType {
//     id: string;
//     frameCount: number;
//     frameRate: number;
//     framesPerCol: number;
//     framesPerRow: number;
//     spriteImg: string;
// }

const AwesomeSticker = () => {
  const stickers = [...zaloSticker];
  const groupArray = (array, total) => {
    return array.reduce(function (accumulator, _currentValue, currentIndex, array) {
      if (currentIndex % total === 0) accumulator.push(array.slice(currentIndex, currentIndex + total));
      return accumulator;
    }, []);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: stylex(styles.root)
  }, /*#__PURE__*/React.createElement(CometCard, {
    dropShadow: 1,
    background: "white",
    xstyle: styles.card
  }, /*#__PURE__*/React.createElement(Text, null, "Quby"), /*#__PURE__*/React.createElement("div", null, groupArray(stickers, 4)?.map((groupSticker, groupIndex) => {
    return /*#__PURE__*/React.createElement("div", {
      key: `group__${groupIndex}`,
      className: stylex(styles.list)
    }, groupSticker?.map((item, index) => {
      return /*#__PURE__*/React.createElement(Sticker, {
        key: `sticker__${index}`,
        frameCount: item?.frameCount,
        frameRate: item?.frameRate,
        framesPerCol: item?.framesPerCol,
        framesPerRow: item?.framesPerRow,
        spriteImg: item?.spriteImg
      });
    }));
  }))));
};
export default AwesomeSticker;
const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 850,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto"
  },
  card: {
    padding: 16
  },
  sticker: {
    width: "100%",
    height: "100%"
  },
  list: {
    display: "flex"
  }
});