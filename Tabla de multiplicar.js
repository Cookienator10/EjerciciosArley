function tabla(){
    let numero = 70;
    let mostrar = ``;
    for (let i = 1; i <= 47; i++) {
        mostrar += `${i} x ${numero} ${i * numero}\n`
    } return mostrar
}
console.log(tabla());
