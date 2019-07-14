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
        //this is the operation that generates the squares of the puzzle ---> in puzzle.getSquares()
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
    var rows = [["","6","","1","","8","","3",""],["","","3","","6","","9","5",""],["4","","","","2","","","","6"],["7","","","","4","","","","8"],["","3","5","7","","6","4","2",""],["6","","","","3","","","","7"],["1","","","5","","2","","","3"],["","4","6","","1","","2","",""],["","9","","","7","","","1",""]];
    var colums = [["","","4","7","","6","1","",""],["6","","","","3","","","4","9"],["","3","","","5","","","6",""],["1","","","","7","","5","",""],["","6","2","4","","3","","1","7"],["8","","","","6","","2","",""],["","9","","","4","","","2",""],["3","5","","","2","","","","1"],["","","6","8","","7","3","",""]]; //puzzle.getSquares();
    var squares = [["","6","","","","3","4","",""],["1","","8","","6","","","2",""],["","3","","9","5","","","","6"],["7","","","","3","5","6","",""],["","4","","7","","6","","3",""],["","","8","4","2","","","","7"],["1","","","","4","6","","9",""],["5","","2","","1","","","7",""],["","","3","2","","","","1",""]]; //puzzle.getSquares();
    // var rows = puzzle.getRows();
    // var colums = puzzle.getColums(rows);
    // var squares = puzzle.getSquares(rows);
    var numbersNeeded = ["1","2","3","4","5","6","7","8","9"];
    var possitions = ["0","1","2","3","4","5","6","7","8"];
    console.log(rows);
    console.log(colums);
    console.log(squares);
    
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
    function findRowGivenSquare(positonOfCharacter,squareNumber){
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
    var attemtCounter = 0;
    var solved = false;
    // while(solved == false){ // this is the main body of the code
        if(true == false){//keeps the first method from running
            method1:{ //the simple method use to make easier sudoku later 
                colums = puzzle.getColums(rows);
                squares = puzzle.getSquares(rows)
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
            for(i=1;i<=9;i++){// this loops through all the numbers to test through
                console.log(findRowGivenSquare(0,(i-1)));
            } 
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

    console.log(rows)
    
}
