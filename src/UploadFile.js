import React from 'react'
import { withRouter } from 'react-router-dom';
import axios from "axios";
class UploadFile extends React.Component
{
    constructor(props) {
        super(props);
        
      }

    upload(event)
    {
       // console.warn(event.target.files);
        const formData  = new FormData();
        const files     = event.target.files[0];
        formData.append('fileToUpload',files);
        fetch(' http://localhost/react/ReactApi.php',{
            method:"POST",
            body:formData
        }).then((resp)=>
        {
             resp.json().then((result)=>
             {
                console.warn("result",result);
               
               
             })   
        })
        this.props.history.push('/playfile');
        
    }

    render()
    {
        return(
            <div>
                <h1>File Upload</h1>
                <input type="file" name="fileToUpload" onChange={(event)=>this.upload(event)} />
            </div>
        )
    }
}


export default withRouter(UploadFile);