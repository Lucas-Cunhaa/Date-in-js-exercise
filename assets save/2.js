
    const h1 = document.querySelector(".date");
    const data = new Date();
    h1.innerHTML = data.toLocaleDateString("pt-BR", { dateStyle: "full" ,  timeStyle: "short"});
