
import React, { Component } from 'react';

class SingleFileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            selectedFile : null,
        }
    }

    onChangeHandler=event=>{
        this.setState({
            selectedFile : event.target.files[0],
            loaded : 0,
        });
    }

    render() { 
        const {text} = this.props
        const {onChange} = this.props

        return (  
        <React.Fragment>
            <div className="py-4 px-4 file-upload d-flex justify-content-center align-items-center shadow rounded mb-4">
                <form>
                    <div className="">
                        <div className="text-center">
                            <i className="fas fa-file-upload upload-icon mb-2"></i>
                            <p className="mb-0 small">{text}</p>
                        </div>
                        <div class="form-group mt-4 w-75 mx-auto">
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={onChange} />
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
        );
    }
}
 
export default SingleFileUpload;