function myFunction() {
    var puzzle = {

        //this is where the rows are stored when entered -----> in puzzle.rows
        rows:[[],[],[],[],[],[],[],[],[]],

        //this is the operation insidel the puzzle object that creates the collums ---> accessed with puzzle.getcolums()
        getColums: function(){
            var x,y;
            var colums = [[],[],[],[],[],[],[],[],[]];
            for(x=0;x<=8;x++){ 
                for(y=0;y<=8;y++){
                    colums[x].push((this.rows[y])[x]);
                }
            } 
            return colums; //returns the full list of colums
        },
        //this is the operation that generates the squares of the puzzle =====
        squares:[]
    };
    for(x=0;x<=8;x++){

        for(y=0;y<=8;y++){
            puzzle.rows[x].push(document.getElementById((String(x)) + (String(y))).value);
            console.log(puzzle.getColums());
        }

    }

}
    