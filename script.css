function generateBBCode() {
    let output = '';
    const honorAdmin = document.getElementById('honorAdmin').checked;
    const honorUser = document.getElementById('honorUser').checked;

    if (honorAdmin) {
        output += '[COLOR=#FF7F50]מנהל כבוד[/COLOR]\n';
    }

    if (honorUser) {
        output += '[COLOR=#FF8C00]משתמש כבוד[/COLOR]\n';
    }

    const managerInputs = document.querySelectorAll('.formerManagerInput');
    managerInputs.forEach(input => {
        if (input.value.trim() !== '') {
            output += `[COLOR=#FF0000]מנהל פורום ${input.value.trim()} לשעבר[/COLOR]\n`;
        }
    });

    const supervisorInputs = document.querySelectorAll('.formerSupervisorInput');
    supervisorInputs.forEach(input => {
        if (input.value.trim() !== '') {
            output += `[COLOR=#0099FF]מפקח קטגוריית ${input.value.trim()} לשעבר[/COLOR]\n`;
        }
    });

    document.getElementById('output').value = output.trim();
}

function copyToClipboard() {
    const outputTextarea = document.getElementById('output');
    outputTextarea.select();
    document.execCommand('copy');
    alert('ה-BBCODE הועתק בהצלחה!');
}

function duplicateField(inputClassName, containerId) {
    const container = document.getElementById(containerId);
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = containerId === 'formerManagerContainer' ? 'הזן פורום' : 'הזן קטגוריה';
    newInput.className = inputClassName;
    container.appendChild(newInput);
}
