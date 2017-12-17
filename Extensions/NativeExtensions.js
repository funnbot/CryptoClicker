Object.defineProperties(String.prototype, {
  log: {
    value: function () {
      console.log(this)
      return this.toString()
    },
  },
  /**
   * Markdown Bold a string.
   * @return {String}
   */
  bold: {
    value: function () {
      return ("**" + this + "**").toString()
    }
  },
  unindent: {
    value: function () {
      const lines = this.split("\n").filter(l => l)
      const base = lines[0].match(/^\s*/)
      return lines.map(l => l.replace(base, "")).join("\n")
    }
  },
  contains: {
    value: function (...texts) {
      for (let t of texts)
        if (this.includes(t)) return true
    }
  }
})

Object.defineProperties(Array.prototype, {
  center: {
    value: function () {
      let maxlength = 0
      let result = ""
      for (let val of this) {
        if (typeof val !== "string") throw new Error("All values must be strings")
        if (val.length > maxlength) maxlength = val.length
      }
      for (let val of this) {
        if (maxlength > val.length) {
          let a = maxlength / 2
          let b = a - (val.length / 2)
          result += `${" ".repeat(b)}${val}\n`
        } else result += val + "\n"
      }
      return result
    }
  }
})

function typeof2(value) {
  return value instanceof Array ? "array" : typeof value
}

function timeoutGlobal(time = 1000) {
  return new Promise(res => setTimeout(res, time))
}

Object.defineProperties(global, {
  typeof2: {
    value: typeof2
  },
  timeout: {
    value: timeoutGlobal
  }
})