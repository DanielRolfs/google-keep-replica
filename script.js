let titels = [];
let notes = [];
load();

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `
        <div  class="head">
            <div class="input">
                <input placeholder="Titel" id="title">
                <input placeholder="Notiz schreiben..." id="note">
                <button extraMarginTop20 onclick="addNote()">Hinzufügen</button>
            </div>
        </div>
    `;

    let noteArea = document.getElementById('noteArea');
    noteArea.innerHTML = '';

    for (let i = 0; i < titels.length; i++) {
        const title = titels[i];
        const note = notes[i];


        noteArea.innerHTML += `  
            <div class="card">
                <div class="button"><button onclick="deleteNote(${i})">x</button></div>    
                 <div class="text">
                    <div class="title"><b>${title}</b> </div>
            
                    <div class="note">${note}</div>
                </div> 
            </div>
        `;
    }
}

function addNote() {
    let title = document.getElementById('title');
    let note = document.getElementById('note');

    titels.push(title.value);
    notes.push(note.value);

    render();
    save();
}

function deleteNote(i) {
    titels.splice(i, 1);
    notes.splice(i, 1);
    render();
    save();
}

function save() {
    let titlesAsText = JSON.stringify(titels);
    localStorage.setItem('titels', titlesAsText);

    let notesAsText = JSON.stringify(notes);
    localStorage.setItem('notes', notesAsText);
}

function load() {
    let titlesAsText = localStorage.getItem('titels');
    let notesAsText = localStorage.getItem('notes');

    if (titlesAsText && notesAsText) {
        titels = JSON.parse(titlesAsText);
        notes = JSON.parse(notesAsText);
    }
}