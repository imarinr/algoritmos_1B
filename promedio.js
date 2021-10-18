function calcularPromedio() {
  // 1. Inicio
  // 2. Definir c1, c2, c3, c4, c5, promedio
  var c1;
  var c2;
  var c3;
  var c4;
  var c5;
  var promedio;
  //3. Hacer c1 = 10, c2 = 7.5, c3 = 9, c4 = 10, c5 = 10
  //3.1 Obtener el elemento input desde index.html
  var cajaDeTexto = document.getElementById("calificacion1");
  //3.2 obtener el contenido de texto del input (cajaDeTexto)
  var texto = cajaDeTexto.value;
  //3.3 convertir el contenido de texto a número
  c1 = parseFloat(texto);

  //para calificación 2
  cajaDeTexto = document.getElementById("calificacion2");
  texto = cajaDeTexto.value;
  c2 = parseFloat(texto);
  
  //para calificación 3
  cajaDeTexto = document.getElementById("calificacion3");
  texto = cajaDeTexto.value;
  c3 = parseFloat(texto);

  //para calificación 4
  cajaDeTexto = document.getElementById("calificacion4");
  texto = cajaDeTexto.value;
  c4 = parseFloat(texto);

  // para la calificacion 5
  cajaDeTexto = document.getElementById("calificacion5");
  texto = cajaDeTexto.value;
  c5 = parseFloat(texto);
  // 4. Hacer promedio = c1 + c2 + c3 + c4 + c5 / 5 = 46.5 / 5 = 9.3
  promedio = (c1 + c2 + c3 + c4 + c5) / 5;
  // 5. Imprimir promedio
  alert("Tu promedio es de: " + promedio);
  // 6. fin
}