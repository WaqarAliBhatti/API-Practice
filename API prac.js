document.querySelector('button').addEventListener('click',getFetch);

function getFetch(){
    const choice = document.querySelector('input').value;
    const url= 'https://api.nasa.gov/planetary/apod?api_key=mZdnhGGIllMxKb42KFIirIXQsf2u3iBbAf43r2J5'+choice;
    fetch(url)
    .then(res => res.json()) //parse response as JSOn
    .then(data=>{
        console.log(data);
        document.querySelector('img').src=data.hdurl;
        document.querySelector('h3').innerText=data.explanation;
    })
    .catch(err=>{
        console.log(`error ${err}`)
    })
}