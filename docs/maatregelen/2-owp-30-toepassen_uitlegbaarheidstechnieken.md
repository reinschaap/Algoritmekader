---
title: Stel vast welke uitlegbaarheidstechnieken moeten worden toegepast. 
id: urn:nl:ak:mtr:owp-07
toelichting: Uitlegbaarheidstechnieken dragen bij aan het transparant maken van de werking van een algoritme.
vereiste:
- aia-26-recht-op-uitleg-ai-besluiten
- awb-02-motiveringsbeginsel
levenscyclus:
- ontwerp
onderwerp:
- transparantie
rollen:
- beleid-en-advies
hide:
- navigation
- toc
---

<!-- tags -->

## Maatregel
Stel vast welke uitlegbaarheidstechnieken moeten worden toegepast voor het algoritme

## Toelichting
Uitlegbaarheidstechnieken dragen bij aan het transparant maken van de werking van een algoritme.

De keuze voor het type algoritme bepaalt hoe transparant je kunt zijn. Van rekenregels kun je namelijk precies uitleggen hoe deze tot een beslissing komen. Maar complexe AI-systemen kunnen een black box zijn.  Het is dan onduidelijk hoe deze systemen beslissingen maken. 

Het is belangrijk om een type algoritme te kiezen dat wat uitlegbaarheid passende is gezien de context waarin deze wordt ingezet. Zorg dat de verschillende afwegingen in de keuze voor het gebruik van een type algoritme worden vastgelegd.
 
Er zijn veel technieken vindbaar om de werking en keuzes van een algoritme beter bloot te leggen. De techniek en de mate waarin uitlegbaarheid mogelijk is, is afhankelijk van het type algoritme waarvoor gekozen wordt. Onderstaande lijst geeft handvatten bom de juiste methodes te vinden en toe te passen.

|--------------------|
|Tools voor design: UXAI: Design Strategy|
|Toolkit voor implementatie: https://xaitk.org/| 
|XAI as a service (IBM): https://research.ibm.com/blog/ai-explainability-360| 
|Tools voor design (Google): https://pair.withgoogle.com/| 
|Paper over (evaluatie) toolkits; https://www.ijcai.org/proceedings/2023/0747.pdf| 
|Overzicht metrieken XAI; https://dl.acm.org/doi/pdf/10.1145/3583558| 

**Veiligheid**
Vanuit veiligheidsoverwegingen kan bij specifieke algoritmes besloten worden om bepaalde informatie over de werking van een algoritme niet aan iedereen vrij te geven.   Houd rekening met mogelijke risico’s op aanvallen die kunnen ontstaan door het gebruik van uitlegbaarheidstechnieken, zoals omschreven in: A Survey of Privacy-Preserving Model Explanations: Privacy Risks, Attacks, and Countermeasures. 

**Transparency by design** 
Een manier om transparantie te bewerkstelligen is door het algoritme volgens het transparency-by-design gedachtegoed te ontwikkelen. Dit gedachtegoed is geïnspireerd door het privacy by design raamwerk. Door dit gedachtegoed toe te passen kan je ervoor zorgen dat transparantie in het volledige ontwikkelproces, en dus ook bij het ontwerp, wordt meegenomen. 

## Bijbehorende vereiste(n)

<!-- list_vereisten_on_maatregelen_page -->

## Risico
Als er geen rekening wordt gehouden met de benodigde uitlegbaarheid van een algoritme binnen een bepaalde context, ontstaat het risico dat je het algoritme niet goed kan controleren en ontstaat het risico dat het algoritme op een verkeerde wijze wordt geïnterpreteerd en gebruikt. 

## Bronnen

- [UXAI: Design Strategy](https://www.uxai.design/design-strategy) 
- [Part 2: Explaining AI in practice | ICO](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/explaining-decisions-made-with-artificial-intelligence/part-2-explaining-ai-in-practice/)
- [A Survey of Privacy-Preserving Model Explanations: Privacy Risks, Attacks, and Countermeasures](https://arxiv.org/pdf/2404.00673)
- [Towards Transparency by Design for Artificial Intelligence | Science and Engineering Ethics](https://link.springer.com/article/10.1007/s11948-020-00276-4)

## Voorbeeld

Heb jij een goed voorbeeld? Laat het ons weten!
