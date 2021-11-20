const Logger = require("./logger");
const logger = require("./logger")

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

  describe("Logger", ()=>{
      it("should print in black", ()=>{
        //arrange 
        const log = new Logger();
          const message = "hey";
          const mock = jest.spyOn(console, "log")
          mock.mockImplementation(()=>{})
        //act 
          log.black(message)
        //assert
        expect(mock).toBeCalledWith(colors.black, message);
        mock.mockRestore()  
      })

      it("should print in red", ()=>{
          //arrange
          const log = new Logger();
          const message = "hey"
          const mock = jest.spyOn(console, "log")
          mock.mockImplementation(()=>{})
          //act
          log.red(message)
          //assert
          expect(mock).toBeCalledWith(colors.red ,message)
          mock.mockRestore()
      })

      it("should print in white", ()=>{
          //arrange
          const log = new Logger();
          const mock = jest.spyOn(console, "log")
          const message = "hey"
          mock.mockImplementation(()=>{})
          //act
          log.green(message)
          //asset
          expect(mock).toBeCalledWith(colors.green, message)

      })

      it("should print in yellow", ()=>{
          const log = new Logger();
          const mock = jest.spyOn(console, "log")
          const message = "hey"
          mock.mockImplementation(()=>{})
          log.yellow(message)
          expect(mock),toBeCalledWith(colors.green, message)
      })
  })

  