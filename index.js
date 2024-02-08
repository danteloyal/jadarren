console.log('hello bbc');

function entervalidEmail(email,password) {
    const validEmail ="2100706057@mubs.ac.ug";
    const validPassword = "898990@";

    if (email === validEmail && password === validPassword){
        console.log(` User email is [email],  login successfully!`);
    } else {
        console.log(` Incorrect user credentials!`);
    }
}
entervalidEmail('validEmail','validPassword')
entervalidEmail("2100706057@mubs.ac.ug", '898990@');