class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }
  static titleize(string) {
    const exclude = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const stringArray = string.split(" ");
    return stringArray.map((word, i) => {
      return exclude.includes(word) && i!==0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" ");
  }
}
