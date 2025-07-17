![TalkJS and Next.js Starter Kit cover, showing chat UI cards for a chatbox, inbox, and a popup UI.](/public/cover.png)

# TalkJS and Next.js Starter Kit

[Next.js](https://nextjs.org) starter kit with a full-featured chat, real-time messaging and notifications, built by [TalkJS](https://talkjs.com).

## Features

- **Pre-built chat UIs**:
  - `Chatbox` – A compact message window you can embed next to a booking, order, or user profile.
  - `Inbox` – A full messaging center, with sidebar and conversation view. Ideal for support or community messaging.
  - `Popup` – A floating chat window users can open on demand, shown in the bottom-right corner.
- Responsive layouts using **Tailwind CSS**
- **Deploy to Vercel** with one click.

### Chat features
- Private and group chat
- Persistent message history
- Typing indicators
- Read receipts
- Mentions and emoji reactions
- Link previews
- Voice messages
- Message editing
- Custom UI and actions
- Notifications (in-app, push & email)
- Presence indicators
- Moderation tools
- Media and file sharing

## Deploy to Vercel

1. Sign up or log in to [talkjs.com](https://talkjs.com), and copy the TalkJS App ID from the **Settings** page of your TalkJS dashboard.

2. Deploy this starter kit to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/talkjs/talkjs-vercel&env=NEXT_PUBLIC_TALKJS_APP_ID&envDescription=Your%20TalkJS%20App%20ID&envLink=https://talkjs.com/dashboard)

3. When prompted, add your TalkJS App ID as a value for the environment variable `NEXT_PUBLIC_TALKJS_APP_ID`.

<details>
<summary><h2>Running locally</h2></summary>

### 1. Clone this repository

```bash
git clone https://github.com/talkjs/talkjs-vercel
cd talkjs-vercel
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure environment variables

Create an `.env` file based on the example:

```bash
cp .env.example .env
```

Sign up or log in to [talkjs.com](https://talkjs.com), and copy your TalkJS App ID from the **Settings** page of your dashboard.

In your `.env` file, replace `<YOUR_APP_ID>` with your own TalkJS App ID:

```
NEXT_PUBLIC_TALKJS_APP_ID="<YOUR_APP_ID>"
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

### 5. View and edit

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

You can start editing any page, and changes update automatically. 

You can fully customize any aspect of the chat UI and functionality for the perfect in-app chat experience. Check out the [TalkJS documentation](https://talkjs.com/docs) to get started.
</details>

## Learn more

To learn more, check out the following resources:

* [TalkJS documentation](https://talkjs.com/docs) to learn about TalkJS and how to customize your chat.
* [Next.js documentation](https://nextjs.org/docs) to learn about Next.js features.
* [Deploying to Vercel](https://vercel.com/docs/deployments) to learn about deploying your app to Vercel.

## Support

Need help? Or do you have any questions? TalkJS devs are happy to support. [Get in touch.](https://talkjs.com/?chat)
