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
                    
            console.log(squares);      
        }

    };
    
    
    // var rows = [["","6","","1","","8","","3",""],["","","3","","6","","9","5",""],["4","","","","2","","","","6"],["7","","","","4"],[],[],[],[],[]];  //puzzle.getRows();
    var colums = [[],[],[],[],[],[],[],[],[]]; //puzzle.getSquares();
    var squares = [[],[],[],[],[],[],[],[],[]]; //puzzle.getSquares();
    
    for(x=0;x<=8;x++){
        puzzle.getRows()[x]

    }
    console.log(rows + " colums -----> " + colums + " squares -----> " + squares);

}