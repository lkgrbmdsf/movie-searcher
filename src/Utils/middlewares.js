export function convertMinutsToHours(num) {
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours}:${rminutes}`;
}

export function dateNormalizer(date) {
  const year = new Date(date).getFullYear();
  const month = new Date(date).toLocaleString("en-us", { month: "long" });
  const day = new Date(date).toLocaleString("en-us", { day: "numeric" });

  return `${month} ${
    day === 1
      ? day + "st"
      : day === 2
      ? day + "nd"
      : day === 3
      ? day + "rd"
      : day + "th"
  }, ${year}`;
}

export const BOOKMARKS_HANDLER = {
  addToBookmarks: (bookmarks, { id, title, backdrop_path }, callback) => {
    const temp = { id, title, backdrop_path, date: new Date() };

    const bookmarksStorage = [...bookmarks, temp];

    callback(bookmarksStorage);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarksStorage));
  },
  removeFromBookmarks: (id, bookmarks, callback) => {
    const filteredBkm = bookmarks.filter((bkm) => bkm.id !== id);
    callback(filteredBkm);

    localStorage.setItem("bookmarks", JSON.stringify(filteredBkm));
  },
};
