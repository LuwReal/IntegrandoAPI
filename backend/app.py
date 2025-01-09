from flask_cors import CORS
from flask import Flask, jsonify

app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return "Bem-vindo ao Flask!"

AttackonTitan = {
    'titulo':'Attack on Titan (Shingeki no Kyojin)',
    'sinopse':'A humanidade vive dentro de muralhas gigantes para se proteger dos titãs, criaturas colossais que devoram humanos. Eren Yeager, Mikasa Ackerman e Armin Arlert lutam para sobreviver e descobrir os segredos do mundo.',
    'genero':'Ação, Drama, Fantasia Sombria',
    'dataDeLancamento':'6 de abril de 2013',
    'classificacaoIndicativa':'16+ (violência e temas intensos)',
    'personagensPrincipais':'Eren Yeager, Mikasa Ackerman, Armin Arlert, Levi Ackerman',
    'temporada':'Temporadas: 4 (87 episódios no total)',
    }
DemonSlayer = {
    'titulo':'Demon Slayer (Kimetsu no Yaiba)',
    'sinopse':'Após a tragédia que destrói sua família, Tanjiro Kamado embarca em uma jornada para salvar sua irmã Nezuko, transformada em demônio, e enfrentar monstros em um mundo cheio de desafios.',
    'genero':'Ação, Fantasia, Sobrenatural',
    'dataDeLancamento':'6 de abril de 2019',
    'classificacaoIndicativa':'14+ (violência moderada)',
    'personagensPrincipais':'Tanjiro Kamado, Nezuko Kamado, Zenitsu Agatsuma, Inosuke Hashibira',
    'temporada':'Temporadas: 3 (53 episódios até agora)',
}

OnePiece = {
    'titulo':'One Piece',
    'sinopse':'Luffy e sua tripulação de piratas partem em busca do One Piece, o tesouro lendário que tornará Luffy o Rei dos Piratas, enquanto enfrentam inimigos e descobrem segredos do mundo.',
    'genero':'Aventura, Comédia, Fantasia',
    'dataDeLancamento':' 20 de outubro de 1999',
    'classificacaoIndicativa':'Livre (12+ em alguns episódios devido à violência)',
    'personagensPrincipais':'Monkey D. Luffy, Roronoa Zoro, Nami, Usopp, Sanji, Tony Tony Chopper',
    'temporada':'Temporadas: Em andamento (mais de 1.080 episódios)',
}

Naruto = {
    'titulo':'Naruto',
    'sinopse':'Naruto Uzumaki, um jovem ninja com um sonho de se tornar Hokage, luta para conquistar o respeito de sua vila enquanto enfrenta desafios, vilões e descobre seu próprio poder.',
    'genero':'Ação, Aventura, Artes Marciais',
    'dataDeLancamento':'3 de outubro de 2002',
    'classificacaoIndicativa':'12+',
    'personagensPrincipais':'Naruto Uzumaki, Sasuke Uchiha, Sakura Haruno, Kakashi Hatake',
    'temporada':'Temporadas: 2 principais (Naruto e Naruto Shippuden, total de 720 episódios)',
}
MyHeroAcademia = {
    'titulo':'My Hero Academia (Boku no Hero Academia)',
    'sinopse':'Em um mundo onde a maioria das pessoas tem poderes chamados "Quirks", Izuku Midoriya, um garoto sem poderes, recebe o poder de seu herói All Might e se matricula em uma escola para heróis.',
    'genero':'Ação, Comédia, Super-Heróis',
    'dataDeLancamento':'3 de abril de 2016',
    'classificacaoIndicativa':'12+',
    'personagensPrincipais':'Izuku Midoriya, Katsuki Bakugo, Ochaco Uraraka, Shoto Todoroki',
    'temporada':'Temporadas: 6 (com mais de 130 episódios)',
}
@app.route('/api/animes', methods=['GET'])
def banner_Anime():
    return jsonify([AttackonTitan, DemonSlayer, OnePiece, Naruto, MyHeroAcademia])


@app.route('/api/hello', methods=['GET'])
def hello_world():
    data = {
        'nome':'lucas'
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)