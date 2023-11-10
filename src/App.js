/**
 * Copyright (c) AnhPT, IT. And its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from "react";

import { AwesomeSticker, AwsSticker } from "./containers";

import "./index.css";

const App = () => {
  const [stickerId, setstickerId] = React.useState();

  const onSelectSticker = (stickerId) => {
    setstickerId(stickerId);
  };

  return (
    <>
      <AwesomeSticker onSelect={onSelectSticker} />
      <AwsSticker stickerId={stickerId} />
    </>
  );
};

export default App;
