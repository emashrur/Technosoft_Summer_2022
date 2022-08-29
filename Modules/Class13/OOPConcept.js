/**
 * OOP Concept
 *  -> object oriented programming
 * 
 * 1.) Encapsulation
 *      -> Wrapping up code in a single unit (i.e. Class)
 *      -> to implement encapsulation concept, we create a class and write code in it.
 * 2.) Abstraction
 *      -> Hiding unnecessary information from user 
 *      -> To implement abstraction, we create functions.
 * 
 * 3.) Inheritance
 *      -> to implement inheritance we need to have a parent-child relationship between two classes.
 *      -> we use "extends" keyword with ChildClass, in order to create parent-child relationship between two classes.
 *      -> childClass gets access to parentClass/grandParentClass variables and functions.
 *      -> we can not extend more than 1 class (why? - Diamond Problem)
 * 
 * 4.) Polymorphism
 *      -> More than one form
 *      -> In general there are two types of Polymorphism
 *          1.) Compile Time Polymorphism (static binding)
 *              -> Java compiles entire project file, during that zip process if there is any error, the file will not run.
 *              Does not exist in JavaScript.
 *              -> in a class when we have two or more methods with the same name but different input parameters.
 *              -> JavaScript does not allow this because it uses run time polymorphism.
 *              -> ways to set different input parameters :
 *                  -> different number of input parameters
 *                  -> different data type of input parameters
 *                  -> different sequence of input parameters (regardless of datatype)
 * 
 *          2.) Run Time Polymorphism (dynamic binding)
 *              -> this can exist only in inheritance set up
 *              -> when we have method in childClass with SAME name and SAME input parameters
 *              -> 
 *      
 * 
 * 
 * Faculty
 * -> showMyDetails
 * -> submitDocuments
 * -> orderBooks
 * 
 * 
 * STATIC -> variable shared between objects
 *      -> if object 1 changes value of variable, it should be applied to object 2 as well. 
 */