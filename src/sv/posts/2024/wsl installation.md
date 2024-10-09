---
title: (om)Installera WSL
date: 2024-10-09
tags: ['wsl', 'ohmyz']
category: anteckningar
lead: En guide till att installera WSL, konfigurera Oh my Zsh och lite annat smått och gott.
draft: true
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

Nu kan nästan det roliga börja. 

### Men först behöver vi fixa en font i Windows

Vi behöver en font som stödjer alla tecken som vi vill använda, alltså programmeringsrelaterade tecken. Jag använder [Fira Code](https://www.nerdfonts.com/font-downloads) från Nerdfonts och har den installerad i Windows. 

Jag använder mig av [Windows terminal](https://www.microsoft.com/store/productId/9N0DX20HK701?ocid=pdpshare) och där kan jag ställa in vilken font som ska användas. Så i settings för Ubuntu profilen så ställer jag in Fira Code som font.

Och så behöver terminalen ett tema, [Windows Terminal Themes](https://windowsterminalthemes.dev/). Jag gillar [Mirage](https://windowsterminalthemes.dev/?theme=Mirage) vilket jag även använder i min [VS Code](https://marketplace.visualstudio.com/items?itemName=gerane.Theme-Mirage).

När du hämtar ett tema från Windows Terminal Themes så får du ett JSON objekt som du kan importera i Windows Terminal. Öppna settings och ladda json-filen. Leta reda på `schemes` och klistra sedan in din kopierade json i arrayen. Välj sedan ditt nya tema i profilen för Ubuntu.

## Konfigurera Oh my Zsh

Eftersom vi redan har ett tema från windows terminalen så behöver vi inte använda ett tema från Oh my Zsh annat än för att få andra funktioner. Jag använder ett tema som heter [Spaceship-prompt](https://github.com/spaceship-prompt/spaceship-prompt). Installationsinstruktioner finns på deras GitHub. 

1. Kontrollera så att du kör `zsh > 5.8.1` genom att köra `echo $ZSH_VERSION`.
2. Se till att du har en Nerd Font installerad.
3. Klona repot, `git clone https://github.com/spaceship-prompt/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt" --depth=1`.
4. Skapa en symbolisk länk, `ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"`.
5. Ange temat i din `.zshrc`-fil, `ZSH_THEME="spaceship"`.

Genom att köra `omz reload` så ska du se det nya temat.

För att konfigurera temat så följer vi instruktionerna på [Spaceship config](https://spaceship-prompt.sh/config/intro/). Det börjar med att skapa en configurationsfil, `touch ~/.spaceshiprc.zsh` där vi kan konfigurera temat som vi önskar.

Jag har just nu bara ändrat färgerna på git-statusen och lagt till en emoji för att visa vilken branch jag är på. 

```bash
# Do not truncate path in repos
SPACESHIP_DIR_TRUNC_REPO=false
```

### Plugins

- [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions/tree/master)
- [K](https://github.com/supercrabtree/k)