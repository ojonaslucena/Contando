function contar(){
     inicio = document.getElementById('ni')
     passo = document.getElementById('passo')
     fim = document.getElementById('fim')
     res =document.getElementById('res')
     if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length==0){
        alert('Dados inválidos, tente novamente')
     } else{
        let i =Number(inicio.value)
        let p =Number(passo.value)
        let f =Number(fim.value)


        for(c=i; c<=f ; c+=p){
            res.style.textAlign = 'center'
            res.innerHTML +=`>${c}`

        }
     }
    
}