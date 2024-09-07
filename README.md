# Cashback Project

## Overview

The **Cashback Project** is a React application designed to manage and display user rewards and cashback information. This application allows users to:

1. **Track their earnings** from bookings made through the Balanceè platform.
2. **View their cashback history** with details of previous transactions.
3. **Cash out rewards** either directly or by converting them into promo codes.
4. **Manage bookings** and track cashback dynamically based on user interactions.

## Features

- **Earnings Overview**: Displays cashback earned and the current balance.
- **Cashback History**: Shows a list of past transactions with details such as date, amount, and booking information.
- **Cashout Options**: Allows users to either withdraw their cashback directly or convert it into promo codes.
- **Dynamic Updates**: Cashbacks are calculated based on bookings and updates are reflected in real-time.
- **Responsive Design**: The UI adjusts for different screen sizes
- **Error Handling**:  toasts are used to notify users about insufficient funds or other issues.
- **Animations**: Framer Motion is used to add smooth animations to pop-up components.

## Usage
A booking amount input field was added to simulate real experience with users any amount added is subtracted from the balance and a cashback is rewarded and can be withdrawn or converted to a promo code, error handling was put in place so a user cannot book higher than his balance, when his balance is 0 or when he has withdrawn/converted to promocode and his cashback balance is zero

## Technology Used
- React
- Vite
- Tailwind CSS
- Framer Motion



