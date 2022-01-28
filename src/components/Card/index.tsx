import React from "react";

import styles from "./styles.module.scss";

interface CardProps {
  text: string;
  number: string;
  icon: any;
}

export function Card({ text, number, icon }: CardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.containerNumber}>
        <p>{number}</p>
      </div>
      <div>{icon}</div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}
