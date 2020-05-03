let Chat = document.querySelector('.Chat');
let Typing = document.querySelector('.type');
let Button = document.querySelector('.btn');

let MsgOne = document.querySelector('.Text1');  //msg
let MsgTwo = document.querySelector('.Text2'); //msg

let MyChat = document.querySelector('.msg1');
let BotChat = document.querySelector('.msg2');

Button.onclick = () => {
    let TextC = Chat.value;
    if (TextC === 'Hello' || TextC === 'hello') {
        MsgOne.innerHTML = TextC;
        // css
        Typing.innerHTML = 'typing...';
        MyChat.style.position = 'absolute'
        MyChat.style.top = '140px';

        setTimeout(function () {
            MsgTwo.innerHTML = 'Hey Dev!';
            Typing.innerHTML = '';

        }, 2000);

    } else if (TextC === 'How are you ?' || TextC === 'How are you') {
        MsgOne.innerHTML = TextC;
        // css ----------
        Typing.innerHTML = 'typing...';
        MyChat.style.position = 'absolute'
        MyChat.style.top = '140px';
        setTimeout(function () {
            MsgTwo.innerHTML = 'I\'m Very Fine';

        }, 2000);

    } else if (TextC === 'Do you have intelligence ?' || TextC === 'Do you have intelligence') {
        MsgOne.innerHTML = TextC;

        Typing.innerHTML = 'typing...';
        MyChat.style.position = 'absolute'
        MyChat.style.top = '140px';
        setTimeout(function () {
            MsgTwo.innerHTML = 'No, my Dev think that I\'ll create a lot robots soldier to domitate the World';
            Typing.innerHTML = '';
        }, 2000);

    } else if (TextC === 'What time is it ?' || TextC === 'what time is it' || TextC === 'What time is it') {
        MsgOne.innerHTML = TextC;

        Typing.innerHTML = 'typing...';
        MyChat.style.position = 'absolute'
        MyChat.style.top = '140px';
        setTimeout(function () {
            let hours = new Date()
            MsgTwo.innerHTML = `Now are: ${hours.getHours()}: ${hours.getMinutes()}`;
            Typing.innerHTML = '';
        }, 2000);

    } else {
        MsgOne.innerHTML = TextC;
        // css ----------
        Typing.innerHTML = 'typing...';
        MyChat.style.position = 'absolute'
        MyChat.style.top = '140px';
        setTimeout(function () {
            MsgTwo.innerHTML = 'Sorry, but I can\'t answer';
            Typing.innerHTML = '';
        }, 2000);
    }
}

//Footer
const Foot = document.querySelector('footer');
const Design = document.querySelector('.APP');
const Language = document.querySelector('.LAN');
const BackG = document.querySelector('html');
const Disc = document.querySelector('.Discord');

Design.onclick = () => {
    Language.parentNode.removeChild(Language); //apaga o elemento luanguage

    let Light = document.createElement('p');
    Light.innerHTML = 'Light';
    document.querySelector('.appea').appendChild(Light);

    let Dark = document.createElement('p');
    Dark.innerHTML = 'Dark'
    document.querySelector('.appea').appendChild(Dark);

    //cfg new element
    Light.style.fontSize = '15px';
    Light.style.fontFamily = 'monospace';
    Light.style.postition = 'absolute';
    Light.style.margin = '10px 8px';
    Light.style.height = "17px";
    Light.style.width = '82px';
    Light.style.left = '0';
    Light.style.top = '0';
    Light.style.padding = '5px';
    Light.style.border = '1px solid #565a5f';
    Light.style.borderRadius = '5px';
    Light.style.color = '#ccc';

    Dark.style.fontSize = '15px';
    Dark.style.fontFamily = 'monospace';
    Dark.style.postition = 'absolute';
    Dark.style.height = "17px";
    Dark.style.width = '82px';
    Dark.style.margin = '10px 8px';
    Dark.style.left = '0';
    Dark.style.top = '0';
    Dark.style.padding = '5px';
    Dark.style.border = '1px solid #565a5f';
    Dark.style.borderRadius = '5px';
    Dark.style.color = '#ccc';

    Light.onclick = () => {
        BackG.style.backgroundColor = '#ffffff';
        Disc.style.backgroundColor = '#d4d7dd';
        Foot.style.backgroundColor = '#d4d7dd';
        Light.style.color = 'black';
        Design.style.color = 'black';
        Chat.style.borderColor = '#d4d7dd';
        Chat.style.backgroundColor = '#ffffff';
        Button.style.borderColor = '#d4d7dd';
        Button.style.backgroundColor = '#ffffff';
        Dark.style.color = 'black';
        MsgOne.style.color = 'Black';
        MsgTwo.style.color = 'black';
    }

    Dark.onclick = () => {
        BackG.style.backgroundColor = '#565a5f';
        Disc.style.backgroundColor = '#36393f';
        Foot.style.backgroundColor = '#36393f';
        Light.style.color = '#ccc';
        Design.style.color = '#ccc';
        Chat.style.borderColor = '#36393f';
        Chat.style.backgroundColor = '#40444b';
        Button.style.borderColor = '#ccc';
        Button.style.backgroundColor = '#40444b';
        Button.style.borderColor = '#565a5f';
        Dark.style.color = '#ccc';
    }
}

Language.onclick = () => {
    document.querySelector('.APP').remove();

    let English = document.createElement('p');
    English.innerHTML = 'English';
    document.querySelector('.appea').appendChild(English);

    let Portuguese = document.createElement('p');
    Portuguese.innerHTML = 'Portuguese';
    document.querySelector('.appea').appendChild(Portuguese);

    //Design English Button

    English.style.fontSize = '15px';
    English.style.fontFamily = 'monospace';
    English.style.postition = 'absolute';
    English.style.margin = '10px 8px';
    English.style.height = "17px";
    English.style.width = '82px';
    English.style.left = '0';
    English.style.top = '0';
    English.style.padding = '5px';
    English.style.border = '1px solid #565a5f';
    English.style.borderRadius = '5px';
    English.style.color = '#ccc';

    //Design Protuguese Button

    Portuguese.style.fontSize = '15px';
    Portuguese.style.fontFamily = 'monospace';
    Portuguese.style.postition = 'absolute';
    Portuguese.style.margin = '10px 8px';
    Portuguese.style.height = "17px";
    Portuguese.style.width = '82px';
    Portuguese.style.left = '0';
    Portuguese.style.top = '0';
    Portuguese.style.padding = '5px';
    Portuguese.style.border = '1px solid #565a5f';
    Portuguese.style.borderRadius = '5px';
    Portuguese.style.color = '#ccc';

    //script PT-BR
    Portuguese.onclick = () => {
        //const title = document.querySelector('title');
        const created = document.querySelector('.by');

        created.innerHTML = 'Criado por CauaS1';
        Portuguese.innerHTML = 'Português';
        English.innerHTML = 'Inglês';
        Chat.placeholder = 'Diga "Olá", "Como vai ?, Você tem inteligencia ?, Que horas são';
    }
}

