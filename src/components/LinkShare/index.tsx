import Link from "next/link";
import React from "react";

import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";

import styles from "./styles.module.scss";

const LinkShare: React.FC = () => {
  return (
    <div className={styles.container}>
      <h3>Hey dev, compartilhe com um amigo:</h3>
      <nav>
        <Link href="/">
          <a>
            <ImFacebook />
          </a>
        </Link>
        <Link href="/">
          <a>
            <FaLinkedinIn />
          </a>
        </Link>
        <Link href="/">
          <a>
            <BsTwitter />
          </a>
        </Link>
        <Link href="/">
          <a>
            <BsWhatsapp />
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default LinkShare;
