import { trim } from "lodash";

const data = require("./data.json");

/**
 * @export
 * @class SearchEngine
 */
export default class SearchEngine {
  /**
   * @static
   * @param {string} query
   * @param {string} [field="name"]
   * @return {array}
   * @memberof SearchEngine
   */
  static search(query, field = "name") {
    return trim(query).length > 0
      ? data.filter(item => item[field].indexOf(trim(query).toUpperCase()) > -1)
      : [];
  }

  /**
   * @static
   * @param {string} s
   * @param {string} t
   * @return {number}
   * @memberof SearchEngine
   */
  static levenshteinDistance(s, t) {
    if (!s.length) return t.length;
    if (!t.length) return s.length;

    return (
      Math.min(
        this.levenshteinDistance(s.substr(1), t) + 1,
        this.levenshteinDistance(t.substr(1), s) + 1,
        this.levenshteinDistance(s.substr(1), t.substr(1)) +
          (s[0] !== t[0] ? 1 : 0)
      ) + 1
    );
  }
}
