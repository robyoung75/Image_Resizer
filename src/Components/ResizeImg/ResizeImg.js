import React, { useState } from "react";
import ImageResizer from "react-image-file-resizer";
import "./ResizeImg.css";

function ResizeImg() {
  const [fileName, setFileName] = useState();
  const [fileURI, setFileURI] = useState();
  const [fileURL, setFileURL] = useState();

  const returnFileSize = (fileSizeNum) => {
    if (fileSizeNum === null) {
      return "select a file to upload";
    } else if (fileSizeNum < 1024) {
      return fileSizeNum + "bytes";
    } else if (fileSizeNum >= 1024 && fileSizeNum < 1048576) {
      return (fileSizeNum / 1024).toFixed(1) + "KB";
    } else if (fileSizeNum >= 1048576) {
      return (fileSizeNum / 1048576).toFixed(1) + "MB";
    }
    console.log("I am the original file size", fileSizeNum);
  };

  const handleInput = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    ImageResizer.imageFileResizer(
      file,
      600,
      600,
      "JPEG",
      100,
      0,
      (uri) => {
        setFileURI(uri);
        setFileURL({ file: URL.createObjectURL(file) });
      },
      "blob",
      200,
      200
    );
    setFileName(file.name);
  };

  return (
    <div className="resizeImg">
      <form action="post" encType="multipart/form-data">
        <label htmlFor="file">Choose an Image to upload (.JPG, JPEG)</label>
        <input type="file" id="file" name="file" onChange={handleInput} />
        <div className="resizeImg__preview">
          <p>
            {!fileURI
              ? "No file chosen for upload"
              : `File name ${fileName}, file size >>> ${returnFileSize(
                  fileURI.size
                )}`}
          </p>
          {/* conditional rendering of the image */}
          {!fileURL ? null : (
            <img className="resizeImg__previewImg" src={fileURL.file} />
          )}
        </div>

        <div className="resizeImg__btn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ResizeImg;
