<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/README.css">
    <!-- Inclua a folha de estilo do Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css" integrity="sha384-pzjwDFF3mFDOs5M+Of+Exm4Ck5wOWv+PgekcFVn2h57w2vaYav82T6vqz/FfR0XXM" crossorigin="anonymous">
</head>
<body>
    <header>
        <div class="personal-info">
            <div class="card">
                <p class="name">Matheus Rodrigues Araujo Santos</p>
                <p>Brasileiro, Solteiro, 19 Anos</p>
                <p>R. Doutor Leão de Araújo Novaes, São Paulo – 04854-050</p>
                <p>E-mail: mathrodrigues.araujo@gmail.com</p>
                <p>Telefone: (11) 94055 – 6783</p>
            </div>
        </div>
        <div class="buttons">
            <a class="btn linkedin" href="https://www.linkedin.com/in/matheus-rodrigues-754600222/?originalSubdomain=br">
                <i class="fab fa-linkedin"></i> LinkedIn
            </a>
        </div>
    </header>
    <main>
        <section class="card">
            <h2>Objetivos</h2>
            <p>Busco oportunidades para adquirir experiência e aprimorar minhas habilidades em diversas áreas. Estou disposto a contribuir para o sucesso da empresa em qualquer função, demonstrando paixão pelo aprendizado e um forte desejo de crescimento profissional. Estou entusiasmado para fazer parte de uma equipe dinâmica e contribuir para o crescimento da organização.</p>
        </section>
        <section class="card">
            <h2>Formação</h2>
            <ul>
                <li>Finalizado – Ensino Médio – E.E ROBERTO MANGE (período noturno)</li>
                <li>Cursando – Ensino Superior – SENAC SANTO AMARO (período noturno)</li>
            </ul>
        </section>
        <section class="card">
            <h2>Experiências</h2>
            <p>Instrutor informática, IU EDUCATION – 24/01/2022 – 05/06/2022</p>
            <ul>
                <li>Responsável pela criação de documentos avaliativos.</li>
                <li>Supervisão de alunos presenciais e remotos.</li>
                <li>Instrução e suporte no ensino de informática.</li>
            </ul>
        </section>
        <section class="card">
            <h2>Habilidades</h2>
            <ul>
                <li>Pacote Office: Avançado</li>
                <li>Linguagens de Programação: Java, Python, HTML, C# (Básico)</li>
                <li>Design: Básico</li>
                <li>Scrum Master: Fundamentals</li>
            </ul>
        </section>
        <section class="card">
            <h2>Qualidades</h2>
            <ul>
                <li>Trabalho em equipe</li>
                <li>Organização</li>
            </ul>
        </section>
    </main>
    <style>
        
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #333; 
    color: white;
}

header {
    background-color: #375f8a;
    color: #fff;
    text-align: center;
    padding: 2rem;
}

h1 {
    font-size: 2rem;
    margin: 0;
}

.personal-info {
    background-color: #1a1a1a; 
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
    margin-top: 1rem;
}

.personal-info p {
    margin: 0;
}

.buttons {
    margin-top: 1rem;
}


.btn {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    margin-right: 10px;
}

.linkedin {
    background-color: #0077B5;
    color: #fff;
}

.github {
    background-color: white;
    color: purple;
}


.fa-linkedin, .fa-github {
    margin-right: 5px;
}


section {
    margin-bottom: 2rem;
    text-align: center;
}

h2 {
    text-align: center;
    font-size: 1.5rem;
    color: #007BFF; 
}


ul, li {
    list-style-type: none;
    padding: 0;
}


@media (max-width: 768px) {
    main {
        padding: 1rem;
    }
}


.personal-info {
    background-color: #1a1a1a; 
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.personal-info p {
    margin: 0;
}


.card {
    background-color: #fff;
    color: #333;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 20px;
    transition: transform 0.2s;
}

.card:hover {
    transform: scale(1.02);
}


.name {
    font-size: 1.5rem;
    font-weight: bold;
}
    </style>
    
</body>
</html>
