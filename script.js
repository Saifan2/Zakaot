function generateBBCode() {
    let output = '';
    const honorAdmin = document.getElementById('honorAdmin').checked;
    const honorUser = document.getElementById('honorUser').checked;
    const Supporter = document.getElementById('Supporter').checked;
    const Tohen = document.getElementById('Tohen').checked;
    const Mharhim = document.getElementById('Mharhim').checked;
    const Hagah = document.getElementById('Hagah').checked;
    const Tech = document.getElementById('Tech').checked;
    const Kidom = document.getElementById('Kidom').checked;


    if (honorAdmin) {
        output += '[B][COLOR=#FF7F50]מנהל כבוד[/COLOR][/B]\n';
    }

    if (honorUser) {
        output += '[B][COLOR=#FF8C00]משתמש כבוד[/COLOR][/B]\n';
    }
    if (Supporter) {
        output += '[B][COLOR=#0099FF]חבר בצוות תמיכה לשעבר[/COLOR][/B]\n';
    }
    if (Tohen) {
        output += '[B][COLOR=#3366cc]חבר בצוות תוכן לשעבר[/COLOR][/B]\n';
    }
    if (Mharhim) {
        output += '[B][COLOR=#999900]חבר בצוות מארחים לשעבר[/COLOR][/B]\n';
    }
    if (Hagah) {
        output += '[B][COLOR=#33ccff]חבר בצוות הגהה לשעבר[/COLOR][/B]\n';
    }
    if (Tech) {
        output += '[B][COLOR=#008b8b]חבר בצוות טכנולוגיה לשעבר[/COLOR][/B]\n';
    }
    if (Kidom) {
        output += '[B][COLOR=#0099FF]חבר בצוות פיתוח וקידום לשעבר[/COLOR][/B]\n';
    }

    const managerInputs = document.querySelectorAll('.formerManagerInput');
    managerInputs.forEach(input => {
        if (input.value.trim() !== '') {
            output += `[B][COLOR=#FF0000]מנהל פורום ${input.value.trim()} לשעבר[/COLOR][/B]\n`;
        }
    });

    const supervisorInputs = document.querySelectorAll('.formerSupervisorInput');
    supervisorInputs.forEach(input => {
        if (input.value.trim() !== '') {
            output += `[B][COLOR=#0099FF]מפקח קטגוריית ${input.value.trim()} לשעבר[/COLOR][/B]\n`;
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
