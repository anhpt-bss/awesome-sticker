/**
 * Copyright (c) AnhPT, IT. And its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from "react";
import stylex from "@ladifire-opensource/stylex";

import { Sticker } from "./components/Sticker";
import { zaloSticker } from "./sticker-attributes/zalo";
import OutsideAlerter from "./components/OutsideAlerter";
import { StickerIcon } from "./assets";

const stickers = [...zaloSticker];

const AwesomeSticker = ({ onSelect }) => {
  const [togglePopover, settogglePopover] = React.useState(false);

  return (
    <div className={stylex(styles.root)}>
      <div
        className={`awesomeSticker__popoverContainer ${
          togglePopover ? "open" : "close"
        }`}
        style={{ width: 32, height: 32 }}
      >
        <div
          className="awesomeSticker__popoverContainer__button"
          style={{ width: 32, height: 32 }}
          onClick={() => settogglePopover(!togglePopover)}
        >
          <StickerIcon className='awesomeSticker__popoverContainer__button__icon' style={{ width: 32, height: 32 }} />
        </div>
        <OutsideAlerter onClickOutside={() => settogglePopover(false)}>
          <div
            className="awesomeSticker__popoverContainer__popover"
            style={{ position: "absolute", right: 0, bottom: 42, width: 350 }}
          >
            <div className={stylex(styles.stickerCard)}>
              <div className={stylex(styles.title)}>Quby</div>
              <div className={stylex(styles.stickerList)}>
                {stickers?.map((item, index) => {
                  return (
                    <Sticker
                      key={`sticker__${index}`}
                      frameCount={item?.frameCount}
                      frameRate={item?.frameRate}
                      framesPerCol={item?.framesPerCol}
                      framesPerRow={item?.framesPerRow}
                      spriteImg={item?.spriteImg}
                      onSelect={() => {
                        onSelect && onSelect(item?.id)
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </OutsideAlerter>
      </div>
    </div>
  );
};

export default AwesomeSticker;

const styles = stylex.create({
  root: {
   position: 'fixed',
   bottom: 20,
   right: 20,
  },
  stickerCard: {
    display: "block",
    maxHeight: 400,
    overflowY: "auto",
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "::-webkit-scrollbar": {
      display: "none",
    },
  },
  title: {
    fontSize: "16px",
    fontWeight: 500,
  },
  stickerList: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
});
