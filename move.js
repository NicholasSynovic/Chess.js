function removePotentialMoves(boardState) {
    boardState = boardState[0]
    for (file in boardState) {
        for (rank in boardState[file]) {
            if (boardState[file][rank]["currentPiece"] == "○" || boardState[file][rank]["currentPiece"] == "●") {
                boardState[file][rank]["currentPiece"] = ""
            }
        }
    }
}

/**
 * Displays the availible moves a pawn can make on the board
 * @param {JSON} boardState
 * @param {Pawn} pawn
 * @param {String} coordinates
 */
function showPotentialMoves_Pawn(boardState, pawn, coordinates) {
    const splitCoordinates = coordinates.split("")
    const originalRank = splitCoordinates[1]
    const originalFile = splitCoordinates[0]
    if (pawn == whitePawn) {
        // Move up (6 to 0)
        if (boardState[0][originalFile][originalRank - 1]["currentPiece"] == "") {
            boardState[0][originalFile][originalRank - 1]["currentPiece"] = "○"
            placePieces(boardState)
        }
        // Take diagnol
    }
    else {
        // Move down (1 to 7)
        // Take diagnol
        return NaN
    }
}

function _initialMove

console.log(boardState)
