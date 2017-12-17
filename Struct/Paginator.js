class Paginator {
  /**
   * Paginate
   * @param {Array} array
   */
  constructor(array) {
    if (!Array.isArray(array)) throw new Error("INVALID_TYPE", typeof array)
    this.array = array
  }

  /**
   * Run paginate first
   * @param {Number} page
   * @returns {Array}
   */
  getPage(page = 0) {
    if (!this.pages) throw new Error("GETPAGE_BEFORE_PAGINATE")
    if (this.pages.length <= page) page = this.pages.length - 1
    return this.pages[page] ? this.pages[page] : []
  }

  /**
   * How many pages to split by.
   * @param {Number} perPage
   * @returns {Array}
   */
  paginate(perPage = 10) {
    this.pages = []
    for (let [i, a] of this.array.entries()) {
      let index = Math.floor(i / perPage);
      (!this.pages[index]) ? (this.pages[index] = []) : 0
      this.pages[index].push([i, a])
    }
    return this.pages
  }

  sort(sortFunction) {
    this.array = this.array.sort(sortFunction)
  }
}

module.exports = Paginator