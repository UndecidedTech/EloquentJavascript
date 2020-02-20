// Holy fuck this is barely legible...

function createBoard(width = 8, height = 8) {
  var board = "";
  for (let row = 0; row< height; row++) {
    for (let col = 0; col < width; col++) {
        let line = ""
      if (row % 2) {
        if (col % 2) {
          line += "#"

          if (col === (width - 1)){
            line += "\r\n"  
          }
            
        } else {
          line += " ";

          if (col === (width - 1))
            line += "\r\n"
        };
        board += line;
      } else {
        if (col % 2) {
          line += " "

          if (col === (width - 1))
            line += "\r\n"
        } else {
          line += "#";

          if (col === (width - 1))
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