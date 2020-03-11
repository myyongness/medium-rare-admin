import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { asField } from 'informed';

require('isomorphic-fetch');

class Uploader extends Component {
  static propTypes = {
    fieldApi: PropTypes.object.isRequired,
    fieldState: PropTypes.object.isRequired,
  };

  ref = null;

  onChange = e => {
    const files = this.ref.files;

    Object.values(files).map(async file => {
      const body = new window.FormData();
      body.append('file', file);
      const response = await fetch('http://localhost:3000/upload', {
        method: 'post',
        body,
      });
      console.log(response.status);

      if (response.status === 200) {
        const responseText = await response.text();
        this.props.fieldApi.setValue(responseText);
        this.ref.value = '';
        console.log('response', responseText);
      } else {
        console.log('error');
      }
    });
  };

  render = () => {
    const value = this.props.fieldState.value;
    return (
      <div>
        <input
          type="file"
          ref={ref => {
            this.ref = ref;
          }}
          onChange={this.onChange}
        />
        <img src={`http://localhost:3000/${value}`} />
      </div>
    );
  };
}

export default asField(Uploader);
