// Quiz Data
const quizData = {
    general: [
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            correct: 2
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1
        },
        {
            question: "What is the largest mammal in the world?",
            options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
            correct: 1
        },
        {
            question: "In which year did World War II end?",
            options: ["1944", "1945", "1946", "1947"],
            correct: 1
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correct: 2
        },
        {
            question: "Which language has the most native speakers worldwide?",
            options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
            correct: 2
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
            correct: 2
        },
        {
            question: "Who wrote the novel '1984'?",
            options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
            correct: 1
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            correct: 2
        },
        {
            question: "Which ocean is the largest?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            correct: 3
        }
    ],
    science: [
        {
            question: "What is the speed of light in vacuum?",
            options: ["299,792,458 m/s", "300,000,000 m/s", "186,000 mi/s", "All of the above"],
            correct: 0
        },
        {
            question: "Which element has the atomic number 1?",
            options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
            correct: 1
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
            correct: 2
        },
        {
            question: "Which law states that energy cannot be created or destroyed?",
            options: ["Newton's First Law", "Law of Conservation of Energy", "Ohm's Law", "Boyle's Law"],
            correct: 1
        },
        {
            question: "What is the pH of pure water?",
            options: ["6", "7", "8", "9"],
            correct: 1
        },
        {
            question: "Which gas makes up about 78% of Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
            correct: 2
        },
        {
            question: "What is the study of earthquakes called?",
            options: ["Meteorology", "Seismology", "Geology", "Volcanology"],
            correct: 1
        },
        {
            question: "Which scientist developed the theory of evolution?",
            options: ["Isaac Newton", "Albert Einstein", "Charles Darwin", "Gregor Mendel"],
            correct: 2
        },
        {
            question: "What is the chemical formula for water?",
            options: ["H2O", "CO2", "NaCl", "CH4"],
            correct: 0
        },
        {
            question: "Which organ in the human body produces insulin?",
            options: ["Liver", "Kidney", "Pancreas", "Stomach"],
            correct: 2
        }
    ],
    history: [
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
            correct: 1
        },
        {
            question: "In which year did the Berlin Wall fall?",
            options: ["1987", "1988", "1989", "1990"],
            correct: 2
        },
        {
            question: "Which ancient wonder of the world was located in Egypt?",
            options: ["Hanging Gardens", "Colossus of Rhodes", "Great Pyramid of Giza", "Lighthouse of Alexandria"],
            correct: 2
        },
        {
            question: "Who was known as the 'Iron Lady'?",
            options: ["Queen Elizabeth II", "Margaret Thatcher", "Golda Meir", "Indira Gandhi"],
            correct: 1
        },
        {
            question: "The Renaissance period began in which country?",
            options: ["France", "Germany", "Italy", "Spain"],
            correct: 2
        },
        {
            question: "Which empire was ruled by Julius Caesar?",
            options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
            correct: 1
        },
        {
            question: "In which year did the Titanic sink?",
            options: ["1910", "1911", "1912", "1913"],
            correct: 2
        },
        {
            question: "Who invented the printing press?",
            options: ["Leonardo da Vinci", "Johannes Gutenberg", "Galileo Galilei", "Isaac Newton"],
            correct: 1
        },
        {
            question: "Which war was fought between the North and South in America?",
            options: ["Revolutionary War", "World War I", "Civil War", "War of 1812"],
            correct: 2
        },
        {
            question: "Who was the last Pharaoh of Egypt?",
            options: ["Nefertiti", "Cleopatra VII", "Hatshepsut", "Ankhesenamun"],
            correct: 1
        }
    ],
    sports: [
        {
            question: "How many players are on a basketball team on the court at one time?",
            options: ["4", "5", "6", "7"],
            correct: 1
        },
        {
            question: "In which sport would you perform a slam dunk?",
            options: ["Volleyball", "Tennis", "Basketball", "Baseball"],
            correct: 2
        },
        {
            question: "How often are the Summer Olympic Games held?",
            options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
            correct: 2
        },
        {
            question: "Which country has won the most FIFA World Cups?",
            options: ["Germany", "Argentina", "Brazil", "Italy"],
            correct: 2
        },
        {
            question: "What is the maximum score possible in ten-pin bowling?",
            options: ["200", "250", "300", "350"],
            correct: 2
        },
        {
            question: "In tennis, what is it called when the score is 40-40?",
            options: ["Match point", "Deuce", "Advantage", "Set point"],
            correct: 1
        },
        {
            question: "Which sport is known as 'the beautiful game'?",
            options: ["Basketball", "Tennis", "Football/Soccer", "Cricket"],
            correct: 2
        },
        {
            question: "How many holes are there on a standard golf course?",
            options: ["16", "17", "18", "19"],
            correct: 2
        },
        {
            question: "In baseball, how many strikes make an out?",
            options: ["2", "3", "4", "5"],
            correct: 1
        },
        {
            question: "Which swimming stroke is considered the fastest?",
            options: ["Backstroke", "Breaststroke", "Butterfly", "Freestyle"],
            correct: 3
        }
    ]
};