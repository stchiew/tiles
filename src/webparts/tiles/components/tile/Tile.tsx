//import { IReadonlyTheme } from '@microsoft/sp-component-base';
import * as React from 'react';
import { ITileProps } from './ITileProps';

export const Tile: React.FunctionComponent<ITileProps> = (props: ITileProps) => {
  // const { palette }: IReadonlyTheme = props.themeVariant;
  const tileStyle: React.CSSProperties = {};
  const icoStyle: React.CSSProperties = {};
  const tileFontSize: React.CSSProperties = {};
  const tileInnerStyle: React.CSSProperties = {};
  const fontInnerStyle: React.CSSProperties = {};

  if (props.staticWidth) { }

  return (
    <div>A Tile</div>
  );
};

Tile.defaultProps = {
  tileHeight: 1
};
