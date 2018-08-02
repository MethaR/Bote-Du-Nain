const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!");

bot.on('ready', function() {
    bot.user.setGame("Je danse laissez moi !");
    console.log("I'm Ready !");

});

bot.login('NDc0NjU0MDA2NTk4NDM0ODI3.DkTodA.N4kZpQ1-dyVLrdjV6zENBujmjI4')

bot.on('message', message => {
        if (message.content === prefix + "nain"){
            message.channel.sendMessage("Je suis un NAIN ! https://giphy.com/gifs/11clOWGCHzWG7C");
        }
        if (message.content === "Salut"){
            message.reply("Bien le bonjour, je suis un nain");
            console.log("Commande Salut effectuée");
        }
        if (message.content === "ça va ?"){
            message.reply("Ouais je swing !");
        }
        if (message.content === prefix + "ouech"){
            message.reply("OUECH ! https://i.skyrock.net/7201/71557201/pics/3088843841_1_3_5unNmesq.gif");
        }

        if (message.content === prefix + "nancy"){
            message.channel.sendMessage("<@177496138989961226> Elle râle encore ???");
        }
        
        if (message.content === prefix + "james"){
            message.channel.sendMessage("<@302874081005535234> T'es vraiment dark toi !");
        }

        if (message.content === prefix + "aristide"){
            message.channel.sendMessage("<@300704455110819880> A.K.A la meuf qui couche avec des plantes.");
        }

        if (message.content === prefix + "elisea"){
            message.channel.sendMessage("<@422730929476206594> COMMENT OSE TU BRISER L'INNOCENCE D'UN NAIN ?!");
        }

        if (message.content === prefix + "azael"){
            message.channel.sendMessage("<@373212526139277332> Tu te prend pour un demon ou quoi ?");
        }

        if (message.content === prefix + "nainhelp"){
            message.author.sendMessage ("Commandes : !nain : Nain qui danse \n Salut \n ça va ? \n !ouech \n !nancy \n !james \n !aristide \n !elisea \n !azael \n !roll : faire un roll entre 1 et 100 ")
        }
        
        if (message.content === prefix + "help") {
            message.reply ("Tape !nainhelp pour mes commandes !");
        }

        if (message.content === prefix + "twerk") {
            message.channel.sendMessage("http://i.imgur.com/7tUKUH4.gif \n Voici <@177496138989961226> et <@422730929476206594> qui twerk réveillant les pouvoirs ultime de <@422730929476206594>  !");
        }

        if (message.content === prefix + "popaul") {
            message.channel.sendMessage("https://orig00.deviantart.net/6677/f/2016/273/f/2/handsome_dick_butt_by_crazycat690-daje1y8.png \n Popaul tu vas où, je suis nain c'est pas pour autant qu'il faut fuir !");
        }
        
        var roll;
        
        roll = Math.floor(Math.random() * 100) + 1;

        if (message.content === prefix + "roll"){
            message.channel.sendMessage("Tu as fais un roll de : **" + roll + "** !");
        
        }

    });

