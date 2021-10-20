const os = require('os')

console.log("tutaj są informacje o twoim komputerze")
console.log("architektura :" + os.arch())
console.log("wolna mapięć :" + Math.floor(os.freemem()/1000000000) + " gigabajtów")
console.log("folder główny :" + os.homedir())
console.log("imię hosta :" + os.hostname())
console.log("platforma :" + os.platform())
console.log("wersja :" + os.release())
console.log("ilość pamięci :" + Math.floor(os.totalmem()/1000000000) + " gigabajtów")
console.log("typ systemu :" + os.type())
console.log("czas użytku :" + Math.floor(os.uptime()/60/60) + " godzin")

