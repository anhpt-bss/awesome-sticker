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

const stickers = [...zaloSticker];

const AwsSticker = ({ stickerId }) => {
  const [stickerItem, setstickerItem] = React.useState()

  React.useEffect(() => {
    if(stickerId) {
        setstickerItem(stickers?.find((item) => item?.id === stickerId))
    }
  }, [stickerId])
  
  return (
    <div className={stylex(styles.root)}>
      {stickerItem && (
          <Sticker
            frameCount={stickerItem?.frameCount}
            frameRate={stickerItem?.frameRate}
            framesPerCol={stickerItem?.framesPerCol}
            framesPerRow={stickerItem?.framesPerRow}
            spriteImg={stickerItem?.spriteImg}
          />
        )}
    </div>
  );
};

export default AwsSticker;

const styles = stylex.create({
  root: {
    display: "block",
  },
});
