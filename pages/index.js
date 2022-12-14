import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
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
    </div>
  );
}
