import React, { useState } from "react";
import "./OrigImg.css";
function OrigImg() {
  // state for the files object set by handleInput
  const [originalFileList, setOrignalFileList] = useState();
  // state to set the file url set by handleInput
  const [originalFileURL, setOriginalFileURL] = useState();

  const returnFileSize = (number) => {
    if (number < 1024) {
      return number + "bytes";
    } else if (number >= 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + "KB";
    } else if (number >= 1048576) {
      return (number / 1048576).toFixed(1) + "MB";
    }
  };

  const handleOriginalInput = async (e) => {
    const file = e.target.files[0];
    setOrignalFileList(file);
    setOriginalFileURL({ file: URL.createObjectURL(file) });
  };

  return (
    <div className="origImg">
      <form action="post" encType="multipart/form-data">
        <h3>Original File Size Uploader</h3>
        <label htmlFor="origImg__input">
          {" "}
          Choose an Image to upload (.JPG, JPEG)
        </label>
        <input
          className="origImg__input"
          type="file"
          id="origImg__input"
          name="origImg__input"
          onChange={handleOriginalInput}
        />

        <div className="origImg__preview">
          <p>
            {!originalFileList
              ? "No file chosen for upload"
              : `File name ${
                  originalFileList.name
                }, file size >>> ${returnFileSize(originalFileList.size)}`}
          </p>
          {/* conditional rendering of the image */}
          {!originalFileURL ? null : (
            <img className="origImg__previewImg" src={originalFileURL.file} />
          )}
        </div>

        <div className="origImg__btn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default OrigImg;
