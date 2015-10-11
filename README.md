# jaiminho

> Rest application for zip codes from Brazil.

![](assets/jaiminho.jpg)

## Dependencies

## Using Docker

If you want to use docker, just install it and run in this directory:

```sh
./jaiminho build
```

After that, install NodeJS packages:

```sh
./jaiminho install
```

And, after installation, run:

```sh
./jaiminho start
```

To see all commands:

```sh
./jaiminho help
```

To run in debug mode:

```sh
./jaiminho debug
```

To run tests:

```sh
./jaiminho test
```

To run a specific command:

```sh
./jaiminho run <command>
```

**Note:** If above commands don't work, you need to give execution permission for the `./jaiminho` file:


```sh
chmod +x ./jaiminho
```

## Without using docker

You need to install `nodemon` and `istanbul` globally:

```sh
[sudo] npm i -g nodemon istanbul 
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
