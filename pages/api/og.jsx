/* eslint-disable @next/next/no-page-custom-font */
// /pages/api/og.tsx

import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

// Make sure the font exists in the specified path:
const font = fetch(
  new URL("../../assets/BalooThambi2-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler() {
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 52,
          fontFamily: '"Baloo Thambi 2", cursive',
          padding: 100,
          color: "white",
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        எவரும், அடிமையாக வைத்திருக்கப்படுதலோ அல்லது அடிமைப்பட்ட நிலையில்
        வைத்திருக்கப்படுதலோ ஆகாது; அடிமை நிலையும் அடிமை வியாபாரமும் அவற்றில்
        எல்லா வகைகளிலும் தடைசெய்யப்படுதல் வேண்டும்.
      </div>
    ),
    {
      width: 1080,
      height: 1080,
      fonts: [
        {
          name: "Baloo Thambi 2",
          data: fontData,
          style: "medium",
        },
      ],
    }
  );
}
