const { createApp } = Vue;

createApp({
    data() {
        return {
            askNotification: true,
            inputText: "",
            index: 2,
            darkMode: false,
            sounds: [new Audio("./sounds/warm-piano.mp3"), new Audio("./sounds/ragtime.mp3"), new Audio("./sounds/friendly-melody.mp3"), new Audio("./sounds/piano-logo.mp3")],
            user: {name: "Neytiri", avatar: "./img/avatar.png"},
            contacts: [
                {
                    id:1,
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    date: new Date(2020, 0, 10, 16, 15, 22),
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:2,
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    date: new Date(2020, 2, 20, 16, 35, 0),
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id:3,
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    date: new Date(2020, 2, 28, 16, 15, 22),
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:4,
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    date: new Date(2020, 0, 10, 15, 50, 0),
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:5,
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    date: new Date(2020, 0, 10, 15, 50, 0),
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:6,
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    date: new Date(2020, 0, 10, 15, 51, 0),
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id:7,
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    date: new Date(2020, 0, 10, 15, 50, 0),
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:8,
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    date: new Date(2020, 0, 10, 15, 51, 0),
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },

    methods: {
        removeNotification(){
            this.askNotification = false;
        },

        orderContacts(){
            newContacts = new Array();
            newContacts.push(this.findFirstContact());
            ids = new Array();
            ids.push(newContacts[0].id);

            for(let i = 1; i < this.contacts.length; i++){
                newContacts.push(this.findContact(newContacts[i-1].date.getTime(), ids));
                ids.push(newContacts[i].id);
            }

            this.contacts = newContacts;
        },

        findFirstContact(){
            let contact = {index: 0, value: this.contacts[0].date.getTime()};

            for(let i = 0; i < this.contacts.length; i++)
                if(contact.value > this.contacts[i].date.getTime()){
                    contact.value = this.contacts[i].date.getTime();
                    contact.index = i;
                }

            return this.contacts[contact.index];
        },

        findContact(value, ids){
            for(let i = 0; i < this.contacts.length; i++){
                if(this.contacts[i].date.getTime() == value && !this.isPresent(this.contacts[i].id, ids)){
                    return this.contacts[i];
                }
            }

            let contact = {value: 100000000000000000000, index: -1};
            for(let i = 0; i < this.contacts.length; i++)
                if(this.contacts[i].date.getTime() > value && this.contacts[i].date.getTime() < contact.value){
                    contact.value = this.contacts[i].date.getTime();
                    contact.index = i;
                }

            return this.contacts[contact.index];
        },

        isPresent(id, ids){
            let isPresent = false;
            for(let i = 0; i < ids.length && !isPresent; i++)
                if(id == ids[i]){
                    isPresent = true;
                }
                    
            return isPresent;
        },

        showMessageDate(contact){
            let date = new Array();
            let today = new Date();

            if(today.getFullYear() == contact.date.getFullYear() && today.getMonth() == contact.date.getMonth() && today.getDate() == contact.date.getDate()){
                let ut;
                date = contact.messages[contact.messages.length - 1].date.split(" ");
                date[0] = date[1];
                ut = date[0].split(":");

                if(ut[0].length < 2)
                    ut[0] = "0" + ut[0];

                if(ut[1].length < 2)
                    ut[1] = "0" + ut[1];

                date[0] = "Oggi " + ut[0] + ":" + ut[1];
            }
            else if((today.getFullYear() == contact.date.getFullYear() && today.getMonth() == contact.date.getMonth() && today.getDate() - 1 == contact.date.getDate()) 
            || ((today.getFullYear() == contact.date.getFullYear() && today.getMonth() - 1 == contact.date.getMonth()) 
            && ((contact.date.getMonth() == 1 && (contact.date.getDate() == 28 || contact.date.getDate() == 29))
            || ((contact.date.getMonth() == 3 || contact.date.getMonth() == 5 || contact.date.getMonth() == 8 || contact.date.getMonth() == 10) && (contact.date.getDate() == 30))
            || ((contact.date.getMonth() == 0 || contact.date.getMonth() == 2 || contact.date.getMonth() == 4 || contact.date.getMonth() == 6 || contact.date.getMonth() == 7 || contact.date.getMonth() == 9 || contact.date.getMonth() == 11) && contact.date.getDate() == 31))))
                date.push("Ieri");
            else
                date = contact.messages[contact.messages.length - 1].date.split(" ");

            return date[0];
        },

        showMessage(message){
            let s = "";

            s = message.match(/.{1,35}/g);
            if(s[1] != undefined)
                s[0] += "...";

            return s[0];
        },

        search(name){
            let result = true;
            let dim = this.inputText.length;
            for(let i = 0; i < dim && result; i++)
                if(name[i].toUpperCase() != this.inputText[i].toUpperCase())
                    result = false;

            return result;
        },

        getSentTime(message){
            let date = message.date.split(" ");
            let time = date[1].split(":");

            if(time[0].length < 2)
                time[0] = "0" + time[0];

            if(time[1].length < 2)
                time[1] = "0" + time[1];

            return time[0] + ":" + time[1];
        },

        reverseIndex(oldIndex){
            let newIndex = this.contacts.length - 1;
            return newIndex  - oldIndex;
        },

        play(soundToPlay){
            this.stopPlaying();

            switch(soundToPlay){
                case "warm piano":
                    this.sounds[0].play();
                    break;
                
                case "ragtime":
                    this.sounds[1].play();
                    break;

                case "friendly melody":
                    this.sounds[2].play();
                    break;

                case "piano logo":
                    this.sounds[3].play();
                    break;
            }
        },

        stopPlaying(){
            for(let i = 0; i < this.sounds.length; i++)
                if(!this.sounds[i].paused){
                    this.sounds[i].pause();
                    this.sounds[i].currentTime = 0;
                }
        },

        setSoundsVolume(){
            for(let i = 0; i < this.sounds.length; i++)
                this.sounds[i].volume = 0.7;
        },

        sendMessage(){
            if(this.$refs.inputMessage.value == "")
                return;

            time = new Date();
            let day = "" + time.getDate();
            let month = "" + time.getMonth();
            let year = "" + time.getFullYear();

            if(day.length < 2)
                day = "0" + day;
            if(month.length < 2)
                month = "0" + month;

            let fullDateString = day + "/" + month + "/" + year;

            this.contacts[this.index].messages.push({
                date: (fullDateString + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()),
                message: this.$refs.inputMessage.value,
                status: "sent"});
            this.contacts[this.index].date = new Date();
            this.orderContacts();
            this.index = this.contacts.length - 1;
            this.$refs.inputMessage.value = "";

            setTimeout(this.answer, 1000);
            setTimeout(this.scrollDown, 50);
        },

        answer(){
            time = new Date();
            let day = "" + time.getDate();
            let month = "" + time.getMonth();
            let year = "" + time.getFullYear();

            if(day.length < 2)
                day = "0" + day;
            if(month.length < 2)
                month = "0" + month;

            let fullDateString = day + "/" + month + "/" + year;

            this.contacts[this.index].messages.push({
                date: (fullDateString + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()),
                message: this.chooseMessage(),
                status: "received"});
            this.contacts[this.index].date = new Date();
            this.orderContacts();
            this.index = this.contacts.length - 1;
            setTimeout(this.scrollDown, 50);
        },

        chooseMessage(){
            let result = "";
            let random = Math.floor(Math.random() * 15);

            switch(random){
                case 0:
                    result = "Tre tigri contro tre tigri.";
                    break;
                
                case 1:
                    result = "Una rana rara e nera sulla rena errò una sera.";
                    break;

                case 2:
                    result = "Li vuoi quei kiwi? E se non vuoi quei kiwi che kiwi vuoi?";
                    break;
                
                case 3:
                    result = "Una rara rana bianca sulla rena errò un po' stanca.";
                    break;

                case 4:
                    result = "Sopra la panca la capra campa, sotto la panca la capra crepa.";
                    break;

                case 5:
                    result = "Se oggi seren non è domani seren sarà, se non sarà seren si rasserenerà.";
                    break;

                case 6:
                    result = "A quest'ora il questore in questura non c'è.";
                    break;

                case 7:
                    result = "Trentatré trentini entrarono in Trento, tutti e trentatré trotterellando.";
                    break;
                
                case 8:
                    result = "Ti ci stizzisci? E stizziscitici pure!";
                    break;

                case 9:
                    result = "Andavo a Lione cogliendo cotone, tornavo correndo cotone cogliendo.";
                    break;

                case 10:
                    result = "Apelle figlio di Apollo fece una palla di pelle di pollo. Tutti i pesci vennero a galla per vedere la palla di pelle di pollo fatta da Apelle figlio di Apollo.";
                    break;

                case 11:
                    result = "A che serve una serva che non serve? Manda la serva che non serve da chi si servirà di una serva che non serve e serviti di una serva che serve.";
                    break;

                case 12:
                    result = "Sul tagliere gli agli taglia, non tagliare la tovaglia. La tovaglia non è aglio se la tagli fai uno sbaglio.";
                    break;

                case 13:
                    result = "Tito, tu m'hai ritinto il tetto, ma non t'intendi tanto di tetti ritinti.";
                    break;

                case 14:
                    result = "Dietro il palazzo c'è un povero cane pazzo, date un pezzo di pane al povero pazzo cane.";
                    break;
            }

            return result;
        },

        needToShowDate(i){
            result = false;
            if(i < 1)
                result = true;
            else{
                let dateCurrentMessage = this.contacts[this.index].messages[i].date.split(" ");
                let datePreviousMessage = this.contacts[this.index].messages[i - 1].date.split(" ");
                if(dateCurrentMessage[0] != datePreviousMessage[0])
                    result = true;
            }

            return result;
        },

        showDate(i){
            let result = "";
            let today = new Date();
            let day = "" + today.getDate();
            let month = "" + today.getMonth();
            let year = "" + today.getFullYear();

            if(day.length < 2)
                day = "0" + day;
            if(month.length < 2)
                month = "0" + month;

            let todayDate = day + "/" + month + "/" + year;
            let messageDate = this.contacts[this.index].messages[i].date.split(" ");

            if(todayDate == messageDate[0])
                result =  "Oggi";
            else
                result =  messageDate[0];

            return result;
        },

        changeMode(){
            let root = document.querySelector(":root");
            if(!this.darkMode){
                root.style.setProperty("--header_color", "#202c33");
                root.style.setProperty("--aside_color", "#111b21");
                root.style.setProperty("--text_color", "white");
                root.style.setProperty("--light_text", "#aebac1");
                root.style.setProperty("--element_hover_color", "#202c33");
                root.style.setProperty("--notification_color", "#403e38");
                root.style.setProperty("--notification_hover_color", "#524f49");
                root.style.setProperty("--search_color", "#202c33");
                root.style.setProperty("--search_text_color", "#d1d7db");
                root.style.setProperty("--input_container_color", "#111b21");
                root.style.setProperty("--received_color", "#202c33");
                root.style.setProperty("--date_color", "#182229");
                root.style.setProperty("--sent_color", "#005c4b");
                root.style.setProperty("--footer_color", "#202c33");
                root.style.setProperty("--border_color", "black");
                root.style.setProperty("--input_message_color", "#2a3942");
                root.style.setProperty("--background_color1", "#2a3942");
                root.style.setProperty("--background_color2", "#2a3942");
                root.style.setProperty("--wrapper_border", "black");
                root.style.setProperty("--main_color", "#0b141a");
            }
            else{
                root.style.setProperty("--header_color", "#eaeaea");
                root.style.setProperty("--aside_color", "white");
                root.style.setProperty("--text_color", "black");
                root.style.setProperty("--light_text", "#575757");
                root.style.setProperty("--element_hover_color", "#e9ebeb");
                root.style.setProperty("--notification_color", "#8edafc");
                root.style.setProperty("--notification_hover_color", "#b3e6fd");
                root.style.setProperty("--search_color", "white");
                root.style.setProperty("--search_text_color", "black");
                root.style.setProperty("--input_container_color", "#fafafa");
                root.style.setProperty("--received_color", "white");
                root.style.setProperty("--date_color", "#e4ded6");
                root.style.setProperty("--sent_color", "#d5f9ba");
                root.style.setProperty("--footer_color", "#f3eeea");
                root.style.setProperty("--border_color", "rgb(219, 219, 219)");
                root.style.setProperty("--input_message_color", "white");
                root.style.setProperty("--background_color1", "rgb(214,219,215)");
                root.style.setProperty("--background_color2", "linear-gradient(0deg, rgba(214,219,215,1) 85%, rgba(0,150,136,1) 85%)");
                root.style.setProperty("--wrapper_border", "#b1b1b1");
                root.style.setProperty("--main_color", "rgba(0, 0, 0, 0)");
            }

            this.darkMode = !this.darkMode;
        },

        scrollDown(){

            let container = this.$el.querySelector("#messages-container");
            container.scrollTop = container.scrollHeight;
        },
    },

    mounted() {
        this.orderContacts();
        this.setSoundsVolume();
    }

}).mount("#app");