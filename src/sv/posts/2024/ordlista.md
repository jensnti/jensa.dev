---
title: Ordlista
date: 2024-09-10
category: resurser
summary: "En ordlista för webbserverprogrammering."
tags: [ 'webbserver', 'node', 'express', 'linux']
---

I kursen webbserverprogramering så är det väldigt mycket nya ord och begrepp som dyker upp. Så under en lektion började vi tillsammans att skapa en ordlista. Här är den.

Listan får sägas är en work in progress och kommer att uppdateras. Men att jag skriver den betyder inte att du inte ska göra det. Skriv ner ord och förklaringar som du inte förstår. Det är en del av att lära sig.

## Allmänt

Inte helt lätt, men här hamnar en del ord som dyker upp i undervisningen.

| Ord | Förkortning | Förklaring |
|--|--|--|
| WSL | Windows Subsystem for Linux | Ett sätt att köra Linux på Windows |
| CLI | Command Line Interface | Ett sätt att interagera med datorn via terminalen |
| Ubuntu | | En distribution av Linux |
| Terminal | | Ett fönster där du kan skriva kommandon |
| Git | | Versionshanteringssystem |
| GitHub | | Plattform för att lagra och dela kod |

## Linux kommandon

Vi kör WSL i undervisningen och då är det bra att känna till några grundläggande kommandon.

| Ord | Förklaring |
|--|--|
| ls | Listar filer och mappar |
| cd | Byter mapp |
| pwd | Visar vilken mapp du är i |
| mkdir | Skapar en mapp |
| touch | Skapar en fil |
| rm | Tar bort en fil |
| cp | Kopierar en fil |
| mv | Flyttar en fil |
| cat | Visar innehållet i en fil |
| nano | Öppnar en texteditor |
| sudo | Kör kommandot som administratör |
| kill | Avslutar ett program |
| killall | Avslutar alla instanser av ett program |
| ps | Visar processer , auxf för allt |
| top | Visar processer i realtid |

## Webbserver

Här hamnar en del ord kopplade till webbserver och ganska många protokoll.

| Ord | Förkortning | Förklaring |
|--|--|--|
| HTTP | HyperText Transfer Protocol | Protokoll för att överföra data över internet |
| HTTPS | HyperText Transfer Protocol Secure | Säker version av HTTP |
| TCP | Transmission Control Protocol | Protokoll för att överföra data över internet. Otroligt omständigt och inte så effektivt. Använder handshakes osv. |
| IP | Internet Protocol | Protokoll för att överföra data över internet |
| UDP | User Datagram Protocol | Protokoll för att överföra data över internet. Till skillnad från TCP skickar det bara data, hanterar inte eventuella fel. |
| DNS | Domain Name System | Protokoll för att översätta domännamn till IP-adresser |
| URL | Uniform Resource Locator | Adress till en resurs på internet |
| REST | Representational State Transfer | Arkitektur för att bygga webbtjänster |

## Express

| Ord | Förkortning | Förklaring |
|--|--|--|
| Express | | Ett ramverk för att bygga webbapplikationer i Node.js |
| Middleware | | Funktioner som körs innan en route |
| Route | | En endpoint i en webbapplikation |
| View | | En representation av en webbsida |
| Nunjucks | | Ett templating-språk för att skapa dynamiska webbsidor |
| Static | | Statiska filer som bilder, css och javascript, sparas i /public |
| GET | | En HTTP-metod för att hämta data |
| POST | | En HTTP-metod för att skicka data |
| query | | En del av URL:en som innehåller data, skriv med ?v=id |
| params | | En del av URL:en som innehåller data, skriv med /:id |

## Node

| Ord | Förkortning | Förklaring |
|--|--|--|
| node | | JavaScript runtime, använder chrome v8 för att köra javascript |
| nvm | Node Version Manager | Verktyg för att hantera olika versioner av Node.js |
| npm | Node Package Manager | Pakethanterare för Node.js |
| package.json | | Fil som innehåller metadata om ett npm-paket |

## Säkerhet

| Ord | Förkortning | Förklaring |
|--|--|--|
| XSS | Cross-Site Scripting | En attack där en angripare injicerar skadlig kod i en webbsida |
| Stored XSS | | En typ av XSS-attack där skadlig kod lagras på servern och skickas till alla användare |
| Reflected XSS | | En typ av XSS-attack där skadlig kod skickas till en användare via en länk |
| Self XSS | | En typ av XSS-attack där en användare injicerar skadlig kod i sin egen webbläsare |
| CSRF | Cross-Site Request Forgery | En attack där en angripare får en användare att utföra en oönskad handling på en webbplats där användaren är inloggad |
| SQL Injection | | En attack där en angripare injicerar skadlig SQL-kod i en webbapplikation |


## Viktiga vscode shortcuts

| Kombination | Förklaring |
|--|--|
| `Ctrl + Shift + P` | Öppna kommandoprompten |
| `Ctrl + P` | Sök efter fil |
| `Shift + Alt + F` | Formatera fil |
