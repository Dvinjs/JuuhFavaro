function getProjects(){
    const urlGitHub = 'https://github.com/users/Dvinjs/repos'
    
    fetch(urlGitHub, {

        method: 'GET'
    })
    .then((Response) => Response.json())
    .then((Response) => {
        console.log(Response)
    })
    .catch((e) =>{
        console.logo(e)
    })


}

getProjects()

