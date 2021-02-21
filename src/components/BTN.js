function addBtn(row, text) {
	row.insertAdjacentHTML('beforeend', text);
}

function removeBtn(row) {
	let childrenCount = row.children.length;

	if (childrenCount <= 2) return;
	 
	row.children[childrenCount - 1].remove();
}

export {addBtn, removeBtn}