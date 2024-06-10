# Chromia Staking Project

## Overview

### Project Description
This project implements a staking protocol using Chromia, Rell, and the FT4 library. Users can stake FT4 tokens to earn a 10% annual yield. The yield can be claimed at any time, and users can initiate an unstake request, which will allow them to withdraw their tokens after a two-week notice period. A simple frontend is provided for interacting with the staking protocol.

### How It Works
1. **Staking Tokens:** Users can stake their FT4 tokens via the web interface. Staked tokens generate a 10% annual yield.
2. **Accumulated Yield:** Users can query the current accumulated yield at any time through the interface.
3. **Claiming Yield:** Users can claim their accumulated yield at any time, which will be credited to their account.
4. **Unstaking Tokens:** Users can initiate an unstake request. After a two-week notice period, they can withdraw their staked tokens.
5. **Unstake Request Status:** Users can query the status of their unstake request at any time through the interface.

### Setup Instructions
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/nati589/StakingProject
   cd StakingProject
   ```
2. **Install Dependencies:**
   - Ensure you have necessary tools installed (e.g., VS Code, Node.js, etc.).
   - Install Postgres
   - Install Rell extension for VS Code
   - Install frontend dependencies:
     ```sh
     cd staking-app-frontend
     npm install
     ```
   - Install backend dependencies:
     ```sh
     cd staking-app
     chr install
     ```
4. **Run the Frontend:**
   - Start the frontend server:
     ```sh
     npm run dev
     ```
5. **Run the Chromia Node:**
   - Start the Node server:
     ```sh
     chr node start
     ```

### Usage Instructions
1. **Access the Interface:**
   - Open your web browser and navigate to `http://localhost:3000`.
2. **Stake Tokens:**
   - Enter the amount of FT4 tokens you want to stake and submit the form.
3. **View Staked Amount and Yield:**
   - The interface will display the amount of tokens staked and the yield earned so far.
4. **Claim Yield:**
   - Click the "Claim Yield" button to withdraw your accumulated yield.
5. **Initiate Unstake Request:**
   - Click the "Unstake" button to initiate an unstake request.
6. **Complete Unstake Request:**
   - After two weeks, return to the interface and complete the unstake process to withdraw your tokens.
7. **Check Unstake Status:**
   - The interface will display the status of your unstake request.

### Additional Information
- **Contact:** For any questions or issues, please contact me at natimok55@gmail.com.


### Author Information
- **Name:** Natan Mekebib
- **Email:** natimok55@gmail.com
- **Phone Number:** +251946650560




