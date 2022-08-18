---
title: Webbserver
date: 2022-05-16
update: 2022-06-30
tags: ['webbserver', 'setup', 'node', 'wsl', 'sql']
templateEngineOverride: njk, md
category: resurs
lead: Istället för att dela upp det jag skriver på flera olika webbplatser (kursböcker) har jag bestämt mig för att samla det här. Det här är alltså en introduktionspost till det du behöver för att kunna arbeta med kursen webbserverprogrammering (i min regi).
---

För kursen Webbserverprogrammering 1 på gymnasienivå har jag valt tekniken, eller stacken, Node, Mysql och WSL. Jag anser att den är relevant och bra plattform att utgå ifrån. Den här stacken har även fördelen att använda javascript backend, för då använder vi samma programmeringsspråk som för frontend. Hosting, som sista pusselbit, gör vi med molntjänster.

Det här en introduktion till de olika delarna du behöver förbereda för att kunna arbeta med kursen. Här hittar du installationsinstruktioner, länkar och exempel.

## Windows Subsystem for Linux

WSL låter oss köra Linux under Windows. Det är i min mening helt fantastiskt och med det slipper vi dual-boot och massa annan ondska. Det är enkelt och smidigt (värdeord, relativt i sammanhanget, för alternativen är mer komplexa) och ger oss tillgång till bash i en terminal under Windows. Med WSL2 går det även att köra grafiska program om du så önskar.

Att kunna åtminstone lite bash och kunna arbeta i terminalen är viktigt för att arbeta med kod anser jag. Med WSL kan du välja vilken [Linux dist](https://en.wikipedia.org/wiki/Linux_distribution) du vill köra, men till att börja med rekommenderar jag Ubuntu (finns i Microsoft store).

* [Installera WSL](https://docs.microsoft.com/en-us/windows/wsl/install)
* [Windows Terminal](https://docs.microsoft.com/en-us/windows/terminal/install)

När du installerar så var noga när du skapar en användare, glöm inte bort att sätta ett lösenord (som du kommer ihåg). När installationen är slutförd så behöver du uppdatera din dist (tänk windows update), kör du Ubuntu så använder du följande kommandon i terminalen.

```bash
sudo apt update
sudo apt upgrade
```

I bash kan du sedan skapa en code mapp där du kan spara dina projekt.

```bash
cd
mkdir code
cd code
ls -la
```

{% image "./src/images/Screenshot 2022-05-16 115024.png", "Skärmdump av WSL", "Skärmdump av WSL" %}

### Några användbara bash kommandon

| Kommando | Beskrivning |
| --- | --- |
| ```sudo KOMMANDO``` | Kör kommando som superuser |
| ```ls``` | Listar innehållet i en mapp, ```-la``` för att se allt |
| ```cd MAPP``` | Går till en annan mapp, enbart cd tar dig till din /home mapp |
| ```mkdir MAPP``` | Skapar en ny mapp |
| ```touch FIL``` | Skapar en fil |
| ```rm FIL/MAPP``` | Tar bort en fil, ska du ta bort en mapp med filer lägg till ```-rf```, recursive force |
| ```cp FIL DEST``` | Kopierar en fil till angiven destination |
| ```mv FIL DEST``` | Flyttar en fil till angiven destination |
| ```cat FIL``` | Läser en fil och skriver ut den |
| ```history``` | Listar historik, du kan seadan köra kommandot från historiken med !nummer |

## Nodejs

[Node](https://nodejs.org/en/) är en javascript runtime byggd på Chrome V8s javascript motor. Med ramverket[Express](https://expressjs.com/) blir Node den webbserver (för utveckling) vi använder. Genom att använda Node får vi en koppling till att använda [Node packet manager (npm)](https://www.npmjs.com/).

För att installera och köra Node samt NPM så använder vi oss utan Node Version Manager(nvm).

* [Installera Node](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl#install-nvm-nodejs-and-npm)

## MySQL

För att arbeta med databas så använder vi [MySQL](https://www.mysql.com/). SQL är ett språk för relationsdatabaser, MySQL är en hanterare för detta. Vi använder SQL som databasspråk för att det är användbart och relevant att kunna. Vi kör MySQL för att det är en av de vanligaste databaserna.

MySQL körs med en server på din eller en annan dator. Du kan sedan använda en client för att koppla upp dig till databasservern. FÖr att installera MySQL server och klient kör.

```bash
sudo apt install mysql-server mysql-client
```

WSL verkar inte starta upp MySQL servern korrekt när det startas, för att starta om/upp servern.

```bash
sudo service mysql restart
```

Med servern igång kan du skapa en databasanvändare för den. Detta måste göras som superuser (säkerhet). För att skapa en användare behöver du koppla upp dig till databasservern från användaren root, för att göra det kör du kommandot som [sudo](https://sv.wikipedia.org/wiki/Sudo).

```bash
sudo mysql -u root
```

{% image "./src/images/Screenshot 2022-05-16 115805.png", "Skärmdump av MySQL-klienten", "Skärmdump av MySQL-klienten. Notera att trots varningen så är restarten av servern [  OK  ], vid fel så står det inte OK." %}

Väl inne i MySQL klienten så börja med att skapa en databas med namnet `webbserver`.

```sql
CREATE DATABASE webbserver;
```

Sedan kör du följande kommando för att skapa en user med alla rättigheter till databasen `webbserver`. Kom ihåg att byta ut `username` och `password`.

```sql
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON webbsever.* TO 'username'@'localhost';
FLUSH PRIVILEGES;
```

Anledningen att vi ger användaren rättigheter till databasen är av säkerhetsskäl och på det här sättet undviker vi att skapa en användare med alla rättigheter till allt.

När du skapat användaren så avsluta med `exit`. Du kan nu ansluta till databasen igen med din skapade användare.