async function buscarRaca(element) {
    let divRacas = document.getElementById('racas');
    if (element.checked) {
        var id = element.value;
        fetch(`/nova-conta/buscar-racas/${id}`, {
            method: 'GET'
        })
        .then(result => result.json())
        .then(data => {
            if (divRacas.children.length != 0) {
                divRacas.replaceChildren();
            }
            return criaElemento(data, divRacas);
        })
    } else {
        if (divRacas.children.length != 0) {
            divRacas.replaceChildren();
        }
    }
}

function criaElemento(data, elemetoPai) {
    //console.log(data);
    var elementos = [];
    Array.from(data.racas).forEach(raca => {
        var label = document.createElement('label');
        var input = document.createElement('input');
        label.innerText = raca.nome_raca;
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", "raca");
        input.setAttribute("class", "raca")
        input.setAttribute("value", raca.id_raca);
        elemetoPai.appendChild(label);
        elemetoPai.appendChild(input);
    });
    //console.log(elementos);
}