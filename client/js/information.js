var info = {
    firstName: "Edwin",
    lastName: "Feliz",
    description: `I am a web developer based in the United States and
                 I have been building a web application website for
                 years, which brings my employee's ideas to life. I
                 help convert a vision and an idea into meaningful
                 web pages. Take your time to look at my portfolio
                 and projects. Let see if we can work together on
                 your next idea.`,
}


$("#name").text(`${info.firstName} ${info.lastName}`)
$("#nameTitle").text(`${info.firstName} ${info.lastName}`)
$("#aboutMeDescription").text(`${info.description}`)