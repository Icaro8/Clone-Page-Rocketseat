import React from "react";

import styles from "./styles.module.scss";

export const ConfirmText: React.FC = () => {
  return (
    <div className={styles.containerContent}>
      <div>
        <h1>
          Inscrição <br />
          Confirmada !
        </h1>
      </div>
      <p>
        Siga os passos para ficar pro dentro de tudo e receber <br />
        os materias complementares:
      </p>
    </div>
  );
};
