var bodyDOM = document.querySelector('body');
(()=>{
const currentThemeColor = (localStorage.getItem('darkmode')=='true')?'theme-darkmode':'theme-lightmode' ;
if(currentThemeColor !== null){
    bodyDOM.classList.add(currentThemeColor);
    if (currentThemeColor==='theme-darkmode')
        document.querySelector(`#theme-darkmode`).classList.add('active');
}
})();

function switchColorTheme(){
    if(document.querySelector('#theme-darkmode').classList.contains('active')){
        bodyDOM.classList.remove('theme-darkmode');
        bodyDOM.classList.add('theme-lightmode');
        document.querySelector('#theme-darkmode').classList.remove('active');
        localStorage.setItem('darkmode','false');
    }else{
        bodyDOM.classList.add('theme-darkmode');
        bodyDOM.classList.remove('theme-lightmode');
        document.querySelector('#theme-darkmode').classList.add('active');
        localStorage.setItem('darkmode','true');
    }
}

(async () => { // add data
    const res = await (await fetch(`links.json`)).json();
    console.log(res);
    document.querySelector('#youtube-link').href = res.links.youtube;
    document.querySelector('#facebook-link').href = res.links.facebook;
    document.querySelector('#twitter-link').href = res.links.twitter;
    document.querySelector('#instagram-link').href = res.links.instagram;
})();