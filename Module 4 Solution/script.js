(function(window) {
    var names = ["Doctor Strange", "Jack The Ripper", "Jane In The Box", "J.J.Jameson", "Peter Parker", "Harry Osborn", "Lois Lane", "Kal-El", "Lex Luthor", "Jack Dawson", "Rose DeWitt Bukater", "Human Centipede", "Johnny Depp"];
    for (var name in names) {
        var firstLetter = names[name].charAt(0).toLowerCase();
        if (firstLetter === "j") {
            byeSpeaker.speak(names[name]);
        } else {
            helloSpeaker.speak(names[name]);
        }
    }
})(window);