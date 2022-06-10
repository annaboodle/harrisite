/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { variables } from "../../styles/shared";

import SocialLinks from "./SocialLinks";

import me from "../../img/photos/xboxseriespumpkin.jpeg";

export default function Homepage() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px ${variables.pagePadding}px;
        max-width: 875px;
        margin: 0 auto;
        flex-direction: column;
        height: 100vh;

        @media (max-height: 688px) {
          // stop vertically centering the content when viewport is shorter than content
          height: auto;
        }

        @media (max-width: ${variables.mobile}px) {
          // stop vertically centering the content on mobile
          height: auto;
        }
      `}
    >
      {/* top content (centered header and subheader) */}
      <div
        css={css`
          text-align: center;
          display: flex;
          flex-direction: column;
          margin-bottom: 3rem;

          @media (max-width: ${variables.mobile}px) {
            margin-bottom: 2rem;
          }
        `}
      >
        <h1
          css={css`
            font-size: 80px;
            line-height: 0.9;
            letter-spacing: 2px;
            margin-bottom: 1.25rem;
            margin-top: 0;

            @media (max-width: ${variables.mobile}px) {
              font-size: 60px;
            }
          `}
        >
          Harrison Hoffman
        </h1>

        <p
          css={css`
            font-size: 20px;
            color: #4a4a4a;
            line-height: 1rem;
            margin-bottom: 0;
            text-transform: uppercase;
            font-weight: bold;

            @media (max-width: ${variables.mobile}px) {
              font-size: 14px;
            }
          `}
        >
          Seattle, WA | Product @ Xbox | GT: Squatch
        </p>
      </div>

      {/* body content (side by side image and text) */}
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;

          @media (max-width: ${variables.mobile}px) {
            flex-direction: column;
          }
        `}
      >
        {/* left side (img wrapper) */}
        <div>
          <img
            alt=""
            css={css`
              border-radius: 20px;
            `}
            src={me}
          ></img>
        </div>

        {/* right side (text) */}
        <div
          css={css`
            padding-left: 30px;

            @media (max-width: ${variables.mobile}px) {
              padding-left: 0;
              margin-top: 2rem;
            }
          `}
        >
          <p>
            As Principal Product Manager for Connected TV apps at Xbox, I bring
            Xbox experiences to 3rd party smart TVs and streaming devices to
            empower more gamers around the world to play Xbox games on their TV,
            without dedicated gaming hardware.
          </p>
          <p>
            I joined Team Xbox in 2015, turning my lifelong passion for gaming
            into a career! I recently led customer experience planning and
            coordination for Xbox Series X|S through launch, helping to deliver
            the Xbox experience that gamers use across console generations. I
            was also responsible for the Xbox Series X|S setup experience, which
            introduced fast setup via customers' mobile devices. Before that, I
            brought Alexa and Google Assistant integration to Xbox, which
            enables customers to control their Xbox consoles using their voice
            or mobile devices.
          </p>
          <p>
            I currently live in Seattle, Washington where you'll find me out at
            shows, dive bars, arcades, or in the mountains!
          </p>
          <SocialLinks></SocialLinks>
        </div>
      </div>
    </div>
  );
}
