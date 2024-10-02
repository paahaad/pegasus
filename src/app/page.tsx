import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="dark flex justify-center items-center h-screen">
        <div className="pb-18 font-bold text-3xl ">
          Welcome to Pegasus Wallet
        </div>
      </div>
    </NextUIProvider>
  );
}
