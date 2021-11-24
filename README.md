# Encurtador-de-URL
Uma simples API para encurtar URLs.

## Endpoints

### Get /
Esse endpoint é o responsável por renderizar a index.

#### Parametros
Nenhum.

### Post /criar
Esse endpoint é o responsável por inserir a URL no banco de dados, junto com o código.
#### Parametros
Url e o código

### Get /:codigo

Esse endpoint é o responsável por redirecionar o usuário para o site.
#### Parametros
Código
