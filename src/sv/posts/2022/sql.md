---
title: SQL
date: 2022-05-16
tags: ['setup', 'sql']
templateEngineOverride: njk, md
category: resurser
summary: En introduktion till att skriva SQL-frågor för användning i kursen Webbserverprogrammering.
---

## Innan du börjar

SQL skrivs som frågor (querys). SQL frågor skrivs ofta med `VERSALER` för kommandon och gemener för parametrar. Detta är dock inget krav då MySQL inte gör en skillnad på stora och små bokstäver (förutom i vissa fall, typ databasnamn).
## En databas

 För att använda en databas behöver den först skapas (om den nu inte finns) och sedan väljas. För att skriva en query som skapar en databas skriver du:

```sql
CREATE DATABASE my_database;
```

Om du arbetat med tidigare [instruktioner](/posts/webbserver/#mysql) från det avsnittet, har du kanske en databas kallad `webbserver`. I så fall kan du använda den med `USE`.

```sql
USE webbserver;
```

{% image "./src/images/Screenshot 2022-05-16 120900.png", "Skärmdump av MySQL-klienten", "Så här kan det se ut när du skapar en ny databas och tabell." %}

## Tabeller

En SQL databas innehåller i sin tur en eller flera tabeller.

För att skapa en tabell i databasen så används `CREATE` kommandot men för att skapa en table så behöver vi ange minst ett fält för databasen. Vi passar även på att specificera teckenkodningen som utf8mb4 (vilket är det "vanliga" utf-8).

```sql
CREATE TABLE tabellnamn (id INT UNSIGNED AUTO_INCREMENT, PRIMARY KEY(id))
    ENGINE = innodb
    DEFAULT CHARSET = utf8mb4;
```

Inspektera tabellen med `DESCRIBE`.

```
DESCRIBE tabellnamn;

+-------+--------------+------+-----+---------+----------------+
| Field | Type         | Null | Key | Default | Extra          |
+-------+--------------+------+-----+---------+----------------+
| id    | int unsigned | NO   | PRI | NULL    | auto_increment |
+-------+--------------+------+-----+---------+----------------+
1 row in set (0.00 sec)
```

### Datatyper

I tabellen ovan ser vi att `id` är av typen `int unsigned`. Detta betyder att det är ett heltal (int) som inte kan vara negativt (unsigned).

I MySQL finns det ett antal olika datatyper. Här är några vanliga:

- `int` - ett heltal
- `varchar(0)` - en sträng, max 255 tecken
- `text` - en längre sträng
- `date` - ett datum
- `datetime` - ett datum och tid
- `timestamp` - ett datum och tid

### Auto increment

I tabellen ovan ser vi att `id` har `auto_increment` som extra. Detta betyder att varje gång vi lägger till en ny rad i tabellen så kommer `id` att öka med ett. Detta är ett sätt att skapa ett unikt id för varje rad i tabellen.