/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import LinkedInIcon from "../../../img/icons/linkedin";
import TwitterIcon from "../../../img/icons/twitter";
import XboxIcon from "../../../img/icons/xbox";

import { variables, colors } from "../../../styles/shared";

export default function SocialLinks() {
  const linkedInLink = "https://www.linkedin.com/in/harrisonhoffman";
  const twitterLink = "https://twitter.com/harrisonhoffman";
  const xboxLink = "https://account.xbox.com/Profile?Gamertag=Squatch";

  return (
    <div
      css={css`
        display: flex;
        font-size: 24px;
        justify-content: flex-end;

        @media (max-width: ${variables.mobile}px) {
          justify-content: flex-start;
          margin-top: 2rem;
        }
      `}
    >
      <a
        css={css`
          margin-right: 0.5rem;
          &:hover {
            .li-normal {
              display: none;
            }
            .li-hover {
              display: block;
            }
          }
        `}
        href={twitterLink}
      >
        <span
          className="li-hover"
          css={css`
            display: none;
          `}
        >
          <TwitterIcon fill={colors.twitterblue} />
        </span>
        <span
          className="li-normal"
          css={css`
            display: block;
          `}
        >
          <TwitterIcon fill={colors.lighterGray} />
        </span>
      </a>

      <a
        css={css`
          margin-right: 0.5rem;
          &:hover {
            .li-normal {
              display: none;
            }
            .li-hover {
              display: block;
            }
          }
        `}
        href={linkedInLink}
      >
        <span
          className="li-hover"
          css={css`
            display: none;
          `}
        >
          <LinkedInIcon fill={colors.linkedinblue} />
        </span>
        <span
          className="li-normal"
          css={css`
            display: block;
          `}
        >
          <LinkedInIcon fill={colors.lighterGray} />
        </span>
      </a>

      <a
        css={css`
          &:hover {
            .li-normal {
              display: none;
            }
            .li-hover {
              display: block;
            }
          }
        `}
        href={xboxLink}
      >
        <span
          className="li-hover"
          css={css`
            display: none;
          `}
        >
          <XboxIcon fill={colors.xboxgreen} />
        </span>
        <span
          className="li-normal"
          css={css`
            display: block;
          `}
        >
          <XboxIcon fill={colors.lighterGray} />
        </span>
      </a>
    </div>
  );
}
