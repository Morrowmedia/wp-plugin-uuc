import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class SettingEditor extends Component {

    render(){
        return(
            <p>
                <Editor
                    // editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                />
            </p>
        );
    }
}

// SettingNumber.propTypes = {
//     label: PropTypes.string,
//     value: PropTypes.string,
//     name: PropTypes.string,
//     onUpdate: PropTypes.func
// };