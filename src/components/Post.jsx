import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/54072507?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Gustavo Andrade</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="20 de Fevereiro às 16:16" dateTime="2025-02-20 16:16:0">
          Publicado há 1hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
