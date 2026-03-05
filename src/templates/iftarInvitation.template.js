export function invitationAcceptedTemplate({
  facultyName,
  eventDate,
  eventTime,
  venue
}) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: Arial, sans-serif;
        background: #0b0f19;
        color: #f5d798;
        padding: 30px;
      }

      .card {
        max-width: 520px;
        margin: auto;
        background: #111827;
        border-radius: 16px;
        padding: 30px;
        border: 1px solid rgba(212,169,72,.3);
      }

      .title {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
      }

      .content {
        font-size: 16px;
        color: #e5e7eb;
      }

      .details {
        margin-top: 20px;
        padding: 16px;
        background: rgba(212,169,72,.08);
        border-radius: 10px;
      }

      .footer {
        margin-top: 30px;
        font-size: 12px;
        text-align: center;
        color: #9ca3af;
      }
    </style>
  </head>

  <body>
    <div class="card">
      <div class="title">🎉 Invitation Accepted</div>

      <div class="content">
        <p><strong>${facultyName}</strong> has accepted the Iftar invitation.</p>

        <div class="details">
          <p><strong>Date:</strong> ${eventDate ?? "TBA"}</p>
          <p><strong>Time:</strong> ${eventTime ?? "TBA"}</p>
          <p><strong>Venue:</strong> ${venue ?? "TBA"}</p>
        </div>
      </div>

      <div class="footer">
        CS 5th Semester Iftar Event
      </div>
    </div>
  </body>
  </html>
  `;
}