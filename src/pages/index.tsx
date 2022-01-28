import type { NextPage } from "next";
import Head from "next/head";
import { SiDiscord } from "react-icons/si";
import { BsCalendarCheckFill, BsFillCameraVideoFill } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";

import { Header } from "../components/Header";
import { ConfirmText } from "../components/ConfirmText";
import LinkShare from "../components/LinkShare";
import { Card } from "../components/Card";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Icaro Vieira</title>
      </Head>
      <Header />
      <div className={styles.containerContent}>
        <div className={styles.containerRow}>
          <div className={styles.containerColumn}>
            <ConfirmText />
            <LinkShare />
          </div>
          <div className={styles.columnCard}>
            <Card
              icon={<SiDiscord />}
              number="01"
              text="Entre na comunidade da Rocketseat no Disord"
            />
            <Card
              icon={<BsCalendarCheckFill />}
              number="02"
              text="Salve em  sua agenda a data de estreia do reality"
            />
            <Card
              icon={<AiOutlineUserAdd />}
              number="03"
              text="Candidate-se para participar presencialmente - 8 vagas disponíveis"
            />
            <Card
              icon={<BsFillCameraVideoFill />}
              number="04"
              text="Inscreva-se no Launch2022 - Evento Online e Gratuito que vai impulsinonar sua carreira"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
