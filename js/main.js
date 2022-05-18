//Chiediamo i dati
const inputKm = prompt("Quanti chilometri dovrai percorrere?")
const inputAge = prompt("Inserisci la tua età")

//Logica sconto
if(inputAge > 65){ 
    OutputPrice = inputKm * 0.126
    console.log("sconto over 65 applicato")
}
else if(inputAge < 18){
    OutputPrice = inputKm * 0.168
    console.log("sconto under 18 applicato")
}
else{
    OutputPrice = inputKm * 0.21
    console.log("nessuno sconto")
}
//output
const outputJS = document.getElementById("outputHTML")
outputJS.innerHTML = `<h1>
                    km: ${inputKm} </br>
                    età: ${inputAge} </br>
                    prezzo: ${OutputPrice.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                    </h1>`