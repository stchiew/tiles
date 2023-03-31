import * as React from "react";
import styles from "./Tiles.module.scss";
import { ITilesProps } from "./ITilesProps";
import { escape } from "@microsoft/sp-lodash-subset";

export const Tiles: React.FunctionComponent<ITilesProps> = (props) => {

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
        <h3>Welcome to Tiles!</h3>
        <p>
          This is an agile project, where minimal updates are applied
          progressively to achieve the Tiles webpart implementation.
        </p>
        <ul>
          <li>Added pages to property pane using weppart information pane</li>
          <li>This is now a functional component</li>
        </ul>
      </div>
    </section>
  );
}
