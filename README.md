Crypto Checkout UI — Frontend Assessment


Tech Stack

React (Vite)

TypeScript

Tailwind CSS

React Router DOM

Lucide Icons

Screens Implemented

Two screens were selected from the Figma design:

1. Checkout Form

Payment type tabs

Editable “You pay” and “You receive” amounts

Currency selector with icons

Wallet selection (MetaMask, Rainbow, WalletConnect, others)

Disabled CTA until all required fields are completed

2. Checkout Review

Payment summary

Selected wallet confirmation

Final confirmation call-to-action

These screens demonstrate component reuse, state management, and layout consistency.

Setup Instructions
Clone the Repository
https://github.com/johnson2611/NovaCrust-Frontend.git

cd NovaCrust-lab

Install Dependencies
npm install

Run the Development Server
npm run dev


The application will be available at:

http://localhost:5173

Project Structure (Simplified)
src/
 ├─ components/
 │   ├─ pages/
 │   ├─ AmountCards/
 │   ├─ Tabs/
 │   ├─ Button/
 │   └─ SelectRow/
 ├─ wallets/
 │   └─ PaySelect/PaySelectForm
 ├─ currencies/
 │   └─ CurrenciesDropdown.tsx
 ├─ assets/
 │   └─ icons/
 ├─ App.tsx
 └─ main.tsx

Functional Notes

All form inputs are controlled using React state

The Convert button is disabled until required fields are completed

Navigation between screens is handled via React Router

Currency and wallet data are mocked

Icons are statically imported for reliability and clarity