function Logger(){
console.log("inside")
    const colors = {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m"
      };

      for(const item in colors){
         // console.log(colors[item])
          Logger.prototype[item] = function(args){
            console.log(colors[item], args)
          }
      }
}

module.exports = Logger