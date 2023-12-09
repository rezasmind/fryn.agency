import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";

import "../styles/burger.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
};

export default MyApp;
