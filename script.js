// DARK MODE
const toggle = document.getElementById("toggleDark");

toggle.onclick = () => {
    document.body.classList.toggle("dark");
};


// SAIBA MAIS
document.querySelectorAll(".saibaMais").forEach(btn => {
    btn.onclick = () => {
        const p = btn.nextElementSibling;

        if(p.innerHTML === ""){
            p.innerHTML = "A capoeira é uma expressão cultural completa com luta, dança, música e história de resistência.";
            btn.textContent = "Mostrar menos";
        } else {
            p.innerHTML = "";
            btn.textContent = "Saiba mais";
        }
    }
});


// LIKE
document.querySelectorAll(".like").forEach(btn => {
    let count = 0;

    btn.onclick = () => {
        count++;
        btn.querySelector("span").textContent = count;
    }
});


// COMENTÁRIOS
const lista = document.getElementById("listaComentarios");

document.getElementById("enviar").onclick = () => {
    const nome = document.getElementById("nome").value;
    const texto = document.getElementById("comentario").value;

    if(nome && texto){
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<strong>${nome}</strong><p>${texto}</p>`;
        lista.appendChild(div);

        localStorage.setItem("comentarios", lista.innerHTML);
    }
};

// carregar comentários salvos
lista.innerHTML = localStorage.getItem("comentarios") || "";


// VOLTAR AO TOPO
const topo = document.getElementById("topo");

window.onscroll = () => {
    topo.style.display = window.scrollY > 200 ? "block" : "none";
};

topo.onclick = () => {
    window.scrollTo({ top:0, behavior:"smooth" });
};
