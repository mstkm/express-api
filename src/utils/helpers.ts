import fs from "fs/promises";

export const getWIB = (): Date => {
  const localDate = new Date();
  const jakartaTimezoneOffset = 7 * 60; // Jakarta is UTC+7
  const jakartaDate = new Date(
    localDate.getTime() + jakartaTimezoneOffset * 60 * 1000
  );

  return jakartaDate;
};

export const deleteFile = async (filePath: string) => {
  try {
    await fs.unlink(filePath);
  } catch (err) {
    console.error('Delete file is failed:', err);
  }
}