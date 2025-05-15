<h1 align="center">
  <img
    width="300"
    alt="instagram"
    src="https://live.staticflickr.com/65535/54520015550_47cda6d5c9_w.jpg">
</h1>

---

<h3 align="center">
  <strong>

📊 Order Management 📊
  </strong>
</h3>

---

<p align="center">
  <img 
    width="1200"
    alt="home"
    src="https://live.staticflickr.com/65535/54521123195_426cd83428_c.jpg"/>
</p>

---

## Overzicht

### Order Management

Dit project is een full-stack Order Management Dashboard gebouwd met Angular voor de frontend en Express.js voor de backend. Het stelt gebruikers in staat om hun orders te beheren, inclusief het bekijken, aanmaken en exporteren van orders. Het dashboard maakt gebruik van AG-Grid voor het weergeven en filteren van orderdata, met ondersteuning voor functies zoals sorteren, paginering en kolombeheer.

De applicatie bevat ook gebruikersbeheer functionaliteit, waarmee gebruikers zich kunnen registreren, inloggen en uitloggen, terwijl hun persoonlijke ordergegevens behouden blijven.

### Kenmerken

**Frontend (Angular)**:

- **Gebruikersauthenticatie** (Registreren, Inloggen, Uitloggen)

- **Weergave en beheer van orders met AG-Grid** (sorteren, filteren en pagineren)

- **Kolom slepen-en-neerzetten en CSV-export voor orderdata**

- **Orderdetails beschikbaar in een modal**

**Backend (Express)**:

- **Eenvoudige REST API voor ordergegevensbeheer**

<p align="center">
  <img width="600" src="https://live.staticflickr.com/65535/54519912317_b5fe387a24.jpg" alt="Image 1">
  
  
</p>

**Endpoints**:
```
GET /orders: Haal een lijst van orders op

GET /orders/:id: Haal de details van een specifieke order op

POST /orders: (Optioneel) Maak een nieuwe order aan
```
- **Simpele authenticatie en sessies op basis van tokens**

<p align="center">
  <img width="500" src="https://live.staticflickr.com/65535/54518776942_ded8161794.jpg" alt="Image 1">
  
  <img width="500" src="https://live.staticflickr.com/65535/54519645861_1b759d5707_z.jpg" alt="Image 2">
  
</p>

```
POST /auth/signup: Maak een nieuwe gebruiker aan

POST /auth/signin: Verleen toegang door in te loggen met gebruikersgegevens

```

---

<p align="center">
  <img 
    width="1200"
    alt="home"
    src="https://live.staticflickr.com/65535/54520958119_df4d243e10_c.jpg"/>
</p>

## Technologies Used
### Frontend
- Angular 19
- AG-Grid Enterprise
- RxJS
- Angular Reactive Forms
- JWT Authentication

### Backend
- Express.js 5
- JWT Authentication
- BcryptJS password hashing
- REST API best practices
- Morgan logging

 <p align="left">
  <img src="https://img.shields.io/badge/angular-00008B?style=for-the-badge&logo=angular&logoColor=white"/>
  <img src="https://img.shields.io/badge/ag-grid-acace6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/rxjs-800000?style=for-the-badge&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/angular=reactive-forms-85EA2D?style=for-the-badge&logo=stripe&logoColor=white"/>
  <img src="https://img.shields.io/badge/jwt-ffa500?style=for-the-badge&logo=WebSockets&logoColor=white"/>
  <img src="https://img.shields.io/badge/expressjs-ff0000?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/bcryptjs-0000FF?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
   <img src="https://img.shields.io/badge/morgan-008000?style=for-the-badge&logo=jwt&logoColor=white"/>
  <img src="https://img.shields.io/badge/git-ffff00?style=for-the-badge&logo=git&logoColor=white"/>
  <img src="https://img.shields.io/badge/github-bf00ff?style=for-the-badge&logo=github&logoColor=white"/>

</p>

---

## Aan de Slag

### Vereisten
- **Node.js (versie 16 of hoger)**

- **npm (Node Package Manager)**

### Installatie

1- **Clone de repository:**

```
git clone https://github.com/jouw-gebruikersnaam/order-management-anari.git

```

2- **Installeer de afhankelijkheden voor zowel de frontend als de backend:**

- **Voor de client (Angular frontend):**

```
cd client
npm install

```

- **Voor de server (Express backend):**

```
cd server
npm install

```

### De Applicatie Draaien

- **Start de backend server:**

```
npm run dev

```

- **Start de frontend Angular applicatie:**

```
cd client
cd order-management-client
ng serve
```

**De frontend is beschikbaar op http://localhost:4200, en de backend op http://localhost:3000.**

---

### Technische Keuzes

- **AG-Grid Enterprise gekozen voor:**

Geavanceerde grid-functionaliteiten (groeperen, pivoterend)

Superieure prestaties bij grote datasets

Ingebouwde CSV-exportmogelijkheden

- **JWT Authenticatie geïmplementeerd voor:**

Statusloze authenticatie

Veilige token-gebaseerde autorisatie

Gemakkelijke integratie met de frontend

- **Angular Reactive Forms gebruikt voor:**

Complexe formuliervalidatie

Real-time formulierstatusbeheer

Aangepaste formulierbesturingselementen

### Wat is Geïmplementeerd
✅ Basisvereisten
✅ Alle optionele functies
✅ Uitgebreide foutafhandeling
✅ Volledige documentatie


---

- **Opmerkingen:**

De backend slaat de gegevens op in het geheugen. Gegevens gaan verloren wanneer de server opnieuw wordt opgestart.

---

## Conclusie
Deze applicatie dient als een basis voor een full-stack orderbeheersysteem, met real-time updates, op maat gemaakte weergaven en gebruikersspecifieke gegevensverwerking. Het biedt een sterke basis voor het bouwen van complexere orderbeheersystemen of dashboards.

---

## Licentie

Dit project is gelicenseerd onder de [MIT License](LICENSE).

---

## Gebouwd met ❤️ door Payam Anari

Bedankt voor het verkennen van de Order Management applicatie! Als je vragen hebt, feedback wilt geven, of gewoon hallo wilt zeggen, voel je vrij om [reach out](mailto:anari.p62@gmail.com). Veel plezier met je fitnessreis!

---


