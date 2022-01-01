import * as React from 'react';
//import * as strings from 'TilesWebPartStrings';
import styles from './Tiles.module.scss';
import { ITileInfo, ITilesProps } from '.';
import { Tile } from './tile';
import { WebPartTitle } from '@pnp/spfx-controls-react/lib/WebPartTitle';
//import { Placeholder } from '@pnp/spfx-controls-react/lib/Placeholder';
//import { createstyles } from './ThemeVariantTypeStyle.styles';
//import { css } from "office-ui-fabric-react/utilities";

export class Tiles extends React.Component<ITilesProps, {}> {

  public render(): React.ReactElement<ITilesProps> {
    //const CustomStyles = createstyles(this.props.themeVariant);
    return (
      <div className={styles.tiles}>
        <WebPartTitle title={this.props.title} displayMode={this.props.displayMode} updateProperty={this.props.fUpdateProperty} />
        <Tile />
      </div>
    );
  }
}

