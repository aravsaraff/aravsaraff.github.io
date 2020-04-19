// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 // 	
				// grubmonkeys- when hunger strikes and you want the best fries 
				// jeopardy- wanna be a criminal?
				// nails- why use fake when you can paint
				// publicity- acknowledge the message 
				// Bag- the world is here 
				// Carbonara- fixed order
				// Apixelgrid- revive the aesthetic
				// Agatha- whodunnit
				// KabirSingh- watch again
				// Agumbe- bhoom riders
				// Kavaledurga- call the goddess of war to her castle
				// Susubae- bathroom rendevous
				// Naveen- front row laughs
				// Muscat- home
				// Streaks- better maintained than broken
				// Begums- biryani ho toh _ ki
				// Hakuna- first poison is best poison
				// Facemasks- wear it and youre ugly, remove it and youre pretty
				// Waiwai- end sems again
				// PaneerChilli- Apoorva makes a living out of it
				{
					clue: "better maintained than broken",
					answer: "streaks",
					position: 1,
					orientation: "down",
					startx: 6,
					starty: 1
				},
				{
					clue: "why use fake when you can paint",
					answer: "nails",
					position: 2,
					orientation: "down",
					startx: 2,
					starty: 3
				},
				{
					clue: "wear it and youre ugly, remove it and youre pretty",
					answer: "facemasks",
					position: 3,
					orientation: "down",
					startx: 4,
					starty: 3
				},
				{
					clue: "call the goddess of war to her castle",
					answer: "kavaledurga",
					position: 4,
					orientation: "across",
					startx: 1,
					starty: 4
				},
				{
					clue: "First poison is best poison",
					answer: "hakuna",
					position: 5,
					orientation: "down",
					startx: 10,
					starty: 6
				},
				{
					clue: "Front row laughs",
					answer: "naveen",
					position: 6,
					orientation: "across",
					startx: 9,
					starty: 7
				},
				{
					clue: "Wanna be a criminal?",
					answer: "jeopardy",
					position: 7,
					orientation: "down",
					startx: 15,
					starty: 8
				},
				{
					clue: "Whodunnit?",
					answer: "agatha",
					position: 8,
					orientation: "down",
					startx: 6,
					starty: 9
				},
				{
					clue: "Bathroom rendevous",
					answer: "susubae",
					position: 9,
					orientation: "across",
					startx: 9,
					starty: 9
				},
				{
					clue: "Home",
					answer: "muscat",
					position: 10,
					orientation: "across",
					startx: 2,
					starty: 11
				},
				{
					clue: "Fixed order from Italy",
					answer: "carbonara",
					position: 11,
					orientation: "down",
					startx: 22,
					starty: 11
				},
				{
					clue: "Biryani ho toh ___ ki",
					answer: "begums",
					position: 12,
					orientation: "down",
					startx: 12,
					starty: 12
				},
				{
					clue: "Bhoom riders",
					answer: "agumbe",
					position: 13,
					orientation: "across",
					startx: 15,
					starty: 12
				},
				{
					clue: "The world is here",
					answer: "bag",
					position: 14,
					orientation: "down",
					startx: 19,
					starty: 12
				},
				{
					clue: "Apoorva makes a living out of it",
					answer: "paneerchilli",
					position: 15,
					orientation: "down",
					startx: 25,
					starty: 12
				},
				{
					clue: "Revive the aesthetic",
					answer: "apixelgrid",
					position: 16,
					orientation: "across",
					startx: 6,
					starty: 14
				},
				{
					clue: "When hunger strikes and you want the best fries",
					answer: "grubmonkeys",
					position: 17,
					orientation: "across",
					startx: 19,
					starty: 14
				},
				{
					clue: "Watch again",
					answer: "kabirsingh",
					position: 18,
					orientation: "across",
					startx: 21,
					starty: 17
				},
				{
					clue: "Acknowledge the message",
					answer: "publicity",
					position: 19,
					orientation: "across",
					startx: 21,
					starty: 21
				},
				{
					clue: "Go to place when you cried as a kid",
					answer: "fountain",
					position: 20,
					orientation: "across",
					startx: 19,
					starty: 23
				},
				{
					clue: "Childhood nickname",
					answer: "ghata",
					position: 21,
					orientation: "across",
					startx: 18,
					starty: 19
				}

			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
