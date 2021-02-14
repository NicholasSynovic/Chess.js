const chessBoard = document.getElementById("chessBoard")
const chessBoardRows = document.getElementsByClassName("chessBoardRow")
const files = ["a", "b", "c", "d", "e", "f", "g", "h"]

function makeBoard() {
    for (rowCount = 0; rowCount < 8; rowCount++) {
        var chessBoardRow = document.createElement("tr")
        chessBoardRow.className = "chessBoardRow"
        chessBoard.append(chessBoardRow)
    }

    for (index = 0; index < chessBoardRows.length; index++) {
        if (index % 2 == 0) {
            _chessBoardSquareAdder(chessBoardRows[index], "brownSquare", "greySquare", index)
        }
        else {
            _chessBoardSquareAdder(chessBoardRows[index], "greySquare", "brownSquare", index)
        }
    }
}

/**
 *
 * @param {Node} rankNode
 * @param {String} startingColorID
 * @param {String} nextColorID
 * @param {Number} rank
 */
function _chessBoardSquareAdder(rankNode, startingColorID, nextColorID, rank) {
    for (pieceCount = 0; pieceCount < 8; pieceCount++) {
        var piece = document.createElement("td")
        if (pieceCount % 2 == 0) {
            piece.id = startingColorID
        }
        else {
            piece.id = nextColorID
        }
        piece.className = files[pieceCount] + rank
        rankNode.appendChild(piece)
    }
}

makeBoard()
