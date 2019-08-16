function solve() {
    var puzzle = {

        //this is where the rows are stored when entered -----> in puzzle.getRows()
        getRows: function(){
            var rows = [[],[],[],[],[],[],[],[],[]];
            for(x=0;x<=8;x++){
                for(y=0;y<=8;y++){
                    rows[x].push(document.getElementById((String(x)) + (String(y))).value);  
                }
            }
            return rows;
        },

        //this is the operation insidel the puzzle object that creates the collums ---> accessed with puzzle.getcolums()
        getColums: function(rows){
            var x,y;
            var colums = [[],[],[],[],[],[],[],[],[]];
            for(x=0;x<=8;x++){ 
                for(y=0;y<=8;y++){
                    colums[x].push((rows[y])[x]);
                }
            } 
            return colums; //returns the full list of colums
        },
        //this is the operation that generates the squares of the puzzle ---> in puzzle.getSquares() can be used in reverse
        getSquares: function(rows){
            var y,z;
            var squares = [[],[],[],[],[],[],[],[],[]];
            
            //for top row of boxes
            for(z=0;z<=2;z++){
                for(y=0;y<=2;y++){
                    squares[0].push((rows[z])[y]);
                }
            }
            for(z=0;z<=2;z++){
                for(y=3;y<=5;y++){
                    squares[1].push((rows[z])[y]);
                }
            }
            for(z=0;z<=2;z++){
                for(y=6;y<=8;y++){
                    squares[2].push((rows[z])[y]);
                }
            }

            //for second row of boxes
            for(z=3;z<=5;z++){
                for(y=0;y<=2;y++){
                    squares[3].push((rows[z])[y]);
                }
            }
            for(z=3;z<=5;z++){
                for(y=3;y<=5;y++){
                    squares[4].push((rows[z])[y]);
                }
            }
            for(z=3;z<=5;z++){
                for(y=6;y<=8;y++){
                    squares[5].push((rows[z])[y]);
                }
            }

            //third set of rows
            for(z=6;z<=8;z++){
                for(y=0;y<=2;y++){
                    squares[6].push((rows[z])[y]);
                }
            }
            for(z=6;z<=8;z++){
                for(y=3;y<=5;y++){
                    squares[7].push((rows[z])[y]);
                }
            }
            for(z=6;z<=8;z++){
                for(y=6;y<=8;y++){
                    squares[8].push((rows[z])[y]);
                }
            }
            return squares;     
        }

    };
    var rows = puzzle.getRows();
    var colums = puzzle.getColums(rows);
    var squares = puzzle.getSquares(rows);
    printOutTheArrays:{
        if(true==false){
            document.write("[")
            for(x=0;x<=8;x++){
                document.write("[")
                for(i of rows[x]){
                    document.write('"' + i + '",');
                }
                document.write("],")
            }
            document.write("]")
            document.write("</br></br>")
            
            document.write("[")
            for(x=0;x<=8;x++){
                document.write("[")
                for(i of colums[x]){
                    document.write('"' + i + '",');
                }
                document.write("],")
            }
            document.write("]")
            document.write("</br></br>")
            
            
            document.write("[")
            for(x=0;x<=8;x++){
                document.write("[")
                for(i of squares[x]){
                    document.write('"' + i + '",');
                }
                document.write("],")
            }
            document.write("]")
        }
    } 
    
    //info about soduku number 20
    var rows = [["1","","5","","2","7","3","",""],["","8","","","","","","",""],["","7","","","","","","4","1"],["2","","","","3","","6","",""],["","","8","6","5","2","7","",""],["","","3","","8","","","","4"],["7","5","","","","","","2",""],["","","","","","","","8",""],["","","6","1","9","","4","","7"]]
    var colums = [["1","","","2","","","7","",""],["","8","7","","","","5","",""],["5","","","","8","3","","","6"],["","","","","6","","","","1"],["2","","","3","5","8","","","9"],["7","","","","2","","","",""],["3","","","6","7","","","","4"],["","","4","","","","2","8",""],["","","1","","","4","","","7"]] //puzzle.getSquares();
    var squares = [["1","","5","","8","","","7",""],["","2","7","","","","","",""],["3","","","","","","","4","1"],["2","","","","","8","","","3"],["","3","","6","5","2","","8",""],["6","","","7","","","","","4"],["7","5","","","","","","","6"],["","","","","","","1","9",""],["","2","","","8","","4","","7"]] //puzzle.getSquares();
    // var rows = puzzle.getRows();
    // var colums = puzzle.getColums(rows);
    // var squares = puzzle.getSquares(rows);
    var numbersNeeded = ["1","2","3","4","5","6","7","8","9"];
    var possitions = ["0","1","2","3","4","5","6","7","8"];
    // console.log(rows);
    // console.log(colums);
    // console.log(squares);
    
    function findColumn(positionOfCharacter){   //WORKS!
        return colums[positionOfCharacter]
    };
    function findSquare(positionOfCharacter,rowNumber){ //WORKS!
        if(rowNumber<=2){
            if(positionOfCharacter<=2){
                return squares[0]
            }
            else if(positionOfCharacter<=5){
                return squares[1]
            }
            else{
                return squares[2]
            }
        }
        else if(rowNumber<=5){
            if(positionOfCharacter<=2){
                return squares[3]
            }
            else if(positionOfCharacter<=5){
                return squares[4]
            }
            else{
                return squares[5]
            }

        }
        else{
            if(positionOfCharacter<=2){
                return squares[6]
            }
            else if(positionOfCharacter<=5){
                return squares[7]
            }
            else{
                return squares[8]
            }
        }
    }
    function searchRow(row){  //WORKS!
        var i;
        for(i=0;i<=8;i++){
            if(row[i] !== "notFound"){
                if(numbersNeeded.includes(row[i])==false){
                    return (i)
                }
                else if(i == 8){

                    return false;
                }
                else{}
                
            }else{}
        }
    }
    function findRowGivenSquare(positonOfCharacter,squareNumber){ //WORKS!!
        if(squareNumber <= 2 ){ //will be one of the first three rows
            if(positonOfCharacter <= 2){
                return rows[0];
            }
            else if(positonOfCharacter <=5){
                return rows[1];
            }
            else{
                return rows[2];
            }
        }
        if(squareNumber <= 5 ){ //will be one of the middle rows
            if(positonOfCharacter <= 2){
                return rows[3];
            }
            else if(positonOfCharacter <=5){
                return rows[4];
            }
            else{
                return rows[5];
            }
        }
        if(squareNumber <= 8 ){ //will be one of the middle rows
            if(positonOfCharacter <= 2){
                return rows[6];
            }
            else if(positonOfCharacter <=5){
                return rows[7];
            }
            else{
                return rows[8];
            }
        }
    }
    function findColumnGivenSquare(possitionOfCharacter,squareNumber){ //WORKS!!
        if([0,3,6].includes(squareNumber)){
            if([0,3,6].includes(possitionOfCharacter)){
                return colums[0];
            }
            else if([1,4,7].includes(possitionOfCharacter)){
                return colums[1];
            }
            else{
                return colums[2];
            }
        }
        else if([1,4,7].includes(squareNumber)){
            if([0,3,6].includes(possitionOfCharacter)){
                return colums[3];
            }
            else if([1,4,7].includes(possitionOfCharacter)){
                return colums[4];
            }
            else{
                return colums[5];
            }
        }
        else{
            if([0,3,6].includes(possitionOfCharacter)){
                return colums[6];
            }
            else if([1,4,7].includes(possitionOfCharacter)){
                return colums[7];
            }
            else{
                return colums[8];
            }
        }
    }
    function searchSquare(square){  //WORKS!
        var i;
        for(i=0;i<=8;i++){
            if(square[i] !== "checked"){
                if(numbersNeeded.includes(square[i])==false){
                    return (i)
                }
                else if(i == 8){
                    return false;
                }
                else{}
                
            }else if(i == 8){
                return false
            }else{}
        }
    }
    function makeRowsWithSquares(squares){
    }
    var attemtCounter = 0;
    var solved = false;
    // while(solved == false){ // this is the main body of the code
    // for(p=0;p<20;p++){
        if(true == false){//keeps the first method from running
            method1:{ //the simple method use to make easier sudoku later 
                colums = puzzle.getColums(rows);
                squares = puzzle.getSquares(rows)
                console.log("ON SECOND START ")
                console.log(rows);
                for(i=0;i<=8;i++){ //solves all rows that it can
                    var rowCopy = rows[i].slice();
                    var search = searchRow(rowCopy)
                    while (typeof search == 'number'){
                        var possition = searchRow(rowCopy)
                        var column = findColumn(search);
                        var square = findSquare(searchRow(rowCopy),i);
                        var possibelNums = numbersNeeded.slice();
                        var x;
                        for(x of rowCopy){  //removes nubers that cannot be the solution becasue they are part if the row
                            if(possibelNums.includes(x) == true){
                                var index = possibelNums.indexOf(x);
                                possibelNums.splice(index,1); 
                            }
                            
                        }
                        for(x of column){  //removes nubers that cannot be the solution becasue they are part if the collumn
                            if(possibelNums.includes(x) == true){
                                var index = possibelNums.indexOf(x);
                                possibelNums.splice(index,1); 
                            }
                            
                        }
                        for(x of square){  //removes nubers that cannot be the solution becasue they are part if the square
                            if(possibelNums.includes(x) == true){
                                var index = possibelNums.indexOf(x);
                                possibelNums.splice(index,1); 
                            }
                            
                        }
                        if (possibelNums.length == 1){
                            rows[i][possition] = possibelNums[0];
                            rowCopy[possition] = possibelNums[0];
                        }else{
                            rowCopy[possition] = "notFound";
                        }
                        search = searchRow(rowCopy);
                        
                    }
                }
            }
        }

        method2:{
            // for(x=1;x<=9;x++){// this loops through all the numbers to test through
                x = 5
                for(y=0;y<=8;y++){// loops through the boxes 
                    var possiblePos = "";
                    var square = squares[y].slice();
                    var search = searchSquare(square);
                    while(search !== false){
                        var row = findRowGivenSquare(search,y);
                        var column = findColumnGivenSquare(search,y);
                        search = searchSquare(square);
                        if(square.includes(String(x))){
                            square[search] = "checked";
                        }else if(column.includes(String(x))){
                            square[search] = "checked";
                        }else if(row.includes(String(x))){
                            square[search] = "checked";
                        }else{   
                            if(possiblePos == " "){
                                possiblePos = search;
                                square[search] = "checked"
                            }else{
                                possiblePos = "two values Were Found";
                                square[search] = "checked"
                            }
                        }
                    }
                    if(typeof(possiblePos) == "number"){
                        console.log(possiblePos);
                        console.log(column);
                        console.log(square);
                        squares[y][possiblePos] = x;
                    }
                    rows = 
                    columns = puzzle.getSquares(squares)
                    console.log(columns);
                }
            // }

        }
        numOfNum = 0
        for(a of rows){ //stores the total number of numbers as numOfNum
            for(b of a){
                if(numbersNeeded.includes(b) == true){
                    numOfNum += 1
                }
            }
        }
        //this if and else sets solved to true if the puzzle has been solved
        if(numOfNum == 81){
            solved = true;
        }
        else if (attemtCounter > 1000){
            solved = true;
        }
        else{
            solved = false
        }
        attemtCounter += 1 
        
    // } 
}