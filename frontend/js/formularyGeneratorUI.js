import { verifyFormulary } from "./gameLogic.js";

const tvscreen = document.querySelector(".tv-screen");

export function formularyUIGenerator() {
    clearScreen();

    createFormulary();

    const formularyName = tvscreen.querySelector(".formularyName");
    const formularySchool = tvscreen.querySelector(".formularySchool");
    const sendFormulary = tvscreen.querySelector(".sendFormulary");

    sendFormulary.addEventListener("click", () => {
        const name = formularyName.querySelector(".inputFormulary").value.trim();
        const school = formularySchool.querySelector(".inputFormulary").value.trim();

        if (!name || !school) {
            alert("Por favor, completá ambos campos.");
            return;
        }

        verifyFormulary(name, school)

        console.log("Nombre:", name);
        console.log("Escuela:", school);

        // Acá podés llamar a la función que procese los datos.
    });
}

function createFormulary() {
    const formularyContainer = document.createElement("div");
    formularyContainer.classList.add("formularyContainer");

    const formularyName = createInputSection(
        " Ingrese tu",
        "nombre",
        "Ingresa tu nombre...",
        "name"
    );

    formularyName.classList.add("formularyName");

    const formularySchool = createInputSection(
        " Ingrese tu",
        "escuela",
        "Ingresa tu escuela...",
        "school"
    );

    formularySchool.classList.add("formularySchool");

    const sendContainer = document.createElement("div");
    sendContainer.classList.add("sendContainer");

    const sendButton = document.createElement("button");
    sendButton.classList.add("sendFormulary");
    sendButton.textContent = "Enviar";
    sendButton.type = "button";

    sendContainer.appendChild(sendButton);

    formularyContainer.append(
        formularyName,
        formularySchool,
        sendContainer
    );

    tvscreen.appendChild(formularyContainer);
}

function createInputSection(titleText, secondLine, placeholder, name) {
    const container = document.createElement("div");

    const title = document.createElement("h1");
    title.classList.add("titleFormulary");
    title.append(
        document.createTextNode(titleText),
        document.createElement("br"),
        document.createTextNode(secondLine)
    );

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("inputFormulary");
    input.placeholder = placeholder;
    input.name = name;

    container.append(title, input);

    return container;
}

function clearScreen() {
    tvscreen.innerHTML = "";
}