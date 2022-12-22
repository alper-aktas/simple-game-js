var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    if(character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 50 && blockLeft > 30 && characterTop >= 280) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You Died");

        // Creating "Play Again" button with style
        var playAgainButton = document.createElement("button");
        playAgainButton.innerText = "Play Again";
        playAgainButton.style.fontSize = "20px";
        playAgainButton.style.marginTop = "50px";
        playAgainButton.style.padding = "10px 20px";
        playAgainButton.style.marginLeft = "42%";

        // Event listener to button reloads the page
        playAgainButton.addEventListener("click", function() {
            window.location.reload();
        });

        // Adding button to body of the document
        document.body.appendChild(playAgainButton);
    }
}, 10);
