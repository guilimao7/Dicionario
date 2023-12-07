const audio_ing = document.querySelector(".audio_ing")
const audio_br = document.querySelector(".audio_br")
const conteudos = {
    Acquainted: {
        palavra_ing: 'Acquainted',
        desc_ing: 'Make someone aware of or familiar with.',
        palavra_br: 'Familiarizado',
        desc_br: 'Entrar no conhecimento corrente de alguma coisa; acostumar-se.',
        audio_ing: 'assets/Acquainted_audio.mp3',
        audio_br: 'assets/Familiarizado_audio.mp3'
    },
    Callow: {
        palavra_ing: 'Callow',
        desc_ing: '(of a young person) inexperienced and immature.',
        palavra_br: 'Inexperiente',
        desc_br: 'Que ou aquele que não tem a experiência ou a prática de algo; inexperto.',
        audio_ing: 'assets/Callow_audio.mp3',
        audio_br: 'assets/Inexperiente_audio.mp3'
    },
    Lofty: {
        palavra_ing: 'Lofty',
        desc_ing: 'Of imposing height.',
        palavra_br: 'Elevado',
        desc_br: 'Que se eleva ou elevou.',
        audio_ing: 'assets/Lofty_audio.mp3',
        audio_br: 'assets/Elevado_audio.mp3'
    },
    Perish: {
        palavra_ing: 'Perish',
        desc_ing: 'Suffer death, typically in a violent, sudden, or untimely way.',
        palavra_br: 'Perecer',
        desc_br: 'Deixar de viver; morrer (esp. de morte prematura ou violenta).',
        audio_ing: 'assets/Perish_audio.mp3',
        audio_br: 'assets/Perecer_audio.mp3'
    },
    Pittance: {
        palavra_ing: 'Pittance',
        desc_ing: 'A very small or inadequate amount of money paid to someone as an allowance or wage.',
        palavra_br: 'Ninharia',
        desc_br: 'Coisa muito pequena, ger. insignificante; argueiro.',
        audio_ing: 'assets/Pittance_audio.mp3',
        audio_br: 'assets/Ninharia_audio.mp3'
    },
    Seclude: {
        palavra_ing: 'Seclude',
        desc_ing: 'Keep (someone) away from other people.',
        palavra_br: 'Isolar',
        desc_br: 'Pôr(-se) à parte, afastar(-se) em sentido material, intelectual ou espiritual; separar(-se',
        audio_ing: 'assets/Seclude_audio.mp3',
        audio_br: 'assets/Isolar_audio.mp3'
    },
    Mayhem: {
        palavra_ing: 'Mayhem',
        desc_ing: 'Violent or damaging disorder; chaos.',
        palavra_br: 'Caos',
        desc_br: 'Mistura de coisas ou ideias em total desarmonia; confusão.',
        audio_ing: 'assets/Mayhem_audio.mp3',
        audio_br: 'assets/Caos_audio.mp3'
    },
    Ludicrous: {
        palavra_ing: 'Ludicrous',
        desc_ing: 'So foolish, unreasonable, or out of place as to be amusing; ridiculous.',
        palavra_br: 'Ridículo',
        desc_br: 'Que provoca riso, escárnio ou zombaria.',
        audio_ing: 'assets/Ludicrous_audio.mp3',
        audio_br: 'assets/Ridiculo_audio.mp3'
    },
    Kludge: {
        palavra_ing: 'Kludge',
        desc_ing: 'An ill-assorted collection of parts assembled to fulfill a particular purpose.',
        palavra_br: 'Erro',
        desc_br: 'Ato ou efeito de errar; eu.',
        audio_ing: 'assets/Kludge_audio.mp3',
        audio_br: 'assets/Erro_audio.mp3'
    },
    Reef: {
        palavra_ing: 'Reef',
        desc_ing: 'A ridge of jagged rock, coral, or sand just above or below the surface of the sea.',
        palavra_br: 'Recife',
        desc_br: 'Formação rochosa, à flor da água ou submersa, ger. próxima à costa, em áreas de pouca profundidade; arrecife.',
        audio_ing: 'assets/Reef_audio.mp3',
        audio_br: 'assets/Recife_audio.mp3'
    },
}

const audioBtn_br = document.querySelector(".audioBtn_br")
audioBtn_br.addEventListener("click", function(){
    audio_br.play()
})

const audioBtn_ing = document.querySelector(".audioBtn_ing")
audioBtn_ing.addEventListener("click", function(){
    audio_ing.play()
})

const backdrop = document.querySelector(".backdrop")
// const mudarModal = () => {
//     const modal = document.getElementById("modal");
//     if(modal.style.display != 'none') {
//         backdrop.style.display = "block"
//         modal.style.display = 'flex';
//     } else {
//         backdrop.style.display = "none"
//         modal.style.display = 'none';
//     }
// };

// document.querySelector('#modal').style.display = "flex"

const btn = document.querySelectorAll('.modalBtn');
for (let pos = 0; pos < btn.length; pos+=1) {
    btn[pos].addEventListener('click', (e) => {
        backdrop.style.display = "block"
        modal.style.display = "flex"
        atualizarPalavras(e.target.textContent)
    });
}

const modal = document.querySelector('#modal');
// window.addEventListener('click', function(event) {
//     if (event.target === modal) {
//         mudarModal()
//     };
// })

function atualizarPalavras(palavra) {
    const palavra_ing = document.querySelector(".palavra_ing")
    const palavra_br = document.querySelector(".palavra_br")
    const desc_ing = document.querySelector(".desc_ing")
    const desc_br = document.querySelector(".desc_br")
    palavra_ing.textContent = conteudos[palavra].palavra_ing;
    palavra_br.textContent = conteudos[palavra].palavra_br;
    desc_ing.textContent = conteudos[palavra].desc_ing;
    desc_br.textContent = conteudos[palavra].desc_br;
    audio_ing.src = conteudos[palavra].audio_ing
    audio_br.src = conteudos[palavra].audio_br

}

const titulo_modal = document.querySelector("#titulo_modal");

backdrop.addEventListener("click", (e) => {
    backdrop.style.display = "none"
    modal.style.display = "none"
})

// titulo_modal.textContent = conteudos[0].titulo
