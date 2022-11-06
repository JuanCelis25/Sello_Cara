/*
const Cra = document.getElementById('cara')
let sello = document.getElementById('sello')
let ganar = document.getElementById('ganar')
let perder = document.getElementById('perder')
let a = 1, b= 1, total = 0, i = 0;

Cra.addEventListener('click', ()=>{
    const apuesta = document.getElementById('apu').value;
apuesta = parseInt (apuesta);
    
    if (apuesta >= 50000 ) {
        alert(`Estas apostando mucho dinero`)
    } else {
        /*
        if (opci < 1000) {
            let aleatorio = Math.random()*2 +1;
            let money = aleatorio.toPrecision(1);
            if (money == 1) {
                a= a+1
                ganar.innerText= a;
                total = total + opci;
            } else  {
                b = b+1
                perder.innerText= b;
                total = total - opci;
            }
            i = a + b;
        } else {
            swal(`por favor ingresar un valo igual o mayor a 100`)
        }
    }
});*/

/*
sello.addEventListener('click', ()=>{
    
    if (opci >= 50000 ) {
        alert(`Estas apostando mucho dinero`)
    } else {
        
        if (opci < 1000) {
            let aleatorio = Math.random()*2 +1;
            let money = aleatorio.toPrecision(1);
            if (money == 2) {
                a= a+1
                ganar.innerText= a;
                total = total + opci;
            } else  {
                b = b+1
                perder.innerText= b;
                total = total - opci;
            }
            i = a + b;
        } else {
            swal(`por favor ingresar un valo igual o mayor a 100`)
        }
    }
});
terminar.addEventListener('click' , ()=>{
    if (total <= 0) {
        alert(`Gracias por jugar tu dinero total es de ${total}, y las veces que jugaste es de ${i} :(`)
    } else {
        alert(`Gracias por jugar tu dinero total es de ${total}, y las veces que jugaste es de ${i}, Es pero y vulvas pronto y como mucha suerte :3`) 
    }
})*/

const abrir = document.getElementById('moneda')
const dinero = document.getElementById('diner');
const cara = document.getElementById('button-addon1');
const sello = document.getElementById('button-addon2');
const gana= document.getElementById('ganar');
const pierde = document.getElementById('perder');
const intentos = document.getElementById('intento');
let a = 0, b = 0 , i = 0 , total = 0;
const termina = document.getElementById('terminarr');

termina.addEventListener('click', ()=>{
      if(total <0){
            alert(`Te amo, muchas gracias por jugar. El total de tu perdida es de: $ ${total}`)
            Swal.fire({title: `Te amo, muchas gracias por jugar` , text: `El total de tu perdida es de: $ ${total}`, icon:`error`  } );
           
      }else{
            alert(`Te amo, muchas gracias por jugar. El total es de: $ ${total}`)
            Swal.fire({title: `Te amo, muchas gracias por jugar` , text:`El total es de: $ ${total}` , icon:`success`}); 
      }
      window.location.reload(true);
})
cara.addEventListener('click', ()=>{
      let apuesta = document.getElementById('inputt').value;
      apuesta = parseFloat(apuesta)
      if (apuesta >= 1500000) {
        Swal.fire({title: `Valor muy alto a jugaaaar`});
        if(apuesta >= 1000){
            let aleatorio =  Math.random()*2 + 1;
            let money = aleatorio.toPrecision(1);
                i = a + b;  
                if(money == 1){    
                      gana.innerText= a
                      a= a+1
                      intentos.innerText = i;
                      abrir.classList.replace('moneda', 'moneda_show')
                      total = total + apuesta;
                      dinero.innerText = total; 
                      Swal.fire({title: `GANASTEEE`, text:`Salio CARA :333`, icon:`success`});
                }else if(money > 1 || money < 1){
                      b = b+1 
                      pierde.innerHTML=b;
                      intentos.innerHTML =i;
                      abrir.classList.replace('moneda', 'moneda_show')    
                      total = total - apuesta;
                      dinero.innerText = total; 
                      Swal.fire({title: `PERDISTEE`, text:`Salio SELLO :(((`, icon:`warning`});
                }
          }else{
                Swal.fire({title: `introducir un valor igual o mayor a 1000 Para poder jugar:33`, icon:`error`});
          }
      } else {
        if(apuesta >= 1000){
            let aleatorio =  Math.random()*2 + 1;
            let money = aleatorio.toPrecision(1);
                i = a + b;  
                if(money == 1){
                      gana.innerText= a
                      a= a+1
                      intentos.innerText = i;
                      abrir.classList.replace('moneda', 'moneda_show')
                      total = total + apuesta;
                      dinero.innerText = total; 
                      Swal.fire({title: `GANASTEEE`, text:`Salio CARA :333`, icon:`success`});
                }else if(money > 1 || money < 1){
                      b = b+1 
                      pierde.innerHTML=b; 
                      intentos.innerHTML = i;
                      abrir.classList.replace('moneda', 'moneda_show')     
                      total = total - apuesta;
                      dinero.innerText = total; 
                      Swal.fire({title: `PERDISTEE`, text:`Salio SELLO :(((`, icon:`warning`});
                }   
          }else{
                Swal.fire({title: `introducir un valor igual o mayor a 1000 Para poder jugar:33`, icon:`error`});
          }
      }
      
      
})
sello.addEventListener('click', ()=>{
    let apuesta = document.getElementById('inputt').value;
      apuesta = parseFloat(apuesta)
      if (apuesta >= 1500000) {
        Swal.fire({title: `Valor muy alto a jugaaaar`});
        if(apuesta > 1000){
            let aleatorio =  Math.random()*2 + 1;
            let money = aleatorio.toPrecision(1);
            i = a + b; 
                if(money==2){
                    gana.innerText= a
                    a= a+1
                    intentos.innerText = i;
                    abrir.classList.replace('moneda', 'moneda_show')
                    total = total + apuesta;
                    dinero.innerText = total; 
                    Swal.fire({title: `GANASTEEE`, text:`Salio SELLO :333`, icon:`success`});
                      
                }else if(money <2 || money >2){
                    b = b+1 
                    pierde.innerHTML=b;                
                    intentos.innerHTML = i;
                    abrir.classList.replace('moneda', 'moneda_show')    
                    total = total - apuesta;
                    dinero.innerText = total; 
                    Swal.fire({title: `PERDISTEE`,text:`Salio CARA :(((`, icon:`warning`}); 
                }
          }else{
                Swal.fire({title: `introducir un valor igual o mayor a 1000 Para poder jugar:33`, icon:`error`});
          } 
      } else {
        if(apuesta > 1000){
            let aleatorio =  Math.random()*2 + 1;
            let money = aleatorio.toPrecision(1);
            i = a + b; 
                if(money==2){
                    gana.innerText= a
                    a= a+1
                    intentos.innerText = i;
                    abrir.classList.replace('moneda', 'moneda_show')
                    total = total + apuesta;
                    dinero.innerText = total; 
                    Swal.fire({title: `GANASTEEE`, text:`Salio SELLO :333`, icon:`success`});
                      
                }else if(money <2 || money >2){
                    b = b+1 
                    pierde.innerHTML=b;                
                    intentos.innerHTML = i;
                    abrir.classList.replace('moneda', 'moneda_show')  
                    total = total - apuesta;
                    dinero.innerText = total; 
                    Swal.fire({title: `PERDISTEE`, text:`Salio CARA :(((`, icon:`warning`}); 
                }
          }else{
                Swal.fire({title: `introducir un valor igual o mayor a 1000 Para poder jugar:33`, icon:`error`});
          } 
      }
    
})
