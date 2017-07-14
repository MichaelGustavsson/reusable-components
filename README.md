# reusable-components
Väldigt enkel demo hur man kan återanvända en Angular komponent i en *ngFor loop

Ibland så upptäcker man att man upprepar html strukturer om och om igen i samma vy. 
Det enda som man förändrar är det dynamiska datat i presentationen.

Hur löser man detta på enklast möjligaste sätt?
I AngularJS var svaret oftast att skapa ett anpassat "directive" med html och controller.

I Angular kan man givetvis också ta vägen att skapa strukturella direktiv. Men oftast enligt min erfarenhet så finns det enklare sätt.

Skapa en återanvändbar komponent.

Därför har jag skapat ett väldigt enkelt exempel på hur man kan använda en komponent flera gånger i samma vy och i flera vyer.
