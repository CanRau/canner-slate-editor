import React, {Component} from 'react';
import ToolbarIcon from '../toolbarIcon';
import alignDecorator from './alignDecorator';

@alignDecorator('align', 'AlignRight', 'right')
export default class AlignRight extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}