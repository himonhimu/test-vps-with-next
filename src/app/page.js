import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Pm2 restart work (1)</h1>
        <h1>This page is deployed with Jenkins</h1>
        <h1>This page is deployed with Jenkins (2) wroking</h1>

   <h1>This page is deployed this is working fine</h1>
   <h1>This page is deployed with Jenkins on remote server (2)</h1>
        {/* <h1>This page is deployed with Jenkins</h1> */}
        <h3>Pm2 start with user change from root to himon</h3>
        <h3>Test working</h3>
      </main>
    </div>
  );
}
