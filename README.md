# Automatizacion de la pagina www.nozzmo.com
Se realizo la automatizacion con el lenguaje JavaScript y framework Cypress.js

## Como ejecutar las pruebas automatizadas
Para usar la interfaz grafica se debe ejecutar el comando **npx cypress open**, de esta manera se abrira la interfaz grafica de cypress y se podran correr todos los casos de pruebas que estan en **cypress/e2e**

Para hacerlo por medio de la CLI en el archivo **packge.json** se encuentran los test para realizar las pruebas en diferentes browser **test-chrome** para correrlos en google chrome y **test-edge** para correrlo en el navegador de microsoft edge

## Reportes
Para generar reportes se usara la herramienta cypress-mocha-awesome la cual creara un archivo html en el cual se podra ver el estado de las prueba realizadas y un video de la automatizacion. para esto se debe ejecutar las pruebas por medio de la CLI utilizando los comandos previamente mostrados