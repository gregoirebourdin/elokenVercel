import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from 'react-share';

import {
  RiLinkedinFill,
  RiFacebookFill,
  RiTwitterFill,
  RiLink,
  RiWhatsappFill,
} from 'react-icons/ri';


import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
export default function ShareArticle({ title }: any) {
  const { asPath } = useRouter();
  const shareUrl = process.env.NEXT_PUBLIC_WEBSITE_URL + asPath;
  function CopyToClipboard() {
    navigator.clipboard.writeText(shareUrl);
    toast.success('Lien copié avec succès');
  }
  return (
    <>
      <div className="pt-4 ">
        <div className="body-3 font-bold text-gray-900 dark:text-white group-hover:text-primary-500">
          <span className="text-primary-500">Vous aimez cet article ?</span>
          <br />
          Partagez le sur les réseaux sociaux
        </div>
        <div className="grid grid-cols-5 items-center mt-4 rounded-ui overflow-hidden gap-0.5 ">
          <TwitterShareButton url={shareUrl} title={title}>
            <div className="social-icon">
              <div className="h-full w-full flex items-center justify-center">
              <RiTwitterFill className=" h-4 w-4 sm:h-6 sm:w-6  " />
            </div>
            </div>
          </TwitterShareButton>
          <FacebookShareButton url={shareUrl} title={title}>
            <div className="social-icon">
              <div className="h-full w-full flex items-center justify-center">
                <RiFacebookFill className=" h-4 w-4 sm:h-6 sm:w-6  " />
              </div>
            </div>
          </FacebookShareButton>
          <LinkedinShareButton url={shareUrl} title={title}>
            <div className="social-icon">
              <div className="h-full w-full flex items-center justify-center">
              <RiLinkedinFill className=" h-4 w-4 sm:h-6 sm:w-6  " />
            </div>
            </div>
          </LinkedinShareButton>
          <WhatsappShareButton url={shareUrl} title={title}>
            <div className="social-icon">
              <div className="h-full w-full flex items-center justify-center">
              <RiWhatsappFill className=" h-4 w-4 sm:h-6 sm:w-6  " />
            </div>
            </div>
          </WhatsappShareButton>
          <button onClick={CopyToClipboard} className="social-icon">
            <div className="h-full w-full flex items-center justify-center">
            <RiLink className=" h-4 w-4 sm:h-6 sm:w-6  " />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
