const modal = document.querySelector(".modal");
// const trigger = document.querySelector(".trigger");
const triggers = document.querySelectorAll(".trigger");
const closeButton = document.querySelector(".close-button");

const picture = document.getElementById("pickedupimg");
const blurb = document.getElementById("pickedupinfo");

function toggleModal(name) {
    if (name === "priory") {
        picture.src="assets/images/prioryorangetreeFULL.jpg";
        blurb.innerHTML=
            `high fantasy lesbians, queens, wizards, dragon riders!??? it's also heckin long...
            <br><br>
            A world divided. A queendom without an heir. An ancient enemy awakens.
            <br><br>
            The House of Berethnet has ruled Inys for a thousand years. Still unwed, Queen Sabran the Ninth must conceive a daughter to protect her realm from destruction – but assassins are getting closer to her door.
            <br><br>
            Ead Duryan is an outsider at court. Though she has risen to the position of lady-in-waiting, she is loyal to a hidden society of mages. Ead keeps a watchful eye on Sabran, secretly protecting her with forbidden magic.
            `;
            // <br><br>
            // Across the dark sea, Tané has trained to be a dragonrider since she was a child, but is forced to make a choice that could see her life unravel.
            // <br><br>
            // Meanwhile, the divided East and West refuse to parley, and forces of chaos are rising from their sleep.
            
    }
    else if (name === "remarkable") {
        picture.src="assets/images/anabsolutelyremarkablethingFULL.jpg";
        blurb.innerHTML=`it's Hank Green yo
        <br><br>
        The Carls just appeared.
        <br><br>
        Roaming through New York City at three AM, twenty-three-year-old April May stumbles across a giant sculpture. Delighted by its appearance and craftsmanship—like a ten-foot-tall Transformer wearing a suit of samurai armor—April and her best friend, Andy, make a video with it, which Andy uploads to YouTube. The next day, April wakes up to a viral video and a new life. News quickly spreads that there are Carls in dozens of cities around the world—from Beijing to Buenos Aires—and April, as their first documentarian, finds herself at the center of an intense international media spotlight.
        `;
        // <br><br>
        // Seizing the opportunity to make her mark on the world, April now has to deal with the consequences her new particular brand of fame has on her relationships, her safety, and her own identity. And all eyes are on April to figure out not just what the Carls are, but what they want from us.
        
    }
    else if (name === "tao") {
        picture.src="assets/images/taoofpoohFULL.jpg";
        blurb.innerHTML=`i want to be more at peace and pooh is an unbothered icon
        <br><br>
        The Wisdom of Pooh.
        <br><br>
        Is there such thing as a Western Taoist? Benjamin Hoff says there is, and this Taoist's favorite food is honey. Through brilliant and witty dialogue with the beloved Pooh-bear and his companions, the author of this smash bestseller explains with ease and aplomb that rather than being a distant and mysterious concept, Taoism is as near and practical to us as our morning breakfast bowl.
        <br><br>
        Romp through the enchanting world of Winnie-the-Pooh while soaking up invaluable lessons on simplicity and natural living.`;
    }
    else if (name === "addie") {
        picture.src="assets/images/invisiblelifeaddieFULL.jpg";
        blurb.innerHTML="this sounds like book i would write...";
    }
    else if (name === "vicious") {
        picture.src="assets/images/viciousFULL.jpg";
        blurb.innerHTML="this one too. story about best frenmenies.";
    }
    else if (name === "shadows") {
        picture.src="assets/images/gatheringofshadowsFULL.jpeg";
        blurb.innerHTML="sequel to a darker shade of magic which i loved. <br><br>also just realized this is the third book on this shelf by the same author";
    }
    else if (name === "galaxy") {
        picture.src="assets/images/hitchhikersguidetogalaxyFULL.jpeg";
        blurb.innerHTML="chaotic sci-fi classic. all i know is that the answer is 42.";
    }
    else if (name === "race") {
        picture.src="assets/images/soyouwanttotalkaboutraceFULL.jpeg";
        blurb.innerHTML="this sounds important. also tiktok reccomended this book.";
    }
    else if (name === "flame") {
        picture.src="assets/images/wehunttheflameFULL.jpg";
        blurb.innerHTML="to be honest, i just really like the cover. and i like middle eastern culture vibess";
    }
    else if (name === "boat") {
        picture.src="assets/images/yourheadisahouseboatFULL.jpeg";
        blurb.innerHTML="this is by a Youtuber i follow. he helps me figure out how to balance doing creative work. he explains thru illustrations to make self-reflection more fun";
    }
    else if (name === "piranesi") {
        picture.src="assets/images/piranesiFULL.jpeg";
        blurb.innerHTML="this sounds like an trippy ancient tome i've stumbled across";
    }
    else if (name === "sand") {
        picture.src="assets/images/thesandwarriorFULL.jpeg";
        blurb.innerHTML="cute. graphic novels targeted towards children are my jam.";
    }

    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
        console.log("close");
    }
}
triggers.forEach(function(entry) {
    console.log(entry);
                                               
    // entry.addEventListener("click", toggleModal) //entry.id
    entry.addEventListener("click", function(){toggleModal(entry.id);})
});


// trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);