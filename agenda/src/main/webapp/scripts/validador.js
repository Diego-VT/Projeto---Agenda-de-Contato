/**
 * Validação de Formulario
 *@author Diego Vieira Torres
 */

function validar() {
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if (nome === "") {
		alert('Prencha o campo Nome')
		frmContato.nome.focus()
		return false
	} else if (fone === "") {
		alert('Prencha o campo Fone')
		frmContato.fone.focus()
		return false
	}else{
		document.forms["frmContato"].submit()
	}

}