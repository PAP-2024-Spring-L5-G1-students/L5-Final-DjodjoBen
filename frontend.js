async function getAll(){
    try {
        const response = await fetch("http://localhost:3000/all")
        const data = await response.json()
        console.log(data)
    } catch(err) {
        console.error(err)
    }
}


getAll()