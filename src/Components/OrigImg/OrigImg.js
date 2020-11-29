import React, { useState } from "react";

function OrigImg() {
  // state for the files object set by handleInput
  const [originalFileList, setOrignalFileList] = useState();
  // state to set the file url set by handleInput
  const [originalFileURL, setOriginalFileURL] = useState();
  const [originalFileSize, setOriginalFileSize] = useState();
  const [originalFileName, setOriginalFileName] = useState();
  const [originalFileType, setOriginalFileType] = useState();

  const returnFileSize = (number) => {
    if (number < 1024) {
      return number + "bytes";
    } else if (number >= 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + "KB";
    } else if (number >= 1048576) {
      return (number / 1048576).toFixed(1) + "MB";
    }
  };

  const handleInput = async (e) => {
    e.preventDefault();
    setOriginalFileSize(e.target.files[0].size);
    setOriginalFileName(e.target.files[0].name);
    setOriginalFileType(e.target.files[0].type);
    const file = e.target.files[0];
    setOrignalFileList(file);
    setOriginalFileURL({ file: URL.createObjectURL(file) });
  };

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
      {!originalFileURL ? null : (
        <div>
          <img src={originalFileURL.file} width="600" height="auto"/>
          <p>{returnFileSize(originalFileSize)}</p>
        </div>
      )}
    </div>
  );
}

export default OrigImg;
