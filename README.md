# Overview

I decided to try to create a text analysis app with a simple dashboard for reviewing results.

## Quick demo

see [demo.mov](https://github.com/orteth01/saleskick-project/blob/main/demo.mov) for a demo video

## Pages

### `/`

The main page of the app has a text input where users can enter text they want to analyze. upon submitting, the text is analyzed and the result of the analysis is stored in firebase.

### `/dashboard`

The dashboard shows the results of the analysis in real-time. on the left side of the dashboard is a list of cards for each analysis. on the right side of the dashboard is a bar chart showing the distribution of negative, neutral, and positive texts.

# Notes

- This was my first time working with svelte and firebase, so a lot of my time was spent just getting the messaging and state working. I stuck to the 3 hour limit, so the app is half-baked and not polished.
- i decided to use [vader](https://github.com/cjhutto/vaderSentiment) for the sentiment analysis. I likely wouldn't use this for analyzing sales calls, for example, because it is tailored more toward social media text, but it was quick to install and use.
- i used chartjs for the bar chart.

with more time I would:

- fix the empty state when there are no texts analyzed yet
- polish the styles in general a bit more
- format the dates
- look into a more complex sentiment analysis tool. it would be great to store and visualize more data for each text blurb, like keywords

# sv

powered by [`sv`](https://github.com/sveltejs/cli).

# Local development

create a new project in firebase and set it up for a web app.

you'll need to set these environment variables in a `.env` file:

- VITE_FIREBASE_API_KEY=<your-value>
- VITE_FIREBASE_AUTH_DOMAIN=<your-value>
- VITE_FIREBASE_PROJECT_ID=<your-value>
- VITE_FIREBASE_STORAGE_BUCKET=<your-value>
- VITE_FIREBASE_MESSAGING_SENDER_ID=<your-value>
- VITE_FIREBASE_APP_ID=<your-value>

install deps

```bash
npm install
```

run the app

```bash
npm run dev
```
