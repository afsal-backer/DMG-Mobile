# DMG Mobile Testing

## Overview

DMG Mobile Testing is an automated testing suite for the DMG Mobile application. It utilizes WebdriverIO with Appium, Cucumber and TypeScript. This project can run on BrowserStack Automate and on local.

## Prerequisites
Before setting up the project, ensure you have the following installed:

Node.js (v18 or newer)
Java (JDK 8 or newer)
Android Studio with an Android SDK


## Installation

### Clone the Repository

git clone [Repository URL]
cd DMG Mobile 

### Install Dependencies

npm install

## Set Apps

Place your android app .apk file in the apps folder. Make sure the same app name is passed to the wdio.conf.ts file.

## Set Environment Variables

In the .env file, fill in the necessary environment variables:

BROWSERSTACK_USERNAME,
BROWSERSTACK_ACCESS_KEY,
MAIL_USERNAME,
MAIL_PASSWORD

### Prepare Android Device or Emulator

Ensure your Android device is in developer mode and connected to your machine, or set up an Android emulator via Android Studio.

## Running Tests

To execute the tests, use the following command:
npm run android

Based on how you configured the wdio.conf.ts file (to run on local or on BrowserStack), this command will start the Appium server and run the tests on BrowserStack or the connected Android device/emulator.
Default setting is to run on BrowserStack.
