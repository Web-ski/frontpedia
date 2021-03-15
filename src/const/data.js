export const url = "/data";

export const setUrl = (mainFolder, letterFolder, entryFolder, entryFile) => {
  if (letterFolder) {
    let firstLetter = letterFolder.slice("")[0].toUpperCase();
    let entryFolderName = entryFolder.toLowerCase();
    return `${mainFolder}/${firstLetter}/${entryFolderName}/${entryFile}`;
  }
};
