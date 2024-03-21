import { left } from "./info1.js"
import { right } from "./image.js"

const data = {
    title : "Why do wee need to take care of deogs?" ,
    title1 :"Benifits of taking good care of dogs" ,
    para : "Taking care of dogs is important because they provide companionship, offer health benefits such as reducing stress and increasing physical activity, teach responsibility and commitment, help with socialization, contribute to safety and security, and can serve as emotional support and therapy animals." ,
    para1 : "The benefits of taking care of a dog include companionship, improved physical and mental health, enhanced socialization skills, a sense of responsibility, increased safety and security, and the potential for emotional support and therapy." ,
    button1 : "Contact us" ,
    button2 : "About us" ,
    button3 : "Contact us" ,
    button4 : "About us" ,
    myImage : "dog.jpg"

}

const { title, title1, para, para1, button1,  button2, button3, button4, myImage } = data

let container = document.getElementById("container")

container.append(left(title, title1, para, para1, button1, button2, button3, button4))
container.append(right(myImage))