const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amount = document.getElementById('amount');
const rate = document.getElementById('rate');
const convertButton = document.getElementById('convert-button');
const exchangeBtn = document.getElementById("exchangeBtn")
const api = "https://api.freecurrencyapi.com/v1/latest"
const apiKey = "fca_live_PvewsGUNJt4UHatPckxlOGVRT8yqTnVSCHyReODI"
let currencyData;

const func = async () => {
    try {
        const response = await fetch(`${api}?apikey=${apiKey}`);
        const data = await response.json();
        currencyData = data.data
    } catch (error) {
        console.log(error, "error");
    }
}

func()

exchangeBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let to = toCurrency.value
    toCurrency.value = fromCurrency.value
    fromCurrency.value = to
})

convertButton.addEventListener('click', (e) => {
    e.preventDefault()
    const input = +amount.value
    const selectOne = fromCurrency.value
    const selectTwo = toCurrency.value

    if (isNaN(input) || input <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    if (!selectOne || !selectTwo) {
        alert("Please choose both currencies.");
        return;
    }

    const changeCurrency = (input / currencyData[selectOne]) * currencyData[selectTwo]
    rate.innerHTML = +changeCurrency.toFixed(2)
    console.log(changeCurrency);

})


