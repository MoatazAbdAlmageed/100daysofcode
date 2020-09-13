const courses = {
    pluralsight: {
        "todo": [
            "01 JavaScript- Getting Started/",
            "02 JavaScript Syntax and Operators/",
            "03 JavaScript Variables and Types/",
            "04 JavaScript Arrays and Collections/",
            "05 Javascript Generators and Iterators/",
            "06 Working with JavaScript Modules/",
            "07 JavaScript Objects, Prototypes, and Classes/",
            "08 JavaScript- Functions/",
            "09 JavaScript Promises and Async Programming/",
            "Building a JavaScript Development Environment/",
            "Creating a Living Style Guide with Sass and Vanilla JavaScript/",
            "Human Readable JavaScript- CodeMash/",
            "JavaScript Build Automation With Gulp.js/",

        ],
        "Done": [

        ]
    },
    Others: {
        "todo": [
            "https://coderbyte.com/starter-course/learn-javascript-in-one-week",
        ],
        "Done": [

        ],
    },
};

/**
 * Functions
 */

function getCourses() {
    return courses;
}


// ReferenceError: dataOfCourses is not defined
// console.log(dataOfCourses);



function sum(x, y) {
    return x + y;
}


const courseData = function dataOfCourses() {
    console.log("dataOfCourses");
};



function logger() {
    console.log("🚀🚀🚀🚀🚀🚀 100 days of javascript");
    console.log('🚀🚀🚀🚀🚀🚀 getCourses()');
    console.log(getCourses());
    console.log('----------------------------------------------------');
    console.log();
    console.log('🚀🚀🚀🚀🚀🚀 courseData');
    console.log(courseData());
    console.log('----------------------------------------------------');
    console.log();
    console.log(sum(2, 5));
}
logger();