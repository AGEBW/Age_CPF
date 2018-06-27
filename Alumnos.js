
function Alumnos(){
    var fs = require('fs');

    student= new Array ();
    fs.readFile('alumnos.json',  (err, data)=> {
        if (err) throw err;
        student = JSON.parse(data);
        student.forEach(alumno => {
            console.log(alumno);
        });
       
    });
}

module.exports=Alumnos;


