class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){
        return input.substring(0,3);
    }

    getSuffix(input){
        return input.substring(input.length - 3, input.length);
    }

    getMiddleCharacter(input){
        // let inputValue = input;
        // return inputValue.substring(4, 5);

        let position;
        let length;

        if(input.length % 2 == 1) {
            position = input.length / 2;
            length = 1;
        } else {
            position = input.length / 2 - 1;
            length = 2;
        }

        return input.substring(position, position + length)
    }

    getFirstWord(input){
        return input.substring(0, input.indexOf(" "));
    }
    
    getSecondWord(input){
        var n = input.split(" ");
        return n[1];
    }
    
    reverse(input){
        
        // return input.split("").reverse().join("");

        let reverse = ''
        for (let i = input.length - 1; i >= 0; i--) {
            reverse += input[i]
        }
        return reverse
    }

    
}

module.exports = StrangerStrings;