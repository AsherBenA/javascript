const paragrafos = document.querySelector('.paragrafo')
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backGroudBody= estilosBody.backgroundColor;

for(let p of ps){
    p.style.backgroundColor=backGroudBody;
    p.style.color = '#FFFFFF'
}



