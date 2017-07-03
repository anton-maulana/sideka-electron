export var editMenuTemplate = {
    label: 'Edit',
    submenu: [
        { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:", role: "undo" },
        { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:", role: "redo" },
        { type: "separator" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:", role: "cut" },
        { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:", role: "copy" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:", role: "paste" },
        { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:", role: "selectall" }
    ]
};
