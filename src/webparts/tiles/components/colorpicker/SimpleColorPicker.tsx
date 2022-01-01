import * as React from 'react';
import { ISimpleColorPickerProps } from './ISimpleColorPickerProps';
import { ISimpleColorPickerState } from './ISimpleColorPickerState';

export class SimpleColorPicker extends React.Component<ISimpleColorPickerProps, ISimpleColorPickerState> {
  constructor(props: any) {
    super(props);
    this.state = { val: '#efefef' };
  }
  private handleChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    (async () => {
      this.setState({ val: value });
      this.props.onChange(this.state.val);
    })();
  }
  public render(): React.ReactElement<ISimpleColorPickerProps> {
    return (
      <div>
        <input
          onChange={this.handleChange}
          type='color'
          value={this.state.val}
        />
      </div>
    );
  }
}