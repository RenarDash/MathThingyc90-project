player1_Name = localStorage.getItem("p1name");
player2_Name = localStorage.getItem("p2name");
player1Score = 0;
player2Score = 0;
Qturn = "p1";
Aturn = "p2";
document.getElementById("player1_name").innerHTML = player1_Name;
document.getElementById("player2_name").innerHTML = player2_Name;

document.getElementById("player1_score").innerHTML = player1Score;
document.getElementById("player2_score").innerHTML = player2Score;

document.getElementById("Qq_turn").innerHTML = "Question Turn:" + player1_Name;
document.getElementById("Aa_turn").innerHTML = "Answer Turn:" + player2_Name;