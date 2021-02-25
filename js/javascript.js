const grid = new Muuri('.grid', {
    layout: { 
        rounding: false 
    }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('charge');

    const enlaces = document.querySelectorAll('#Cat a');
    enlaces.forEach((elemento ) => {
      elemento.addEventListener('click', (evento) => {
          evento.preventDefault();
          enlaces.forEach((enlace)=> enlace.classList.remove('active') );
          evento.target.classList.add('active');
 
          const categoria = evento.target.innerHTML.toLowerCase();
         
          categoria === ' todos ' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria=${categoria}]`);
        });
    
    }); 

	document.querySelector('#busquedas').addEventListener('input', (evento) => {
		const busqued = evento.target.value;
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqued) );
	});

    document.querySelector('#busquedas').addEventListener('input', (evento) => {
		const busqueda = evento.target.value;
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	});

 
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .imagen img').forEach((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src');
			const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

			overlay.classList.add('activo');
			document.querySelector('#overlay img').src = ruta;
			document.querySelector('#overlay .descripcion').innerHTML = descripcion;
		});

        document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
            overlay.classList.remove('activo');
        });
    
       
        overlay.addEventListener('click', (evento) => {
            evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
        });
    
});
});