class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = Array.from({ length: 9}, () => new Set());
        const colum = Array.from({ length: 9}, () => new Set());
        const box = Array.from({ length: 9}, () => new Set());
        
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9 ; j++){
                let k = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                if(board[i][j] === "."){
                    continue
                }
                if(row[i].has(board[i][j]) || colum[j].has(board[i][j]) || box[k].has(board[i][j])){
                    return false
                }
                row[i].add(board[i][j])
                colum[j].add(board[i][j])
                box[k].add(board[i][j])
            }
        }
        
        return true
    }
}