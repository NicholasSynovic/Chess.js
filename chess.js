const chessBoard = document.getElementById("chessBoard")
const chessBoardRows = document.getElementsByClassName("chessBoardRow")
const files = ["a", "b", "c", "d", "e", "f", "g", "h"]

let boardState = null

function getFIDEInitialBoardState() {
    var request = new XMLHttpRequest()
    // Synchronously sends the request
    request.open('GET', 'https://nicholassynovic.github.io/Chess.js/files/fide.json', false)
    request.send()
    return JSON.parse(request.response)
}

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
 * Takes a board state and adds the pieces to the board
 * @param {JSON} boardState
 */
function placePieces(boardState) {
    boardState = boardState[0]
    for (file in boardState) {
        for (rank in boardState[file]) {
            const boardSquareClass = file + rank
            document.getElementsByClassName(boardSquareClass)[0].innerHTML = boardState[file][rank]["currentPiece"]
        }
    }
}


/**
 * Appends the board sqaures to the DOM
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
boardState = getFIDEInitialBoardState()
placePieces(boardState)
