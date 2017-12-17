Redovisningar
=============

Kursmoment 01
------------

Äntligen är jag igång med denna kurs, efter att ha kämpat med diverse andra kurser. Dessvärre får jag hålla ambitionsnivån låg nu då tiden är knapp och jag måste få in detta innan 3-veckorsuppropet. Med detta inte sagt att jag inte lagt tid på detta moment och försökt en hel del. Jag ville gärna använda mig av React och drog ner det. Jag fick också igång React på en egen port och kunde även få den att kommunicera med min Express-server om den låg och snurrade på en annan port. Dock kunde jag inte komma vidare och smälta samman dessa två delar. Jag följde ett flertal guider men kunde inte hitta någon som gjorde det jag ville på ett sätt som inte kändes väldigt komplicerat. Jag antar väl ändå att det inte är tanken att man ska ockupera två portar bara för att kunna köra både React och Express? Jag försökte se på hur andra studenter lyckats lösa det men blev inte klokare av det och fick till slut tyvärr ge upp, vilket kändes tungt. Jag hoppas ändå att jag kan återkomma senare under kursen med React och låta den ersätta Pug.

Även i övrigt har jag varit tvungen att hoppa över alla teknikval i detta skede, utöver de redan givna Express och Pug, även om jag tror att det skulle vara väldigt nyttigt att lära sig sådant som React, Gulp, webpack och dylikt. Jag hade heller ej tid att sätta mig in i att starta upp en egen server för Express-applikationen. Senare ämnar jag dock försöka med att starta upp en egen server på min nyligen införskaffade Raspberry Pi, eller nåt liknande.

Jag har i alla fall lyckats med att starta upp min Express-applikation på nodejs2-servern på port 8099. Förhoppningsvis ligger den kvar där ännu i läsande stund.

### Berätta utförligt om din syn på Express och Pug och hur de samverkar. Relatera till andra ramverk du jobbat med. Lyft fram de fördelar och eventuellt nackdelar du finner, eller bara notera skillnader och likheter.
Det jag bäst kan jämföra Express med är Anax och Flask som jag jobbat med i tidigare kurser. Flask använder sig också av en egen server som man startar genom att köra ett app-skript. Jag har endast använt Flask för ganska enkla syften så strukturen på de projekten är enklare än den som jag har i Express. Till exempel så har jag min router i en egen mapp i Express, samt har innehåll och layout separerat. Jag ser dock inte detta som skillnader mellan de två ramverken nödvändigtvis utan bara min implementation av dem.

Anax innehåller ingen server-applikation men är i övrigt mycket lik Express till filstruktur, med content- och view-mappar, samt en app-container som samlar ramverkets alla tjänster. Pakethanteringen är också snarlik med npm för Javascript och Composer för PHP. Alla tre ramverk har en mapp som samlar publika statiska filer såsom bilder, stylesheets och skript; i Anax kallas den htdocs och i de andra public.

Sammanfattningsvis så verkar Express så här i början inte så olikt andra ramverk jag använt. De största skillnaderna kommer av att de är skrivna i olika språk och därmed fungerar på lite olika sätt. Framförallt gäller detta PHP som måste exekveras på serversidan i motsats till andra språk.

Pug känns ganska snarlikt andra template-språk. Det är det renaste template-språket jag sett så det är ganska lättläst, även om det kanske är lite ovant i början. Funktionaliteten verkar vara i klass med andra template-språk såsom Handlebars. Med ett templatespråk så blir det klart att man flyttar över logiken någon annanstans, t.ex. till routern, medan man med PHP har valet att blanda presentation med logik lite som man själv vill, fast även med PHP så är det rekommenderat att separera dessa saker, t.ex. med MVC-modellen.

### Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?
Eftersom jag utgick ifrån express-generator-tjänsten så fick jag med en gång en bra struktur på mitt projekt. Jag har en public-mapp som innehåller mina stylesheets, bilder och js-skript som ska skickas med till klienten. Routes-mappen innehåller hanteringen av router och views mina vyer. Dessutom har jag lagt till en content-mapp där jag har markdown-filer med rent innehåll, som jag sedan importerar från mina vyer. Jag är inte så nöjd med att ha olika vy-filer för varje rutt, när vyerna jag just nu har är identiska till sin struktur. Jag kunde dock inte hitta något sätt att använda dynamiska paths i mitt include-statement, så därför är det så nu. Dock tror jag att jag, när sidan växer, kommer att förändra strukturen. Framförallt så har jag ingen config-mapp nu, men om komplexiteten ökar så kan jag vilja placera config-detaljer på ett eget ställe.

Det mesta kändes bekant då jag kunde åstadkomma en struktur snarlik den jag använt i Anax. Det var endast ganska små justeringar som behövde göras för att anpassa samma tänk till Express-generatorns katalogstruktur.

### Använde du någon form av scaffolding som Express erbjuder?
Som jag beskrivit ovan så använder jag express-generator för att skapa mitt projekt, med pug som template-motor. I övrigt använder jag generatorns grundinställningar.

### Jobbar du med Markdown för innehållet, eller annat liknande?
För enkelhetens skull så använder jag nästan exakt samma markdown-filer som jag hade i ramverk1-kursen och lade dem i en content-mapp. Jag använde sedan jstransformer-markdown-it inuti mina Pug-filer för att kompilera filerna.



Kursmoment 02
-------------

### Har du jobbat med Docker eller andra virtualiseringstekniker innan?
Docker är nytt för mig, även om jag stött på det tidigare när jag inventerade mina kunskapsbrister gällande PHP, där den dök upp som ett bra testverktyg med virtualisering. Tidigare har jag erfarenhet av VirtualBox samt Cordova som virtualiseringstekniker. VirtualBox är det ett bra tag sedan jag provade men jag har goda minnen av det, det kändes som ett mycket bra sätt att leka runt i en Linux-miljö. Cordova däremot var besvärligt vill jag minnas. Vi använde den i webapp-kursen och det var problem med att få den att kommunicera med yttre tjänster såsom kamera och liknande. Jag ställde mig därför aningen reserverat till Docker inledningsvis. Dessutom sitter jag just nu på en ganska klen laptop med endast 4GB RAM, så det finns en oro för att en massa virtuella maskiner och containers ska sänka min maskin.


### Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?
Docker känns mycket lämpat för att kunna testa samma projekt i olika miljöer och olika versioner av exempelvis PHP eller Node. Exakt hur testerna ska gå till återstår att se, men man kan i alla fall nu se i all enkelhet att ens projekt rullar i olika miljöer, vilket är bra. Med hjälp av docker-compose känns det superenkelt att ställa upp en massa olika testmiljöer som kan köras samtidigt. Detta känns som en bra grund för organiserat och omfattande testande.


### Gick allt smidigt eller stötte du på problem?
Docker känns som magi. Allting går alldeles för smidigt och snabbt och användbart för att vara sant. Visst bråkade det lite emellanåt, men jag tror att det var för att jag tagit bort images jag tänkte inte användes längre, men i själva verket behövdes de nånstans vilket ledde till sura miner från Docker. Det hela löstes dock enkelt med att rensa bort alla images och dra ner på nytt endast det jag behövde och bygga om mina egna images.

Vad är haken med Docker? Hur kan det fungera så smidigt? Jag märker att det laddas ner många stora images och mitt lagringsutrymme är rejält begränsat så jag har redan gjort det till en vana att rensa bland images med jämna mellanrum. Men annars då? Finns det en möjlighet att det blir tungrott i nåt skede med många containers? Projekten blir ju inte direkt lättviktiga. Samtidigt så är det detta Docker skryter med. Sammanfattningsvis så får jag alltså säga att första intrycket är väldigt positivt.

Det blir en del kommandon att komma ihåg med Docker. En del av de längre kommandona föll visserligen bort när jag gick över till Dockerfiles, men för att komma ihåg allt så sparar jag alla vanliga kommandon i min Makefile och package.json.


### Skapade du din egen image, berätta om den?
Jag har skapat en image och laddat upp den till [Docker Store](https://store.docker.com/community/images/emsa16/ramverk2-me). Imagen har tre taggar för tre olika versioner av Node: 9, 8 och 6. Alla taggarna innehåller alpine-versioner av Node, vilket är en mer lättviktig variant. Jag har också uppdaterat min docker-compose så att den skapar containers från dessa images istället för att bygga miljön själv. Har man inte dessa images lokalt så laddas de ner när man kör `docker run`. Går man istället via kommandot `docker-compose up` så kommer images att byggas på basen av de Dockerfiles som också ligger i projektet.



Kursmoment 03
-------------

Kursmoment 04
-------------

Kursmoment 05
-------------

Kursmoment 06
-------------

Kursmoment 07/10
-------------