const blackRook = "♜"
const blackKnight = "♞"
const blackBishop = "♝"
const blackQueen = "♛"
const blackKing = "♚"
const blackPawn = "♟︎"
const whitePawn = "♙"
const whiteRook = "♖"
const whiteKnight = "♘"
const whiteBishop = "♗"
const whiteQueen = "♕"
const whiteKing = "♔"

class Bishop {
    constructor() {
        super(Piece)
        if (this.color == "white") {
            this.icon = whiteBishop
        }
        else {
            this.icon = blackBishop
        }
    }
}

class King {
    constructor() {
        super(Piece)
        if (this.color == "white") {
            this.icon = whiteKing
        }
        else {
            this.icon = blackKing
        }
    }
}

class Knight {
    constructor() {
        super(Piece)
        if (this.color == "white") {
            this.icon = whiteKnight
        }
        else {
            this.icon = blackKnight
        }
    }
}

class Pawn {
    constructor() {
        super(Piece)
        if (this.color == "white") {
            this.icon = whitePawn
        }
        else {
            this.icon = blackPawn
        }
    }
}

class Piece {
    /**
     *
     * @param {String} initialCoordinates
     * @param {String} color
     */
    constructor(initialCoordinates, color) {
        this.color = color
        this.captured = false
        this.capturedPieces = []
        this.currentCoordinates = initialCoordinates
        this.icon = "x"
        this.moveCount = 0
        this.numberOfPiecesTaken = 0
    }

    move(boardState, newCoordinates) {
        this.moveCount++
        newCoordinates = newCoordinates.split("")
        file = newCoordinates[0]
        rank = newCoordinates[1]
        boardState[0][file][rank]["currentPiece"] = this.icon
    }

    capture(boardState, newCoordinates) {
        this.moveCount++
        this.numberOfPiecesTaken++
        newCoordinates = newCoordinates.split("")
        file = newCoordinates[0]
        rank = newCoordinates[1]
        this.capturedPieces.push(boardState[0][file][rank]["currentPiece"])
        boardState[0][file][rank]["currentPiece"] = this.icon
    }
}

class Queen {
    constructor() {
        super(Piece)
        if (this.color == "white") {
            this.icon = whiteQueen
        }
        else {
            this.icon = blackQueen
        }
    }
}

class Bishop {
    constructor() {
        super(Piece)
        if (this.color == "white") {
            this.icon = whiteRook
        }
        else {
            this.icon = blackRook
        }
    }
}
