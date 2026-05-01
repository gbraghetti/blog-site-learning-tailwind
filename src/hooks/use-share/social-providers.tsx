import { Link } from "lucide-react";
import { siFacebook } from "simple-icons";
import { FaLinkedin, FaSlack, FaXTwitter } from "react-icons/fa6";
import { SimpleIcon } from "@/components/simpleIcon";

export type ShareConfig = {
  url: string;
  title?: string;
  text?: string;
};

export type SocialProvider =
  | "linkedin"
  | "facebook"
  | "slack"
  | "x"
  | "clipboard";

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(config.url)}`,
  },
  facebook: {
    name: "Facebook",
    icon: <SimpleIcon icon={siFacebook} size={20} />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`,
  },
  slack: {
    name: "Slack",
    icon: <FaSlack size={20} />,
    shareUrl: (config: ShareConfig) =>
      `https://slack.com/share?url=${encodeURIComponent(config.url)}
    &text=${encodeURIComponent(config.title || "")}`,
  },
  x: {
    name: "Twitter X",
    icon: <FaXTwitter size={20} />,
    shareUrl: (config: ShareConfig) =>
      `https://x.com/intent/tweet?url=${encodeURIComponent(config.url)}
    &text=${encodeURIComponent(config.title || "")}`,
  },
};
