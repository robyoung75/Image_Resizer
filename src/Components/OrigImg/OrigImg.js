import React, { useState } from "react";

function OrigImg() {
  // state for the files object set by handleInput
  const [fileList, setFileList] = useState();
  // state to set the file url set by handleInput
  const [fileURL, setFileURL] = useState();

  function handleInput(event) {
    let filesToUpload = event.target.files[0]; // var for event files is an array...
    console.log(filesToUpload); // logs file object
    setFileList(filesToUpload); // set state to file object
    // create a URL for the file and set state
    setFileURL({ file: URL.createObjectURL(filesToUpload) });
  }

  return (
    <div className="origImg">
      <form action="post" encType="multipart/form-data">
        <label htmlFor="file">Choose file to upload</label>
        <input type="file" id="file" name="file" onChange={handleInput} />
      </form>
      <div className="origImg__btn">
        <button>Submit</button>
      </div>
      {/* conditional rendering of the image */}
      {!fileURL ? null : <img src={fileURL.file} />}
    </div>
  );
}

export default OrigImg;
