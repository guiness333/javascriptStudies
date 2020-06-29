const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000);
})

/*async function executaPromise(){
    const reponse = await minhaPromise();
    console.log(reponse);
}*/

const executaPromise = async () => {
    console.log(await minhaPromise());
}
executaPromise();