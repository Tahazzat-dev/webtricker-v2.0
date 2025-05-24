export const getThankingMailTemplate = () => {

    const template = `
    <!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; background-color:#f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:20px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:6px; box-shadow:0 0 10px rgba(0,0,0,0.05); padding:20px;">
            <!-- Logo -->
           <!-- <tr>
              <td align="center" style="padding: 20px 0;">
                <img src="https://yourdomain.com/logo.png" alt="Site Logo" width="120" style="display:block;" />
              </td>
            </tr> -->

            <!-- Thank You Message -->
            <tr>
              <td align="center" style="padding: 10px 20px;">
                <h1 style="margin:0; font-size:20px; color:#333333;">Message received!<br /> Thanks for your message.</h1>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 10px 30px 30px;">
                <p style="margin:0; font-size:16px; color:#555555; line-height:1.5;">
                  We have received your message and will get back to you shortly.<br />
                  In the meantime, feel free to browse our website or follow us on social media.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="padding: 20px 10px; border-top:1px solid #eeeeee;">
                <p style="margin:0; font-size:12px; color:#999999;">
                  &copy; 2025 Webtricker. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
    `;

    return template;
}