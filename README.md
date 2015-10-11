# jaiminho

> Rest application for zip codes from Brazil.

![](assets/jaiminho.jpg)

## Dependencies

## Using Docker

If you want to use docker, just install Docker and run in this directory:

```sh
./jaiminho build
```

And, after installation, run:

```sh
./jaiminho start
```

To run a specific command:

```sh
./jaiminho run <command>
```

**Note:** `./jaiminho` file needs to have permission to execute:

```sh
chmod +x ./jaiminho
```

## Without using docker

You need to install `nodemon` and `babel` globally:

```sh
[sudo] npm i -g nodemon babel
```

Now, you need to install project dependencies with command:

```sh
npm i
```

## Running

Run jaiminho in debug mode with command:

```sh
npm run nodemon
```

## Data model

jaiminho accepts the following fields:

- cep
- tipoDeLogradouro
- logradouro
- bairro
- cidade
- estado

## Adding zip codes

```sh
curl -H "Content-Type: application/json" -X POST -d '{"cep":"76873274","tipoDeLogradouro":"Rua","logradouro":"Juriti","bairro":"Setor 02","cidade":"Ariquemes","estado":"RO"}' http://localhost:3000/cep
```

**Response:**

```sh
'{"message":"76873274 succesfully inserted!"}'
```

## Getting zip codes

```sh
curl -X GET http://localhost:3000/cep/76873274
```

**Response:**

```sh
'{"cep":"76873274","tipoDeLogradouro":"Rua","logradouro":"Juriti","bairro":"Setor 02","cidade":"Ariquemes","estado":"RO"}'
```

**Error response:**

```sh
'{"error":"CEP 76873274 not found"}'
```

## Updating an existent zip code

```sh
curl -H "Content-Type: application/json" -X PUT -d '{"cep":"76873274","tipoDeLogradouro":"Rua","logradouro":"Juritingueta","bairro":"Setor 02","cidade":"Ariquemes","estado":"RO"}' http://localhost:3000/cep/76873274
```

**Response:**

```sh
'{"message":"76873274 successfully updated!"}'
```

## Deleting an existent zip code

```sh
curl -X DELETE http://localhost:3000/cep/76873274
```

**Response:**

```sh
'{"message":"76873274 succesfully removed!"}'
```
