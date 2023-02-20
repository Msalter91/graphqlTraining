const serverUrl = 'http://localhost:9000/'

async function getGreetingText() {
    const response = await fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query:`
              query{
                greeting
              }`
        }),

    })

    const { data } = await response.json();
    return data

}

getGreetingText()

const element = document.getElementById('greeting')
element.textContent = 'Loading'
element.textContent = getGreetingText().then((data) => {
    element.textContent = data.greeting
})

