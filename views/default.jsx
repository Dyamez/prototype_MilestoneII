const React = require("react");
const currentYear = new Date().getFullYear();

function Def(html) {
  return (
    <html>
      <head>
        <title>Title</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        ></link>
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/places">Destinations</a>
            </li>
            <li>
              <a href="/places/new">Location</a>
            </li>
            <li>
              <a href="/places/comments">Comments</a>
            </li>
            <li>
              <a href="/places/calendar">Calendar</a>
            </li>
          </ul>
        </nav>
        {html.children}
      </body>
    </html>
  );
}

module.exports = Def;
