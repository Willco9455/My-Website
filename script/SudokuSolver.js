function myFunction() {
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
        getColums: function(){
            var x,y;
            var colums = [[],[],[],[],[],[],[],[],[]];
            for(x=0;x<=8;x++){ 
                for(y=0;y<=8;y++){
                    colums[x].push((this.getRows()[y])[x]);
                }
            } 
            return colums; //returns the full list of colums
        },
        //this is the operation that generates the squares of the puzzle ---> in puzzle.getSquares()
        getSquares: function(){
            var y,z;
            var squares = [[],[],[],[],[],[],[],[],[]];
            
            //for top row of boxes
            for(z=0;z<=2;z++){
                for(y=0;y<=2;y++){
                    squares[0].push((this.getRows()[z])[y]);
                }
            }
            for(z=0;z<=2;z++){
                for(y=3;y<=5;y++){
                    squares[1].push((this.getRows()[z])[y]);
                }
            }
            for(z=0;z<=2;z++){
                for(y=6;y<=8;y++){
                    squares[2].push((this.getRows()[z])[y]);
                }
            }

            //for second row of boxes
            for(z=3;z<=5;z++){
                for(y=0;y<=2;y++){
                    squares[3].push((this.getRows()[z])[y]);
                }
            }
            for(z=3;z<=5;z++){
                for(y=3;y<=5;y++){
                    squares[4].push((this.getRows()[z])[y]);
                }
            }
            for(z=3;z<=5;z++){
                for(y=6;y<=8;y++){
                    squares[5].push((this.getRows()[z])[y]);
                }
            }

            //third set of rows
            for(z=6;z<=8;z++){
                for(y=0;y<=2;y++){
                    squares[6].push((this.getRows()[z])[y]);
                }
            }
            for(z=6;z<=8;z++){
                for(y=3;y<=5;y++){
                    squares[7].push((this.getRows()[z])[y]);
                }
            }
            for(z=6;z<=8;z++){
                for(y=6;y<=8;y++){
                    squares[8].push((this.getRows()[z])[y]);
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
    var numbersNeeded = ["1","2","3","4","5","6","7","8","9"];
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
    function searchRow(rowNumber){  //WORKS!
        var i;
        for(i=0;i<=8;i++){
            if(numbersNeeded.includes(rows[rowNumber][i])==false){
                return (i)
            }
            else{
                continue;
            }
        }
    }


    rows[0][0] = "1";
    console.log(searchRow(0));
    var solved = false;
    // while(solved == false){
        
    // }
}
