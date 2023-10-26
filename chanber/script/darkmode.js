const darkmode = document.querySelector('#dark-mode');
const bodyelt = document.querySelector("body");

darkmode.addEventListener('click',()=>{
    if (darkmode.textContent == 'DARK' ){
        document.documentElement.style.setProperty('--text-color', '#dda15e');        
        document.documentElement.style.setProperty('--background-color', 'black');    
        document.documentElement.style.setProperty('--hover-background-color', '#442211');    
        document.documentElement.style.setProperty('--hover-color', '#dda15e');                
        bodyelt.style.backgroundColor = 'black';
        darkmode.textContent = 'LIGHT'
    }
    else{
        document.documentElement.style.setProperty('--text-color', 'black');        
        document.documentElement.style.setProperty('--background-color', 'rgb(213, 202, 222)');        
        document.documentElement.style.setProperty('--hover-background-color', 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px');    
        document.documentElement.style.setProperty('--hover-color', 'black');        
        bodyelt.style.backgroundColor = '#fefae0';
        darkmode.textContent = 'DARK'
    }
})