const MyClass = require("./MyClass");

const mc = new MyClass();

try {
    mc.showSeasonName('jjj');

    mc.showSeasonName('may');

    console.log('Hello World');

} catch (e) {
    console.log('Exception caught');
}

try {
    mc.showSeasonName('may');
} catch (e) {
    console.log('Exception caught');
} finally {
    console.log('In finally block');
}



/**
 * try catch block
 *  -> catch blocks are used to handle exceptions
 * 
 * in try block :
 *  -> we write the code which may/mayNot throw exception
 * in the catch block: 
 *  -> we write code to execute in case the exception happens.
 * 
 * In the try block we may write multiple lines of codes.
 *  as soon as the exception happens in the try-block ; 
 *  javascript jumps into catch block
 * 
 * If no-exception occurs in try-block, javascript will never go in catch block
 * 
 * try {
 *      code which may/mayNot throw exception
 * } catch (e) {
 *      code to excecute incase exception happens in try-block
 * }
 * 
 * JavaScript vs Java
 * 
 * In JS we can have only one catch block with a try block
 * In Java we can have multiple catch blocks with one try block.
 * 
 * try {
 *      code
 * } catch (e1) {
 * 
 * } catch (e2) {
 * 
 * } finally {
 *      code to execute finally block
 * }
 * 
 * finally : an optional code block associated with the try-catch blocks, code in finally block 
 * will always execute whether an exception is caught or not
 * 
 * finally vs final(const)
 *      final : is a keyword in JAVA to create a constant variable 
 *      in JS we use 'const' for the same purpose
 * 
 *      finally : is a code block associate with try-catch block
 *      its an optional code block
 * 
 * whenever we create an external system 
 *      1.) create connection
 *      2.) use the external system based on the needs
 *      3.) (if connection exists) disconnect with external system (because it is utilizing your resources)
 *      4.) 
 * 
 */