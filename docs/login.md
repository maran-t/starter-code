# 🔐 Google OAuth Setup (One Tap Login)

Set up **Google One Tap Login** in your Angular project using the `g_id_signin` button and Google Identity Services. This setup provides a clean, user-friendly login flow with backend verification.

## Add Google Script to `index.html`

In your Angular project, open `src/index.html` and add the following inside the `<head>` tag:

```html
<script src="https://accounts.google.com/gsi/client" async defer></script>
```

This loads Google’s Identity Services library, required for rendering the sign-in button and handling credentials.

## Add the Sign-In Button in `oauth.html`

Place the following div where you want the Google button to appear:

```html
<div
  class="g_id_signin"
  data-type="standard"
  data-size="large"
  data-theme="outline"
  data-text="continue_with"
  data-shape="rectangular">
</div>
```

> This will be replaced automatically with the real Google Sign-In button.

## Initialize and Render Button in `oauth.ts`

Inside `OAuth2` Component, add this logic to initialize the Google button and handle the login response:

```ts
ngOnInit(): void {
  // ...
  this.init();
}

init() {
  window.onload = () => {
    window.google.accounts.id.initialize({
      client_id: environment.googleClientId,
      callback: this.handleCredentialResponse
    });

    window.google.accounts.id.renderButton(
      document.querySelector(".g_id_signin"),
      {
        theme: "filled_black",
        size: "large",
        shape: "rectangle",
        text: "continue_with",
        width: 350
      }
    );
  };
}

handleCredentialResponse(response: any) {
  fetch('/api/v1/oauth/google/callback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ credential: response.credential })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        window.location.href = '/';
      } else {
        throw new Error('Login failed');
      }
    })
    .catch(error => {
      console.error('Error during login:', error);
    });
}
```

## Add Environment Variable for Client ID

In `src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  googleClientId: 'YOUR_GOOGLE_CLIENT_ID'
};
```

> Replace `'YOUR_GOOGLE_CLIENT_ID'` with the actual client ID from your Google Cloud Console OAuth credentials.

Repeat this in `environment.prod.ts` for production.

## Add Type Definitions for `window.google`

To avoid TypeScript errors, create or update `src/global.d.ts` with:

```ts
interface Window {
  google: {
    accounts: {
      id: {
        initialize: (config: {
          client_id: string;
          callback: (response: any) => void;
        }) => void;
        renderButton: (
          parent: HTMLElement | null,
          options: {
            type?: string;
            theme?: string;
            size?: string;
            text?: string;
            shape?: string;
            width?: number;
          }
        ) => void;
        prompt: () => void;
      };
    };
  };
}
```

## Summary of this page

This setup:
- Uses Google's One Tap login experience
- Handles credential tokens securely
- Sends token to your backend (`/api/v1/oauth/google/callback`)
- Allows backend to validate and start a session

---

## Related Links for reference

- [Google Identity Services Docs](https://developers.google.com/identity/gsi/web)
- [Starter Guide](/guide)
- [Home](/)