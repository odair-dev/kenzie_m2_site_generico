function modal(){
    const btnModal = document.querySelector('.btnModal');
    const mostrarModal = document.querySelector('#containerModal');
    
    btnModal.addEventListener('click', function(event){
        event.preventDefault();
        mostrarModal.showModal();
    })
    
    const btnModal2 = document.querySelector('.btnModal2');
    
    btnModal2.addEventListener('click', function(event){
        event.preventDefault();
        mostrarModal.showModal();
    })
    
    const btnFechar = document.querySelector('.btnFechar');
    
    btnFechar.addEventListener('click', function(event){
        event.preventDefault();
        mostrarModal.close();
    })
}

modal();