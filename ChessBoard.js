// Holy fuck this is barely legible...

function createBoard(width = 8, height = 8) {
  var board = "";
  for (let i = 0; i < height; i++) {
    for (let p = 0; p < width; p++) {
        let line = ""
      if (i % 2) {
        if (p % 2) {
          line += "#"

          if (p === (width - 1)){
            line += "\r\n"  
          }
            
        } else {
          line += " ";

          if (p === (width - 1))
            line += "\r\n"
        };
        board += line;
      } else {
        if (p % 2) {
          line += " "

          if (p === (width - 1))
            line += "\r\n"
        } else {
          line += "#";

          if (p === (width - 1))
            line += "\r\n"
        };
        board += line;
      }
    }
  }
  // console.log adds an unnecessary newline at the end
  process.stdout.write(board);
}

createBoard()