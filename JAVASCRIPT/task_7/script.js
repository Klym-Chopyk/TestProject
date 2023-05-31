function sortTable(columnIndex) {
    const table = document.getElementById("myTable");
    const rows = Array.from(table.rows).slice(1); 

    rows.sort((a, b) => {
        const cellA = a.cells[columnIndex].textContent;
        const cellB = b.cells[columnIndex].textContent;

        if (columnIndex === 2) {
            return parseInt(cellA) - parseInt(cellB);
        } else {
            return cellA.localeCompare(cellB);
        }
    });

    rows.forEach(row => table.appendChild(row));
}