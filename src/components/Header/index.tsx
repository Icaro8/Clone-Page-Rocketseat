import React from "react";

import styles from "./styles.module.scss";
export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <img
        src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/61ea9e4cac3fe15beeb978dd_logo-show-me-the-code-rocketseat.svg"
        loading="lazy"
        alt=""
      />
    </header>
  );
};
