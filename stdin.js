process.stdin.setEncoding("utf8");

var questions = [
    "What is your name",
    "What is your fav programming language",
    "Which IDE do you use?"
];

var answers = [];

function askQuestions(i) {
    process.stdout.write(questions[i] + "\n");
};

process.stdin.on("data", function(data) {
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        askQuestions(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", function() {
    process.stdout.write("end\n");
});

askQuestions(0);