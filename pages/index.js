import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Layout.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Do The Stuff</title>
        <meta name="keywords" content="goals, goal, motivation, structure" />
      </Head>

      <h1>Welcome To Goals</h1>
    </div>
  );
}
