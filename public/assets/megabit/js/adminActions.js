function filterEmailsByDomain(filter) {
   
    // alert('filter');
    const sortEmail = filter.className;
    document.getElementById("input").value = sortEmail;
    
}
function deleteEmailFromDataBase(del) {
    const sortEmail = del.className;
    document.getElementById("input2").value = sortEmail;
}