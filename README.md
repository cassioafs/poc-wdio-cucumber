# POC Webdriver.IO + Cucumber

Após clonar o projeto execute os comandos abaixo:

## Pré requisitos
- Node
- Chrome 

## Instalar as dependências do projeto
```
npm install
```

## Instalar selenium standalone
```
npm run selenium-postinstall
```

## Inciar o selenium
```
npm run selenium-start
```

## Executar os testes
```
npm run tests
```

## Chrome Headless 
Os testes estão configurados para serem executados em modo headless, ou seja, sem abrir o navegador.
Essa configuração fica no aquivo [wdio.conf.js](https://github.com/cassioafs/poc-wdio-cucumber/blob/master/wdio.conf.js)

```
capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--disable-gpu', '--window-size=1280,800']
        },
    }],
```



# TODO
- Criar PageObject
- Rodar os testes no docker

