import { Header } from "./components/Header";

import styles from "./App.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside></aside>
        <main>POST</main>
      </div>
    </div>
  );
}
