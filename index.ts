#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgCyan.bold.italic("\tWelcome to the Programming Quiz Game")) ;
console.log(chalk.bold.redBright("    "+"-".repeat(45))); 
console.log(chalk.italic("which language whould you prefer?\n")); 




//Giving opt. for chossing langauges 
const lang = await inquirer.prompt([{
    name : "language",
    type : "list",
    message : "Choose one language",
    choices : ["Python" , "Python(Data Analysis)"]
}])

// Pattern variable
let pattern : string = chalk.bgGray("Which pattern whould you like to choose?\n");

//score initially is zero as the user start giving coreect it will increment by 1 :
let sc:number = 5;
let score : number = 0;

// Asking pattern of questions
if (lang.language === "Python"){
    
    const pattern_ask = await inquirer.prompt ([{
        name : "pat" ,
        type : "list" ,
        message : pattern,
        choices : ["MCQs" , "Fill in the blanks"]
     }]);
     
     const pat = pattern_ask.pat;
     
     //Now giving questions python:language , patern : MCQs

     if (pattern_ask.pat === "MCQs"){
        const quiz_mcq_py  =  await inquirer.prompt([
            {
                name : "q1",
                type : "list",
                message : "Q1 : what we write in python extension file?",
                choices :["A) .ts" , "B) .html" , "C) .css" , "D).py"]
            },
            {
                name : "q2",
                type : "list",
                message : "Q2 : How do you declare a variable in Python? ",
                choices :["A) using the keyword 'var' " , 
                          "B) using the keyword 'int' " , 
                          "C) using the keyword 'let'" , 
                          "D) by assigning a value to a name"
                        ]

            },
            {
                name : "q3",
                type : "list",
                message : "Q3 : What is the result of 5 + 3 in Python? " ,
                choices :["A) 8" , "B) 53 " , "C) SyntaxError" , "D) Error"]
            },
            {
                name : "q4",
                type : "list",
                message : "Q4 : What does the print() function do in Python? ",
                choices :["A) Reads input from the user" , "B) Outputs data to the console" , "C) Performs mathematical calculations" , "D) Declares a variable"]
            },
            {
                name : "q5",
                type : "list",
                message : "Q5 : What is the correct way to write a comment in Python? ",
                choices :["A) // This is a comment" , "B) /* This is a comment */ " , " C) <!-- This is a comment -->" , "D) # This is a comment"]
            }
    ]);


    


        if (quiz_mcq_py.q1 === "D).py" ){
            console.log("Q1 : Correct");
            score++;
            
            
        }else {
            console.log("Q1 : Incorrect ");
            
        }

        if (quiz_mcq_py.q2 === "D) by assigning a value to a name" ){
            console.log("Q2 : Correct");
            score++;
            
            
        }else {
            console.log("Q2 : Incorrect ");
        }

        if (quiz_mcq_py.q3 === "A) 8" ){
            console.log("Q3 : Correct");
            score++;
            
            
        }else {
            console.log("Q3 : Incorrect ");
        } 

        if (quiz_mcq_py.q4 === "B) Outputs data to the console"){
            console.log("Q4 : Correct");
            score++;
            
            
        }else {
            console.log("Q4 : Incorrect ");
        } 


        if (quiz_mcq_py.q5 === "D) # This is a comment" ){
            console.log("Q5 : Correct");
            score++;
            
            
        }else {
            console.log("Q5 : Incorrect ");
        }   
        console.log(`You have given 5 : ${score} answers correct out of ${sc} `);    
     
    }else if (pattern_ask.pat === "Fill in the blanks"){
        interface Question {
            question: string;
            answer: string;
        }
        
        let questions: Question[] = [
            { question: 'Q: To output text in Python, you use the ______ function.', answer: 'print()' },
            { question: "A ______ is a named location in the computer's memory that can store data.", answer: 'variable' },
            { question: 'In Python, comments are indicated by the ______ symbol.', answer: '# (hashtag)' },
            { question: 'Lists in Python are enclosed in ______ brackets.', answer: 'square[]'},
            {question: ' A _____ is a collection of characters enclosed in single or double quotes in Python.', answer: 'string'}
        ];
        
        
        console.log(chalk.bgCyanBright("\t print() , " , "# (hashtag) , ", "variable , " , "square[] , " , "string "));
        console.log("you have to answer from above list "+chalk.red.bold(" WARNING: Write as they are  written otherwise they will consider it wrong\n"));
        
        function shuffle(shuffle_array:Question[]):Question[]{
            for(let i=shuffle_array.length - 1 ; i > 0 ; i--){
                //random value exclude last value that's y we add +1
                // in bracket 
                const j =Math.floor( Math.random() * (i+1));
                
                
                [shuffle_array[i] ,shuffle_array[j]] = [shuffle_array[j],shuffle_array[i]];
                
            }
             return(shuffle_array);
        }
        



        function askQuestion(questions: Question[], index: number) {
            if (index >= questions.length) {
                console.log('Quiz completed!');
                return;
            }
        
            const question = questions[index];
        
            inquirer
                .prompt({
                    type: 'input',
                    name: 'userAnswer',
                    message: question.question
                })
                .then((answers) => {
                    const userAnswer = (answers as any).userAnswer.trim().toLowerCase();
        
                    if (userAnswer === question.answer.toLowerCase()) {
                        console.log('Correct!');
                    } else {
                        console.log('Incorrect. The correct answer is:', question.answer);
                    }
        
                    askQuestion(questions, index + 1);
                })
                .catch((error) => {
                    console.error('Error occurred while prompting:', error);
                });
        }
        
        // Shuffle the questions array before displaying them
        questions = shuffle(questions);
        
        askQuestion(questions, 0);
        

     }

     
        
    



    
} else if(lang.language === "Python(Data Analysis)"){
    
    
    //Now giving questions python(data analysis):language , patern : MCQs
    
    const pattern_ask = await inquirer.prompt ([{
        name : "pat" ,
        type : "list" ,
        message : pattern,
        choices : ["MCQs" , "Fill in the blanks"]
     }]);
     if (pattern_ask.pat === "MCQs"){
        const quiz_mcq_analysis =  await inquirer.prompt([
            {
                name : "q1",
                type : "list",
                message : "Q1 : 1. What is the purpose of using Python for data analysis?",
                choices :[ "A) To create graphs and charts",
                           "B) To extract insights from raw data",
                           "C) To write reports on data findings",
                           "D) To automate data entry tasks"
                        ]
            },
            {
                name : "q2",
                type : "list",
                message : "Q2. Which library is commonly used for data analysis in Python? ",
                choices :["A) Matplotlib" , "B) Django" , "C) Flask" , "D) Pandas"]

            },
            {
                name : "q3",
                type : "list",
                message : "Q3 : What is Pandas used for in data analysis? " ,
                choices :["A) Data visualization" , "B) Data cleaning and manipulation" , "C) Machine learning algorithms" , "D) Web scraping"]
            },
            {
                name : "q4",
                type : "list",
                message : "Q4 : How can you read a CSV file in Python using Pandas?",
                choices :["A) pd.read_csv('file.csv')" , "B) pd.open_csv('file.csv')" , "C) pd.load_csv('file.csv')" , "D) pd.save_csv('file.csv')"]
            },
            {
                name : "q5",
                type : "list",
                message : "Q5 : What is the purpose of using Matplotlib in data analysis? ",
                choices :["A) To perform statistical tests" , "B) To automate data cleaning tasks " , " C) To create visualizations like charts and graphs" , "D) To extract insights from text data."]
            }
    ]);



    
   
    if (quiz_mcq_analysis.q1 === "B) To extract insights from raw data" ){
        console.log("Q1 : Correct");
        score++;
        
        
    }else {
        console.log("Q1 : Incorrect ");
    }
    if (quiz_mcq_analysis.q2 === "D) Pandas" ){
        console.log("Q2 : Correct");
        score++;
        
        
    }else {
        console.log("Q2 : Incorrect ");
    }

    if (quiz_mcq_analysis.q3 === "B) Data cleaning and manipulation" ){
        console.log("Q3 : Correct");
        score++;
        
        
    }else {
        console.log("Q3 : Incorrect ");
    } 

    if (quiz_mcq_analysis.q4 === "A) pd.read_csv('file.csv')"){
        console.log("Q4 : Correct");
        score++;
        
        
    }else {
        console.log("Q4 : Incorrect ");
    } 


    if (quiz_mcq_analysis.q5 === " C) To create visualizations like charts and graphs"){
        console.log("Q5 : Correct");
        score++;
        
        
    }else {
        console.log("Q5 : Incorrect ");
    } 
    console.log(`You have given  : ${score} answers correct out of ${sc} `);
    



    
     }else if(pattern_ask.pat === "Fill in the blanks"){
        
interface Question {
    question: string;
    answer: string;
}

let questions: Question[] = [
    { question: 'Q: To get a summary of the DataFrame including the count, mean, and standard deviation, you use the ______ method.', answer: 'describe()' },
    { question: "A The method to remove missing values from a DataFrame is ______.", answer: 'dropna()' },
    { question: 'To compute the mean of a DataFrame column, you use the ______ method.', answer: 'mean()' },
    { question: 'Q: To save a DataFrame to a CSV file, you use the ______ method.', answer: 'to_csv()'},
    {question: ' To get a summary of the DataFrame including the count, mean, and standard deviation, you use the ______ method.', answer: 'describe()'}
];

// // Fisher-Yates Shuffle Algorithm
// function shuffleQuestions(array: Question[]): Question[] {
//     return array.sort(() => Math.random() - 0.5);
// }
console.log(chalk.bold.blackBright("\t dropna() , " , "describe() , ", "mean() , " , "to_csv() , " , "describe() "));
        console.log("you have to answer from above list "+chalk.red.bold(" WARNING: Write as they are  written otherwise they will consider it wrong\n"));

function shuffle(shuffle_array:Question[]):Question[]{
    for(let i=shuffle_array.length - 1 ; i > 0 ; i--){
        //random value exclude last value that's y we add +1
        // in bracket 
        const j =Math.floor( Math.random() * (i+1));
        // console.log(i,j);
        
         [shuffle_array[i] ,shuffle_array[j]] = [shuffle_array[j],shuffle_array[i]];
        
    }
     return(shuffle_array);
}


function askQuestion(questions: Question[], index: number) {
    if (index >= questions.length) {
        console.log('Quiz completed!');
        return;
    }

    const question = questions[index];

    inquirer
        .prompt({
            type: 'input',
            name: 'userAnswer',
            message: question.question
        })
        .then((answers) => {
            const userAnswer = (answers as any).userAnswer.trim().toLowerCase();

            if (userAnswer === question.answer.toLowerCase()) {
                console.log('Correct!');
                
            } else {
                console.log('Incorrect. The correct answer is:', question.answer);
            }

            askQuestion(questions, index + 1);
        })
        .catch((error) => {
            console.error('Error occurred while prompting:', error);
        });
}

// Shuffle the questions array before displaying them
questions = shuffle(questions);

askQuestion(questions, 0);

     }
     
}



























