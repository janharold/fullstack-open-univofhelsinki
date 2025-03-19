```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The form will submit a new note to the server after the user inputs a text/string and hits save, but the page will not refresh and will only redraw /append the list of notes with the last added note

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: User input
    deactivate server 