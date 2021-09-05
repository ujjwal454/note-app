console.log('welcome to note app')
//  if user add a note then add it to the localstaorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];

    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    console.log(notesobj);
    shownotes();
});
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = '';
    notesobj.forEach(function (element, index) {
        html += `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Add a note ${index + 1}</h5>
                        <div class="form-group">
                            <textarea class="form-control" id="addTxt" rows="3" placeholder="your text here">${element}</textarea>
                        </div>
                        <button class="btn btn-primary" id="addBtn"> delete note</button>
                    </div>
                </div> `;
    });
    let notesElem = document.getElementById('notes');
    if (notesobj.length != 0) {
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML = "nothing to show ! 'add a note' section above to add notes"

    }
}