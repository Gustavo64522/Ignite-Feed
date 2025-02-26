/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [applauseCount, setApplauseCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleApplauseComment() {
    setApplauseCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/54072507?v=4"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Andrade</strong>
              <time
                title="20 de Fevereiro às 16:16"
                dateTime="2025-02-20 16:16:0"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleApplauseComment}>
            <ThumbsUp />
            Aplaudir
            <span>{applauseCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
