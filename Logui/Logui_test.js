var this_js_script = $('script[src*=Logui_test]'); // or better regexp to get the file name..
var notebook = this_js_script.attr('notebook');   
var userID = 456;  
let configObject = {
    logUIConfiguration: {
        endpoint: 'ws://18.133.236.223/ws/endpoint/',
        authorisationToken: 'eyJ0eXBlIjoibG9nVUktYXV0aG9yaXNhdGlvbi1vYmplY3QiLCJhcHBsaWNhdGlvbklEIjoiZmZmNmViMjMtNjEzYy00YTdmLTkwOGQtNzZhMDhjOGY4MDE5IiwiZmxpZ2h0SUQiOiI5MTkxNWFjYy0wNDIyLTQ2OGYtOWNjMi0xMzA3ZWQyN2FiOTYifQ:1mD2Fx:rp2ZbdXObL3RR4s_JWFWssxbahKm7JMDcSuydeUbtKM',
        verbose: true, 
        browserEvents: {
            contextMenu: false,
            eventsWhileScrolling: false,
            trackCursor: false,
            pageFocus: false,
            pageResize: false,
        },
    },
    applicationSpecificData: {
        userID: userID,
        condition: notebook,
    },
    trackingConfiguration: {
        'run-button-click': {  // Mapping name (between element(s) and event)
            selector: '#run_int button:nth-child(1)',  // Selector
            event: 'click',  // Event
            name: 'RUN_BUTTON_CLICK',  // Log event name
        },
        'code-block-copy': {  // Mapping name (between element(s) and event)
            selector: 'div.CodeMirror div textarea',  // Selector
            event: 'copy',  // Event
            name: 'CODE_BLOCK_COPY',  // Log event name
        },
        'code-block-paste': {  // Mapping name (between element(s) and event)
            selector: 'div.CodeMirror div textarea',  // Selector
            event: 'paste',  // Event
            name: 'CODE_BLOCK_PASTE',  // Log event name
        },

        'cell_focus': {  // Mapping name (between element(s) and event)
            selector: 'div.CodeMirror div textarea',  // Selector
            event: 'focusin',  // Event
            name: 'CELL_FOCUS',  // Log event name
        },
       'cell_blur': {  // Mapping name (between element(s) and event)
            selector: 'div.CodeMirror div textarea',  // Selector
            event: 'focusout',  // Event
            name: 'CELL_BLUR',  // Log event name
        },
        'code-block-keydown': {  // Mapping name (between element(s) and event)
            selector: 'div.CodeMirror div textarea',  // Selector
            event: 'keydown',  // Event
            name: 'CODE_BLOCK_KEYDOWN',  // Log event name
        },
    },
    
};
        
document.addEventListener('click', function() {
    // Step 2
    if (window.LogUI) {
        // Step 3
        LogUI.init(configObject);
    }
    else {
        alert('LogUI is not available!');
    }
    });


