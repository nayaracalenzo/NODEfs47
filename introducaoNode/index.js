
// const soma = () => {
// }

// function somar (n1, n2) {
//   return n1 + n2
// }
// console.log(somar(2,3))

import os from 'os';
import fs from 'fs'
import chalk from 'chalk';

console.log('Sistema operacional', os.platform())
console.log('Usuario', os.userInfo())
console.log('Arquitetura', os.arch())

console.log(chalk.blue.bold("Texto azul"))

console.log(chalk.bgGreen('Texto de sucesso'))

fs.writeFileSync('mensagem.txt', 'Olá mundo!')
