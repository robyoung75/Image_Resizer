import React, { useState } from "react";
import ImageResizer from "react-image-file-resizer";

function ResizeImg() {
  // state for the files object set by handleInput
  const [file, setFile] = useState();
  const [fileURL, setFileURL] = useState();
  const [fileSize, setFileSize] = useState();
  const [fileName, setFileName] = useState();
  const [fileType, setFileType] = useState();
  const [reducedSizeURI, setReducedSizeURI] = useState();
  const [reducedSizeURL, setReducedSizeURL] = useState();
  const [reducedSize, setReducedSize] = useState();

  const returnFileSize = (number) => {
    if (number < 1024) {
      return number + "bytes";
    } else if (number >= 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + "KB";
    } else if (number >= 1048576) {
      return (number / 1048576).toFixed(1) + "MB";
    }
    console.log("I am the original file size", number);
  };

  const handleInput = async (e) => {
    e.preventDefault();
    setFileSize(e.target.files[0].size);
    setFileName(e.target.files[0].name);
    setFileType(e.target.files[0].type);

    const file = e.target.files[0];
    setFile(file);
    setFileURL({ file: URL.createObjectURL(file) });

    ImageResizer.imageFileResizer(
      file,
      600,
      600,
      "JPEG",
      100,
      0,
      (uri) => {
        setReducedSizeURL(
          { file: URL.createObjectURL(uri) },
          setReducedSizeURI(uri),
          setReducedSize(uri.size)
        );
      },
      "blob",
      200,
      200
    );
  };

  return (
    <div className="resizeImg">
      <form action="post" encType="multipart/form-data">
        <label htmlFor="file">Choose file to upload</label>
        <input type="file" id="file" name="file" onChange={handleInput} />
      </form>
      <div className="origImg__btn">
        <button>Submit</button>
      </div>
      {/* conditional rendering of the image */}
      {!reducedSizeURL ? null : (
        <div>
          <img src={reducedSizeURL.file} />
          <p>{returnFileSize(reducedSize)}</p>
        </div>
      )}
    </div>
  );
}

export default ResizeImg;
