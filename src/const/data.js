export const url = "/data";

export const setUrl = (mainFolder, letterFolder, entryFolder, entryFile) => {
  if (letterFolder) {
    let firstLetter = letterFolder.slice("")[0].toUpperCase();
    return `${mainFolder}/${firstLetter}/${entryFolder}/${entryFile}`;
  }
};
