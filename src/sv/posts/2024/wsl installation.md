---
title: (om)Installera WSL
date: 2024-10-09
tags: ['wsl', 'ohmyz']
category: anteckningar
lead: En guide till att installera WSL, konfigurera Oh my Zsh och lite annat smått och gott.
---

Så mitt WSL började bete sig väldigt konstigt häromdagen. Främst så var det filsystemet som knappt reagerade, filer kunde inte skrivas och det var allmänt segt. Det började med uppgraderingen av Eleventy till version 3 och npm som tuggade i evigheter. Vad det berodde på, det är oklart, men jag tog och avinstallerade WSL och installerade om allt från början. 

Så här är en minnesanteckning för mig själv, det kan även kallas en guide.

## Installera WSL

Jag började med att ta bort min tidigare disitrbution, Ubuntu 20.04. Det gjorde jag genom att köra PowerShell som administratör och skriva:

```powershell
wsl --unregister Ubuntu-20.04
```

Efter jag gjort det så tog jag bort WSL genom att slå av det i windows-features, jag fick sedan starta om, slå på WSL och starta om igen.

När det var klart så hämtade jag senaste Ubuntu genom Microsoft Store och installerade det (det är fortfarande lite lustigt kan jag tycka). Jag startade upp Ubuntu och skapade en användare och lösenord.

## Installera Oh my Zsh

Jag har övergivit bash för Oh my Zsh för länge sedan. Varför har jag nog inget bra svar på annat än att det krävdes för att få vissa teman att fungera.

Vi behöver först installera Zsh, det gör vi genom att köra:

```bash
sudo apt install zsh
```

Sedan kan vi följa instruktioner från [Oh my Zsh](https://ohmyz.sh/#install). 

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Konfigurera Oh my Zsh

Nu kan det roliga börja. 