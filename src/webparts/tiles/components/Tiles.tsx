import * as React from "react";
import styles from "./Tiles.module.scss";
import { ITilesProps } from "./ITilesProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class Tiles extends React.Component<ITilesProps, {}> {
  public render(): React.ReactElement<ITilesProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    return (
      <section
        className={`${styles.tiles} ${hasTeamsContext ? styles.teams : ""}`}
      >
        <div className={styles.welcome}>
          <img
            alt=""
            src={
              isDarkTheme
                ? require("../assets/welcome-dark.png")
                : require("../assets/welcome-light.png")
            }
            className={styles.welcomeImage}
          />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>
            Web part property value: <strong>{escape(description)}</strong>
          </div>
        </div>
        <div>
          <h3>Welcome to Tiles!</h3>
          <p>
            This is an agile project, where minimal updates are applied
            progressively to achieve the Tiles webpart implementation.
          </p>
          <h4>Learn more about SPFx development:</h4>
          <ul className={styles.links}>
            <li>
              <a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">
                SharePoint Framework Overview
              </a>
            </li>
            <li>
              <a
                href="https://aka.ms/spfx-yeoman-graph"
                target="_blank"
                rel="noreferrer"
              >
                Use Microsoft Graph in your solution
              </a>
            </li>
            <li>
              <a
                href="https://aka.ms/spfx-yeoman-teams"
                target="_blank"
                rel="noreferrer"
              >
                Build for Microsoft Teams using SharePoint Framework
              </a>
            </li>
            <li>
              <a
                href="https://aka.ms/spfx-yeoman-viva"
                target="_blank"
                rel="noreferrer"
              >
                Build for Microsoft Viva Connections using SharePoint Framework
              </a>
            </li>
            <li>
              <a
                href="https://aka.ms/spfx-yeoman-store"
                target="_blank"
                rel="noreferrer"
              >
                Publish SharePoint Framework applications to the marketplace
              </a>
            </li>
            <li>
              <a
                href="https://aka.ms/spfx-yeoman-api"
                target="_blank"
                rel="noreferrer"
              >
                SharePoint Framework API reference
              </a>
            </li>
            <li>
              <a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">
                Microsoft 365 Developer Community
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
