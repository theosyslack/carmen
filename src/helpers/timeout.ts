export const createTimeout = (duration = 30000) =>
  new Promise((resolve, reject) => {
    let timeout = setTimeout(() => {
      clearTimeout(timeout);
      reject("Timed out after " + duration / 1000 + "seconds.");
    }, duration);
  });
