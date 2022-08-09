class helpingFunctions{

    static toTitleCase (sentence) {
        let converted = '';
        const sentenceWords = sentence.toLowerCase().split(' ');
        for (let i=0 ; i <= sentenceWords.length-1 ; i++ ) {
            converted = converted + sentenceWords[i].substring(0,1).toUpperCase() + sentenceWords[i].substring(1) + " ";
        }
        return converted.trim();
    }
    
    }
    
    module.exports = helpingFunctions; 