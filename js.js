const endURL = "https://retoolapi.dev/GJOGPN/data";

async function getData() {
    const response = await fetch(endURL); 
    const data = await response.json(); 
    console.log(data);
    return data;
}

