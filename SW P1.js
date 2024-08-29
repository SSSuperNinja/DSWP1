function contarCaracteres(cadena) {
    const numeroDeCaracteres = cadena.length;
    return numeroDeCaracteres;
  }
  
  const texto = "Hola, mundo";
  const resultado = contarCaracteres(texto);
  console.log(`Cadena "${texto}" tiene ${resultado} caracteres.`);