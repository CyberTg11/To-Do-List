 const metn = document.getElementById('metn');
 const resm = document.getElementById('resm');
 const ferqliResm = document.getElementById('ferqliResm')
 const dobavit = document.getElementById('cenq');
 const duz1 = document.getElementById('duz1')
 const duz2 = document.getElementById('duz2')
 const ters1 = document.getElementById('ters1')
 const ters2 = document.getElementById('ters2')
 

 metn.addEventListener('input', function() {
     if (metn.value.trim() !== '') {
        resm.style.display = 'block';
     } else {
        resm.style.display = 'none';
     }
 });
 metn.addEventListener('input', function() {
     if (metn.value.trim() !== '') {
         resm.style.display = 'block';
         ferqliResm.style,display = 'block'
     } else {
         resm.style.display = 'none';
         ferqliResm.style.display = 'none'
     }
 });

 ferqliResm.addEventListener('click', function() {
     metn.value = '';
     ferqliResm.style.display = 'none';
     resm.style.display = 'none';
 });

 resm.addEventListener('mouseover', function() {
    if(metn.value.trim()!== '')
    ferqliResm.style.display = 'block';
});

ferqliResm.addEventListener('mouseout', function() {
    ferqliResm.style.display = 'none';
});
duz1.addEventListener('mouseover', function() {
    duz2.style.display = 'block';
});
duz2.addEventListener('mouseout', function() {
    duz2.style.display = 'none'; 
});


const list = document.getElementById('list');
let calculate = 0

document.getElementById('cenq').addEventListener('click', function() {
    resm.style.display = 'none';
    ferqliResm.style.display = 'none'
    List();
});



function List() {
    if (metn.value.trim() !== '') {
        const yeniLi = document.createElement('li');
        list.classList.add('task')//////////////////////////////
        calculate++;
        yeniLi.textContent = metn.value;
        metn.value = '';
        const yeniResim = document.createElement('img');
        yeniResim.src = './img/Group 77.svg'
        const newResim = document.createElement('img')
        newResim.src = './img/Group 70.svg'
        newResim.style.display = 'none'
        yeniLi.appendChild(yeniResim);
        yeniLi.appendChild(newResim);
        list.appendChild(yeniLi);
        yeniResim.addEventListener('mouseover', function() {
            newResim.style.display = 'inline';
            yeniResim.style.display = 'none'
        });
        newResim.addEventListener('mouseout', function() {
            newResim.style.display = 'none';
            yeniResim.style.display = 'inline'
        });
        newResim.addEventListener('click', function() {
            list.removeChild(yeniLi);
        });
        
    }          

}
       


let artma = true;
function Sorting(){
    let listElemenleri = Array.from(list.getElementsByTagName('li'));
    if(artma){
        listElemenleri.sort((a,b) => a.textContent.localeCompare(b.textContent))
        artma = false;
    }
    else{
        listElemenleri.sort((a,b) => b.textContent.localeCompare(a.textContent))
        artma = true;
    }
    list.innerHTML = '';
    listElemenleri.forEach(element => list.appendChild(element))
    duz2.id = artma ? 'duz2' : 'duz1';

}
document.getElementById('duz2').addEventListener('click', function() {
    ters1.style.display = 'block'
    ters2.style.display = 'none'
    duz1.style.display = 'none'
    duz2.style.display = 'none'
    
});

document.getElementById('duz2').addEventListener('click', function() {
    Sorting();
});

document.getElementById('ters2').addEventListener('click', function() {
    duz1.style.display = 'block'
    duz2.style.display = 'none'
    ters2.style.display = 'none'
    ters1.style.display = 'none'
    
});
document.getElementById('ters2').addEventListener('click', function() {
    Sorting();

});
ters1.addEventListener('mouseover', function() {
    ters2.style.display = 'block';
    duz1.style.display = 'none';
    duz1.style.display = 'none'
});
ters2.addEventListener('mouseout', function() {
    ters2.style.display = 'none'; 
});

