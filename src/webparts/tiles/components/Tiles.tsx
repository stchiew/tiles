import * as React from "react";
import styles from "./Tiles.module.scss";
import { ITilesProps } from "./ITilesProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default function Tiles(props: ITilesProps): JSX.Element {
  return (
    <section
      className={`${styles.tiles} ${props.hasTeamsContext ? styles.teams : ""}`}
    >
      <div className={styles.welcome}>
        <img
          alt=""
          src={
            props.isDarkTheme
              ? require("../assets/welcome-dark.png")
              : require("../assets/welcome-light.png")
          }
          className={styles.welcomeImage}
        />
        <h2>Well done, {escape(props.userDisplayName)}!</h2>
        <div>{props.environmentMessage}</div>
        <div>
          Web part property value: <strong>{escape(props.description)}</strong>
        </div>
      </div>
      <div>
        <h3>Welcome to Tiles Explorer!</h3>
        <p>
          This is an Explorer project,to explore web parts spfx development and
          GitHub actions for CI/CD.
        </p>
      </div>
    </section>
  );
}
