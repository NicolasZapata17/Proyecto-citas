function mostrarHora (){
    var espacio = document.getElementById("reloj");
    
    let horaactual = new Date()

    var segundo = horaactual.getSeconds();
    var minutis= horaactual.getMinutes();
    var horas=horaactual.getHours();
    var horafinal = horas + ":" + minutis+ ":" + segundo;

    espacio.innerHTML = horafinal;

    setTimeout(mostrarHora, 1000)
}

// $(document).ready( function () {
//     $('#myTable').DataTable();
// } );

// require( 'datatables.net-buttons/js/buttons.colVis.js' )(); //# Column visibility
// require( 'datatables.net-buttons/js/buttons.html5.js' )();  //# HTML 5 file export
// require( 'datatables.net-buttons/js/buttons.print.js' )();
