const functions = require("firebase-functions");
const mkdirp = require("mkdirp-promise");
const AdmZip = require("adm-zip");
const LOCAL_TMP_FOLDER = "/tmp/";

/**
 * Compress javascript action handlers (Reactions)
 */
exports.default = functions.storage
  .object()
  .onChange(event => {
    const object = event.data;

    const filePath = object.name;
    const filePathSplit = filePath.split("/");
    const fileName = filePathSplit.pop();
    const fileNameSplit = fileName.split(".");
    fileNameSplit.pop();
    const baseFileName = fileNameSplit.join(".");
    const fileDir =
      filePathSplit.join("/") + (filePathSplit.length > 0 ? "/" : "");
    const ZipPath = `${fileDir}${baseFileName}.js`; //
    const tempLocalDir = `${LOCAL_TMP_FOLDER}${fileDir}`;
    const tempLocalSrcFile = `${tempLocalDir}${fileName}`; //
    const tempLocalDestFile = `${LOCAL_TMP_FOLDER}${ZipPath}`; //

    // Exit if this is a move or deletion event.
    if (object.resourceState === "not_exists") {
      console.log("This is a deletion event.");
      return;
    }

    // Create the temp directory where the storage file will be downloaded.
    return mkdirp(tempLocalDir).then(() => {
      // Download file from bucket.
      const bucket = functions.storage.bucket(object.bucket);
      return bucket
        .file(filePath)
        .download({
          destination: tempLocalSrcFile
        })
        .then(() => {
          console.log("The file has been downloaded to", tempLocalSrcFile);
          zip = new AdmZip();
          zip.addLocalFile("${tempLocalSrcFile}");

          zip.writeZip("${tempLocalDestFile}");
          console.log("compressed to", tempLocalDestFile);

          return bucket
            .upload(tempLocalDestFile, {
              destination: ZipPath
            })
            .then(() => {
              console.log("compressed file saved to", filePath);
            });
        });
    });
  });
